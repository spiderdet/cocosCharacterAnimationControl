const binding = tj.getFileSystemManager();
const { FSReqCallback } = binding;
const tjBuffer = tj.buf;
const tjEncodings = tj.string_decoder;

const kEmptyObject = Object.freeze({ __proto__: null });
const kReadFileUnknownBufferLength = 64 * 1024;
const kReadFileBufferLength = 512 * 1024;
const kWriteFileMaxChunkSize = 512 * 1024;
// Most platforms don't allow reads or writes >= 2 GiB.
// See https://github.com/libuv/libuv/pull/1501.
const kIoMaxLength = 2 ** 31 - 1;
const {
  O_RDONLY,
  O_SYNC,
  O_RDWR,
  O_TRUNC,
  O_CREAT,
  O_WRONLY,
  O_EXCL,
  O_APPEND,
  kMaxLength,
  S_IFMT,
  S_IFREG,
  F_OK,
  R_OK,
  W_OK,
  X_OK,
  COPYFILE_EXCL,
  COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE,
} = {
  O_RDONLY: binding.O_RDONLY,
  O_SYNC: binding.O_SYNC,
  O_RDWR: binding.O_RDWR,
  O_TRUNC: binding.O_TRUNC,
  O_CREAT: binding.O_CREAT,
  O_WRONLY: binding.O_WRONLY,
  O_EXCL: binding.O_EXCL,
  O_APPEND: binding.O_APPEND,
  kMaxLength: binding.kMaxLength,
  S_IFMT: binding.S_IFMT,
  S_IFREG: binding.S_IFREG,
  F_OK: binding.F_OK,
  R_OK: binding.R_OK,
  W_OK: binding.W_OK,
  X_OK: binding.X_OK,
  COPYFILE_EXCL: binding.COPYFILE_EXCL,
  COPYFILE_FICLONE: binding.COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE: binding.COPYFILE_FICLONE_FORCE,
};

// The access modes can be any of F_OK, R_OK, W_OK or X_OK. Some might not be
// available on specific systems. They can be used in combination as well
// (F_OK | R_OK | W_OK | X_OK).
const kMinimumAccessMode = Math.min(F_OK, W_OK, R_OK, X_OK);
const kMaximumAccessMode = F_OK | W_OK | R_OK | X_OK;

const kDefaultCopyMode = 0;
// The copy modes can be any of COPYFILE_EXCL, COPYFILE_FICLONE or
// COPYFILE_FICLONE_FORCE. They can be used in combination as well
// (COPYFILE_EXCL | COPYFILE_FICLONE | COPYFILE_FICLONE_FORCE).
const kMinimumCopyMode = Math.min(
  kDefaultCopyMode,
  COPYFILE_EXCL,
  COPYFILE_FICLONE,
  COPYFILE_FICLONE_FORCE
);
const kMaximumCopyMode =
  COPYFILE_EXCL | COPYFILE_FICLONE | COPYFILE_FICLONE_FORCE;

const { byteLengthUtf8, indexOfString, createFromString, utf8Write } = {
  byteLengthUtf8: tjBuffer.byteLengthUtf8,
  indexOfString: tjBuffer.indexOfString,
  createFromString: tjBuffer.createFromString,
  utf8Write: tjBuffer.utf8Write,
};

// TODO support require path.js
// Note: currently only handles posix systems.
const CHAR_FORWARD_SLASH = 47; /* / */
const CHAR_BACKWARD_SLASH = 92; /* \ */

function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}

function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}

/**
 * @param {string} path
 * @returns {string}
 */
function toNamespacedPath(path) {
  // Non-op on posix systems
  return path;
}

/**
 * path.resolve([from ...], to)
 * @param {...string} args
 * @returns {string}
 */
function resolve(...args) {
  let resolvedPath = "";
  let resolvedAbsolute = false;

  for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path = i >= 0 ? args[i] : posixCwd();
    validateString(path, `paths[${i}]`);

    // Skip empty entries
    if (path.length === 0) {
      continue;
    }

    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeString(
    resolvedPath,
    !resolvedAbsolute,
    "/",
    isPosixPathSeparator
  );

  if (resolvedAbsolute) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
}

function validateString(value, name) {
  if (typeof value !== "string") {
    throw new Error(`${name} must be of type string`);
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code = 0;
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length) code = path.charCodeAt(i);
    else if (isPathSeparator(code)) break;
    else code = CHAR_FORWARD_SLASH;

    if (isPathSeparator(code)) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (dots === 2) {
        if (
          res.length < 2 ||
          lastSegmentLength !== 2 ||
          res.charCodeAt(res.length - 1) !== CHAR_DOT ||
          res.charCodeAt(res.length - 2) !== CHAR_DOT
        ) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? `${separator}..` : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += `${separator}${path.slice(lastSlash + 1, i)}`;
        else res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

const posixCwd = (() => {
  // if (platformIsWin32) {
  //   // Converts Windows' backslash path separators to POSIX forward slashes
  //   // and truncates any drive indicator
  //   const regexp = /\\/g;
  //   return () => {
  //     const cwd = StringPrototypeReplace(process.cwd(), regexp, '/');
  //     return StringPrototypeSlice(cwd, StringPrototypeIndexOf(cwd, '/'));
  //   };
  // }

  // We're already on POSIX, no need for any transformations
  return () => process.cwd();
})();

// TODO support require Buffer.js
// Provide validateInteger() but with kMaxLength as the default maximum value.
const validateOffset = (value, name, min = 0, max = kMaxLength) =>
  validateInteger(value, name, min, max);

function _copyActual(source, target, targetStart, sourceStart, sourceEnd) {
  if (sourceEnd - sourceStart > target.length - targetStart)
    sourceEnd = sourceStart + target.length - targetStart;

  let nb = sourceEnd - sourceStart;
  const sourceLen = source.length - sourceStart;
  if (nb > sourceLen) nb = sourceLen;

  if (sourceStart !== 0 || sourceEnd < source.length)
    source = new Uint8Array(source.buffer, source.byteOffset + sourceStart, nb);

  TypedArrayPrototypeSet(target, source, targetStart);

  return nb;
}

// TODO buffer.js
// const Buffer = {};
function Buffer(arg, encodingOrOffset, length) {
  if (typeof arg === "number") {
    if (typeof encodingOrOffset === "string") {
      throw new Error(`invalid arg type ${arg}`);
    }
    return Buffer.alloc(arg);
  }
  return Buffer.from(arg, encodingOrOffset, length);
}

Object.defineProperty(Buffer, Symbol.species, {
  __proto__: null,
  enumerable: false,
  configurable: true,
  get() {
    return FastBuffer;
  },
});

Buffer.poolSize = 8 * 1024;
let poolSize, poolOffset, allocPool;
// A toggle used to access the zero fill setting of the array buffer allocator
// in C++.
// |zeroFill| can be undefined when running inside an isolate where we
// do not own the ArrayBuffer allocator.  Zero fill is always on in that case.
let zeroFill = binding.getZeroFillToggle();
const untransferable_object_private_symbol = Symbol(
  "untransferable_object_private_symbol"
);

Buffer.isEncoding = function isEncoding(encoding) {
  return (
    typeof encoding === "string" &&
    encoding.length !== 0 &&
    normalizeEncoding(encoding) !== undefined
  );
};

Buffer.concat = function concat(list, length) {
  if (!Array.isArray(list)) {
    throw new Error("list must be an array");
  }

  if (list.length === 0) return new FastBuffer();

  if (length === undefined) {
    length = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i].length) {
        length += list[i].length;
      }
    }
  } else {
    validateOffset(length, "length");
  }

  const buffer = Buffer.allocUnsafe(length);
  let pos = 0;
  for (let i = 0; i < list.length; i++) {
    const buf = list[i];
    if (!isUint8Array(buf)) {
      // TODO(BridgeAR): This should not be of type ERR_INVALID_ARG_TYPE.
      // Instead, find the proper error code for this.
      throw new Error(`list[${i}] must be a Buffer or Uint8Array`);
    }
    pos += _copyActual(buf, buffer, pos, 0, buf.length);
  }

  // Note: `length` is always equal to `buffer.length` at this point
  if (pos < length) {
    // Zero-fill the remaining bytes if the specified `length` was more than
    // the actual total length, i.e. if we have some remaining allocated bytes
    // there were not initialized.
    buffer.fill(0, pos, length);
  }

  return buffer;
};

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 */
Buffer.from = function from(value, encodingOrOffset, length) {
  if (typeof value === "string") return fromString(value, encodingOrOffset);

  if (typeof value === "object" && value !== null) {
    if (ArrayBuffer.isView(value) || value instanceof SharedArrayBuffer)
      return fromArrayBuffer(value, encodingOrOffset, length);

    const valueOf = value.valueOf && value.valueOf();
    if (
      valueOf != null &&
      valueOf !== value &&
      (typeof valueOf === "string" || typeof valueOf === "object")
    ) {
      return from(valueOf, encodingOrOffset, length);
    }

    const b = fromObject(value);
    if (b) return b;

    if (typeof value[SymbolToPrimitive] === "function") {
      const primitive = value[SymbolToPrimitive]("string");
      if (typeof primitive === "string") {
        return fromString(primitive, encodingOrOffset);
      }
    }
  }

  throw new ERR_INVALID_ARG_TYPE(
    "first argument",
    ["string", "Buffer", "ArrayBuffer", "Array", "Array-like Object"],
    value
  );
};

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer
 * instance. If `--zero-fill-buffers` is set, will zero-fill the buffer.
 */
Buffer.allocUnsafe = function allocUnsafe(size) {
  validateNumber(size, "size", 0, kMaxLength);
  return allocate(size);
};

/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled
 * Buffer instance that is not allocated off the pre-initialized pool.
 * If `--zero-fill-buffers` is set, will zero-fill the buffer.
 */
Buffer.allocUnsafeSlow = function allocUnsafeSlow(size) {
  validateNumber(size, "size", 0, kMaxLength);
  return createUnsafeBuffer(size);
};

function allocate(size) {
  if (size <= 0) {
    return new FastBuffer();
  }
  if (size < Buffer.poolSize >>> 1) {
    if (size > poolSize - poolOffset) createPool();
    const b = new FastBuffer(allocPool, poolOffset, size);
    poolOffset += size;
    alignPool();
    return b;
  }
  return createUnsafeBuffer(size);
}

function fromStringFast(string, ops) {
  const length = ops.byteLength(string);

  if (length >= Buffer.poolSize >>> 1)
    return createFromString(string, ops.encodingVal);

  if (length > poolSize - poolOffset) createPool();
  let b = new FastBuffer(allocPool, poolOffset, length);
  const actual = ops.write(b, string, 0, length);
  if (actual !== length) {
    // byteLength() may overestimate. That's a rare case, though.
    b = new FastBuffer(allocPool, poolOffset, actual);
  }
  poolOffset += actual;
  alignPool();
  return b;
}

function fromString(string, encoding) {
  let ops;
  if (typeof encoding !== "string" || encoding.length === 0) {
    if (string.length === 0) return new FastBuffer();
    ops = encodingOps.utf8;
  } else {
    ops = getEncodingOps(encoding);
    if (ops === undefined) throw new Error("unknown encoding");
    if (string.length === 0) return new FastBuffer();
  }
  return fromStringFast(string, ops);
}

function fromArrayBuffer(obj, byteOffset, length) {
  // Convert byteOffset to integer
  if (byteOffset === undefined) {
    byteOffset = 0;
  } else {
    byteOffset = +byteOffset;
    if (Number.isNaN(byteOffset)) byteOffset = 0;
  }

  const maxLength = obj.byteLength - byteOffset;

  if (maxLength < 0) throw new Error("error buffer offset out of bounds");

  if (length === undefined) {
    length = maxLength;
  } else {
    // Convert length to non-negative integer.
    length = +length;
    if (length > 0) {
      if (length > maxLength)
        throw new Error("error buffer length out of bounds");
    } else {
      length = 0;
    }
  }

  return new FastBuffer(obj, byteOffset, length);
}

class FastBuffer extends Uint8Array {
  // Using an explicit constructor here is necessary to avoid relying on
  // `Array.prototype[Symbol.iterator]`, which can be mutated by users.
  // eslint-disable-next-line no-useless-constructor
  constructor(bufferOrLength, byteOffset, length) {
    super(bufferOrLength, byteOffset, length);
  }
}
FastBuffer.prototype.constructor = Buffer;
FastBuffer.prototype.utf8Write = utf8Write;

function createPool() {
  poolSize = Buffer.poolSize;
  allocPool = createUnsafeBuffer(poolSize).buffer;
  markAsUntransferable(allocPool);
  poolOffset = 0;
}
createPool();

function alignPool() {
  // Ensure aligned slices
  if (poolOffset & 0x7) {
    poolOffset |= 0x7;
    poolOffset++;
  }
}

// This would better be placed in internal/worker/io.js, but that doesn't work
// because Buffer needs this and that would introduce a cyclic dependency.
function markAsUntransferable(obj) {
  if ((typeof obj !== "object" && typeof obj !== "function") || obj === null)
    return; // This object is a primitive and therefore already untransferable.
  obj[untransferable_object_private_symbol] = true;
}

function createUnsafeBuffer(size) {
  zeroFill[0] = 0;
  try {
    return new FastBuffer(size);
  } finally {
    zeroFill[0] = 1;
  }
}

const encodingOps = {
  utf8: {
    encoding: "utf8",
    encodingVal: tjEncodings.utf8,
    byteLength: byteLengthUtf8,
    write: (buf, string, offset, len) => buf.utf8Write(string, offset, len),
    slice: (buf, start, end) => buf.utf8Slice(start, end),
    indexOf: (buf, val, byteOffset, dir) =>
      indexOfString(buf, val, byteOffset, tjEncodings.utf8, dir),
  },
};

function getEncodingOps(encoding) {
  encoding += "";
  switch (encoding.length) {
    case 4:
      if (encoding === "utf8") return encodingOps.utf8;
      if (encoding === "ucs2") return encodingOps.ucs2;
      encoding = encoding.toLowerCase();
      if (encoding === "utf8") return encodingOps.utf8;
      if (encoding === "ucs2") return encodingOps.ucs2;
      break;
    case 5:
      if (encoding === "utf-8") return encodingOps.utf8;
      if (encoding === "ascii") return encodingOps.ascii;
      if (encoding === "ucs-2") return encodingOps.ucs2;
      encoding = encoding.toLowerCase();
      if (encoding === "utf-8") return encodingOps.utf8;
      if (encoding === "ascii") return encodingOps.ascii;
      if (encoding === "ucs-2") return encodingOps.ucs2;
      break;
    case 7:
      if (encoding === "utf16le" || encoding.toLowerCase() === "utf16le")
        return encodingOps.utf16le;
      break;
    case 8:
      if (encoding === "utf-16le" || encoding.toLowerCase() === "utf-16le")
        return encodingOps.utf16le;
      break;
    case 6:
      if (encoding === "latin1" || encoding === "binary")
        return encodingOps.latin1;
      if (encoding === "base64") return encodingOps.base64;
      encoding = encoding.toLowerCase();
      if (encoding === "latin1" || encoding === "binary")
        return encodingOps.latin1;
      if (encoding === "base64") return encodingOps.base64;
      break;
    case 3:
      if (encoding === "hex" || encoding.toLowerCase() === "hex")
        return encodingOps.hex;
      break;
    case 9:
      if (encoding === "base64url" || encoding.toLowerCase() === "base64url")
        return encodingOps.base64url;
      break;
  }
}

function normalizeEncoding(enc) {
  if (enc == null || enc === "utf8" || enc === "utf-8") return "utf8";
  return slowCases(enc);
}

function slowCases(enc) {
  switch (enc.length) {
    case 4:
      if (enc === "UTF8") return "utf8";
      if (enc === "ucs2" || enc === "UCS2") return "utf16le";
      enc = enc.toLowerCase();
      if (enc === "utf8") return "utf8";
      if (enc === "ucs2") return "utf16le";
      break;
    case 3:
      if (enc === "hex" || enc === "HEX" || enc.toLowerCase() === "hex")
        return "hex";
      break;
    case 5:
      if (enc === "ascii") return "ascii";
      if (enc === "ucs-2") return "utf16le";
      if (enc === "UTF-8") return "utf8";
      if (enc === "ASCII") return "ascii";
      if (enc === "UCS-2") return "utf16le";
      enc = enc.toLowerCase();
      if (enc === "utf-8") return "utf8";
      if (enc === "ascii") return "ascii";
      if (enc === "ucs-2") return "utf16le";
      break;
    case 6:
      if (enc === "base64") return "base64";
      if (enc === "latin1" || enc === "binary") return "latin1";
      if (enc === "BASE64") return "base64";
      if (enc === "LATIN1" || enc === "BINARY") return "latin1";
      enc = enc.toLowerCase();
      if (enc === "base64") return "base64";
      if (enc === "latin1" || enc === "binary") return "latin1";
      break;
    case 7:
      if (
        enc === "utf16le" ||
        enc === "UTF16LE" ||
        enc.toLowerCase() === "utf16le"
      )
        return "utf16le";
      break;
    case 8:
      if (
        enc === "utf-16le" ||
        enc === "UTF-16LE" ||
        enc.toLowerCase() === "utf-16le"
      )
        return "utf16le";
      break;
    case 9:
      if (
        enc === "base64url" ||
        enc === "BASE64URL" ||
        enc.toLowerCase() === "base64url"
      )
        return "base64url";
      break;
    default:
      if (enc === "") return "utf8";
  }
}

// TODO support require validators.js
/**
 * @param {*} value
 * @returns {boolean}
 */
function isInt32(value) {
  return value === (value | 0);
}

/**
 * @callback validateNumber
 * @param {*} value
 * @param {string} name
 * @param {number} [min]
 * @param {number} [max]
 * @returns {asserts value is number}
 */

/** @type {validateNumber} */
const validateNumber = hideStackFrames((value, name, min = undefined, max) => {
  if (typeof value !== "number")
    throw new Error(`Invalid argument type: ${name} must be a number`);

  if (
    (min != null && value < min) ||
    (max != null && value > max) ||
    ((min != null || max != null) && Number.isNaN(value))
  ) {
    throw new Error(
      `Value out of range for ${name}: ${value}, expected ${
        min != null ? `>= ${min}` : ""
      }${min != null && max != null ? " && " : ""}${
        max != null ? `<= ${max}` : ""
      }`
    );
  }
});

/**
 * @callback validateInt32
 * @param {*} value
 * @param {string} name
 * @param {number} [min]
 * @param {number} [max]
 * @returns {asserts value is number}
 */

/** @type {validateInt32} */
const validateInt32 = hideStackFrames(
  (value, name, min = -2147483648, max = 2147483647) => {
    // The defaults for min and max correspond to the limits of 32-bit integers.
    if (typeof value !== "number") {
      throw new Error(`Invalid argument type: ${name} must be a number`);
    }
    if (!Number.isInteger(value)) {
      throw new Error(`Out of range: ${name} must be an integer`);
    }
    if (value < min || value > max) {
      throw new Error(`Out of range: ${name} must be >= ${min} and <= ${max}`);
    }
  }
);

/**
 * @callback validateUint32
 * @param {*} value
 * @param {string} name
 * @param {number|boolean} [positive=false]
 * @returns {asserts value is number}
 */

/** @type {validateUint32} */
const validateUint32 = hideStackFrames((value, name, positive = false) => {
  if (typeof value !== "number") {
    throw new Error(
      `Invalid argument type for ${name}: expected number, received ${typeof value}`
    );
  }
  if (!Number.isInteger(value)) {
    throw new Error(
      `Invalid argument value for ${name}: expected an integer, received ${value}`
    );
  }
  const min = positive ? 1 : 0;
  // 2 ** 32 === 4294967296
  const max = 4_294_967_295;
  if (value < min || value > max) {
    throw new Error(
      `Invalid argument value for ${name}: expected >= ${min} && <= ${max}, received ${value}`
    );
  }
});

/**
 * @callback validateInteger
 * @param {*} value
 * @param {string} name
 * @param {number} [min]
 * @param {number} [max]
 * @returns {asserts value is number}
 */

/** @type {validateInteger} */
const validateInteger = hideStackFrames(
  (
    value,
    name,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER
  ) => {
    if (typeof value !== "number")
      throw new TypeError(
        `The "${name}" argument must be a number. Received ${typeof value}`
      );
    if (!Number.isInteger(value))
      throw new RangeError(
        `The "${name}" argument must be an integer. Received ${value}`
      );
    if (value < min || value > max)
      throw new RangeError(
        `The "${name}" argument must be between ${min} and ${max}. Received ${value}`
      );
  }
);

/**
 * @callback validateBoolean
 * @param {*} value
 * @param {string} name
 * @returns {asserts value is boolean}
 */

/** @type {validateBoolean} */
const validateBoolean = hideStackFrames((value, name) => {
  if (typeof value !== "boolean")
    throw new Error(`Invalid argument type: ${name} must be a boolean`);
});

const validateStringAfterArrayBufferView = (buffer, name) => {
  if (typeof buffer !== "string") {
    throw new Error(
      `${name} must be a string, Buffer, TypedArray, or DataView.`
    );
  }
};

const getValidatedFd = hideStackFrames((fd, propName = "fd") => {
  if (Object.is(fd, -0)) {
    return 0;
  }

  validateInt32(fd, propName, 0);

  return fd;
});

const validateOffsetLengthWrite = hideStackFrames(
  (offset, length, byteLength) => {
    if (offset > byteLength) {
      throw new RangeError(
        `The "offset" argument must be less than or equal to ${byteLength}. Received ${offset}`
      );
    }

    if (length > byteLength - offset) {
      throw new RangeError(
        `The "length" argument must be less than or equal to ${
          byteLength - offset
        }. Received ${length}`
      );
    }

    if (length < 0) {
      throw new RangeError(
        `The "length" argument must be greater than or equal to 0. Received ${length}`
      );
    }

    validateInt32.withoutStackTrace(length, "length", 0);
  }
);

/**
 * @param {string} data
 * @param {string} encoding
 */
const validateEncoding = hideStackFrames((data, encoding) => {
  const normalizedEncoding = normalizeEncoding(encoding);
  const length = data.length;

  if (normalizedEncoding === "hex" && length % 2 !== 0) {
    throw new Error(
      `The "encoding" argument "${encoding}" is invalid for data of length ${length}`
    );
  }
});

const octalReg = /^[0-7]+$/;

/**
 * Parse and validate values that will be converted into mode_t (the S_*
 * constants). Only valid numbers and octal strings are allowed. They could be
 * converted to 32-bit unsigned integers or non-negative signed integers in the
 * C++ land, but any value higher than 0o777 will result in platform-specific
 * behaviors.
 * @param {*} value Values to be validated
 * @param {string} name Name of the argument
 * @param {number} [def] If specified, will be returned for invalid values
 * @returns {number}
 */
function parseFileMode(value, name, def) {
  value ??= def;
  if (typeof value === "string") {
    if (RegExp.prototype.exec(octalReg, value) === null) {
      throw new Error(
        `Invalid argument value for ${value}, must be a 32-bit unsigned integer or an octal string`
      );
    }
    value = parseInt(value, 8);
  }

  validateUint32(value, name);
  return value;
}

/**
 * This function removes unnecessary frames from Node.js core errors.
 * @template {(...args: unknown[]) => unknown} T
 * @param {T} fn
 * @returns {T}
 */
function hideStackFrames(fn) {
  function wrappedFn(...args) {
    try {
      return Reflect.apply(fn, this, args);
    } catch (error) {
      //      Error.stackTraceLimit && ErrorCaptureStackTrace(error, wrappedFn);
      //      throw error;
      console.log(error);
    }
  }
  wrappedFn.withoutStackTrace = fn;
  return wrappedFn;
}

function isUint8Array(value) {
  return Object.prototype.toString.call(value) === "[object Uint8Array]";
}

function maybeCallback(cb) {
  validateFunction(cb, "cb");

  return cb;
}

/** @type {validateAbortSignal} */
const validateAbortSignal = hideStackFrames((signal, name) => {
  if (
    signal !== undefined &&
    (signal === null || typeof signal !== "object" || !("aborted" in signal))
  ) {
    throw new Error("Invalid signal");
  }
});

/** @type {validateFunction} */
const validateFunction = hideStackFrames((value, name) => {
  if (typeof value !== "function")
    throw new Error(`${name} must be a function`);
});

const validatePath = hideStackFrames((path, propName = "path") => {
  if (typeof path !== "string" && !isUint8Array(path)) {
    throw new Error(`${propName} must be of type string, Buffer, or URL`);
  }

  const pathIsString = typeof path === "string";
  const pathIsUint8Array = isUint8Array(path);

  // We can only perform meaningful checks on strings and Uint8Arrays.
  if (
    (!pathIsString && !pathIsUint8Array) ||
    (pathIsString && !path.includes("\u0000")) ||
    (pathIsUint8Array && !Array.prototype.includes.call(path, 0))
  ) {
    return;
  }

  throw new Error(
    `${propName} must be a string, Uint8Array, or URL without null bytes`
  );
});

function toPathIfFileURL(fileURLOrPath) {
  if (!isURL(fileURLOrPath)) return fileURLOrPath;
  return fileURLToPath(fileURLOrPath);
}

function possiblyTransformPath(path) {
  // TODO skip now
  // if (permission.isEnabled()) {
  //   if (typeof path === 'string') {
  //     return resolvePath(path);
  //   }
  //   assert(isUint8Array(path));
  //   if (!BufferIsBuffer(path)) path = BufferFrom(path);
  //   return BufferFrom(resolvePath(BufferToString(path)));
  // }
  return path;
}

const getValidatedPath = hideStackFrames((fileURLOrPath, propName = "path") => {
  const path = toPathIfFileURL(fileURLOrPath);
  validatePath(path, propName);
  return possiblyTransformPath(path);
});

function isURL(self) {
  return Boolean(
    self?.href &&
      self.protocol &&
      self.auth === undefined &&
      self.path === undefined
  );
}

//context.js
function readFileAfterRead(err, bytesRead) {
  const context = this.context;
  if (err) return context.close(err);

  context.pos += bytesRead;

  if (context.pos === context.size || bytesRead === 0) {
    context.close();
  } else {
    if (context.size === 0) {
      // Unknown size, just read until we don't get bytes.
      const buffer =
        bytesRead === kReadFileUnknownBufferLength
          ? context.buffer
          : context.buffer.slice(0, bytesRead);
      Array.prototype.push(context.buffers, buffer);
    }
    context.read();
  }
}

function readFileAfterClose(err) {
  const context = this.context;
  const callback = context.callback;
  let buffer = null;

  if (context.err || err) return callback(aggregateTwoErrors(err, context.err));

  try {
    if (context.size === 0)
      buffer = Buffer.concat(context.buffers, context.pos);
    else if (context.pos < context.size)
      buffer = context.buffer.slice(0, context.pos);
    else buffer = context.buffer;
    if (context.encoding) buffer = buffer.toString(context.encoding);
  } catch (err) {
    return callback(err);
  }

  callback(null, buffer);
}

function readFileAfterOpen(err, fd) {
  const context = this.context;

  if (err) {
    context.callback(err);
    return;
  }

  context.fd = fd;

  const req = new FSReqCallback();
  req.oncomplete = readFileAfterStat;
  req.context = context;
  binding.fstat(fd, false, req);
}

function readFileAfterStat(err, stats) {
  const context = this.context;

  if (err) return context.close(err);

  // TODO(BridgeAR): Check if allocating a smaller chunk is better performance
  // wise, similar to the promise based version (less peak memory and chunked
  // stringify operations vs multiple C++/JS boundary crossings).
  const size = (context.size = isFileType(stats, S_IFREG) ? stats[8] : 0);

  if (size > kIoMaxLength) {
    err = new Error(`[fs] file too large size: ${size}`);
    return context.close(err);
  }

  try {
    if (size === 0) {
      // TODO(BridgeAR): If an encoding is set, use the StringDecoder to concat
      // the result and reuse the buffer instead of allocating a new one.
      context.buffers = [];
    } else {
      context.buffer = Buffer.allocUnsafeSlow(size);
    }
  } catch (err) {
    return context.close(err);
  }
  context.read();
}

// TODO support require errors.js
const aggregateTwoErrors = (innerError, outerError) => {
  if (innerError && outerError && innerError !== outerError) {
    if (Array.isArray(outerError.errors)) {
      outerError.errors.push(innerError);
      return outerError;
    }

    let err;
    if (Error.stackTraceLimit && Error.stackTraceLimit > 0) {
      const limit = Error.stackTraceLimit;
      Error.stackTraceLimit = 0;
      err = new AggregateError([outerError, innerError], outerError.message);
      Error.stackTraceLimit = limit;
      Error.captureStackTrace(err, aggregateTwoErrors);
    } else {
      err = new AggregateError([outerError, innerError], outerError.message);
    }

    err.code = outerError.code;
    return err;
  }

  return innerError || outerError;
};

// TODO support require utils.js
function stringToFlags(flags, name = "flags") {
  if (typeof flags === "number") {
    validateInt32(flags, name);
    return flags;
  }

  if (flags == null) {
    return O_RDONLY;
  }

  switch (flags) {
    case "r":
      return O_RDONLY;
    case "rs": // Fall through.
    case "sr":
      return O_RDONLY | O_SYNC;
    case "r+":
      return O_RDWR;
    case "rs+": // Fall through.
    case "sr+":
      return O_RDWR | O_SYNC;

    case "w":
      return O_TRUNC | O_CREAT | O_WRONLY;
    case "wx": // Fall through.
    case "xw":
      return O_TRUNC | O_CREAT | O_WRONLY | O_EXCL;

    case "w+":
      return O_TRUNC | O_CREAT | O_RDWR;
    case "wx+": // Fall through.
    case "xw+":
      return O_TRUNC | O_CREAT | O_RDWR | O_EXCL;

    case "a":
      return O_APPEND | O_CREAT | O_WRONLY;
    case "ax": // Fall through.
    case "xa":
      return O_APPEND | O_CREAT | O_WRONLY | O_EXCL;
    case "as": // Fall through.
    case "sa":
      return O_APPEND | O_CREAT | O_WRONLY | O_SYNC;

    case "a+":
      return O_APPEND | O_CREAT | O_RDWR;
    case "ax+": // Fall through.
    case "xa+":
      return O_APPEND | O_CREAT | O_RDWR | O_EXCL;
    case "as+": // Fall through.
    case "sa+":
      return O_APPEND | O_CREAT | O_RDWR | O_SYNC;
  }

  throw new Error("Invalid flags");
}

const getValidMode = hideStackFrames((mode, type) => {
  let min = kMinimumAccessMode;
  let max = kMaximumAccessMode;
  let def = F_OK;
  if (type === "copyFile") {
    min = kMinimumCopyMode;
    max = kMaximumCopyMode;
    def = mode || kDefaultCopyMode;
  } else {
    // TODO support assert
    // assert(type === "access");
  }
  if (mode == null) {
    return def;
  }
  validateInteger.withoutStackTrace(mode, "mode", min, max);
  return mode;
});

// TODO support require context.js
class ReadFileContext {
  constructor(callback, encoding) {
    this.fd = undefined;
    this.isUserFd = undefined;
    this.size = 0;
    this.callback = callback;
    this.buffers = null;
    this.buffer = null;
    this.pos = 0;
    this.encoding = encoding;
    this.err = null;
    this.signal = undefined;
  }

  read() {
    let buffer;
    let offset;
    let length;

    if (this.signal?.aborted) {
      return this.close(new Error("The operation was aborted"));
    }
    if (this.size === 0) {
      buffer = Buffer.allocUnsafeSlow(kReadFileUnknownBufferLength);
      offset = 0;
      length = kReadFileUnknownBufferLength;
      this.buffer = buffer;
    } else {
      buffer = this.buffer;
      offset = this.pos;
      length = Math.min(kReadFileBufferLength, this.size - this.pos);
    }

    const req = new FSReqCallback();
    req.oncomplete = readFileAfterRead;
    req.context = this;

    binding.read(this.fd, buffer, offset, length, -1, req);
  }

  close(err) {
    if (this.isUserFd) {
      // TODO support nextTick
      process.nextTick(function tick(context) {
        Reflect.apply(readFileAfterClose, { context }, [null]);
      }, this);
      return;
    }

    const req = new FSReqCallback();
    req.oncomplete = readFileAfterClose;
    req.context = this;
    this.err = err;

    binding.close(this.fd, req);
  }
}

const isFd = isInt32;

function isFileType(stats, fileType) {
  // Use stats array directly to avoid creating an fs.Stats instance just for
  // our internal use.
  let mode = stats[1];
  if (typeof mode === "bigint") mode = Number(mode);
  return (mode & S_IFMT) === fileType;
}

function fileURLToPath(path) {
  if (typeof path === "string") path = new URL(path);
  else if (!isURL(path))
    throw new Error("Invalid argument type: path must be a string or URL");
  if (path.protocol !== "file:")
    throw new Error("Invalid URL scheme: file scheme expected");
  return getPathFromURLPosix(path);
}

function getPathFromURLPosix(url) {
  if (url.hostname !== "") {
    throw new Error("Invalid file URL host");
  }
  const pathname = url.pathname;
  for (let n = 0; n < pathname.length; n++) {
    if (pathname[n] === "%") {
      const third = pathname.charCodeAt(n + 2) | 0x20;
      if (pathname[n + 1] === "2" && third === 102) {
        throw new Error(
          "Invalid file URL path: must not include encoded / characters"
        );
      }
    }
  }
  return decodeURIComponent(pathname);
}

function getOptions(options, defaultOptions = kEmptyObject) {
  if (options == null || typeof options === "function") {
    return defaultOptions;
  }

  if (typeof options === "string") {
    defaultOptions = { ...defaultOptions };
    defaultOptions.encoding = options;
    options = defaultOptions;
  } else if (typeof options !== "object") {
    throw new Error("Invalid argument, options require string or Object");
  }

  if (options.encoding !== "buffer") assertEncoding(options.encoding);

  if (options.signal !== undefined) {
    validateAbortSignal(options.signal, "options.signal");
  }

  return options;
}

function assertEncoding(encoding) {
  if (encoding && !Buffer.isEncoding(encoding)) {
    throw new Error("Invalid encoding");
  }
}

// Ensure that callbacks run in the global context. Only use this function
// for callbacks that are passed to the binding layer, callbacks that are
// invoked from JS already run in the proper scope.
function makeCallback(cb) {
  validateFunction(cb, "cb");

  return (...args) => Reflect.apply(cb, this, args);
}

function checkAborted(signal, callback) {
  if (signal?.aborted) {
    callback(new Error(`The operation was aborted cause: ${signal?.reason}`));
    return true;
  }
  return false;
}

function defaultCloseCallback(err) {
  if (err != null) throw err;
}

/**
 * Closes the file descriptor.
 * @param {number} fd
 * @param {(err?: Error) => any} [callback]
 * @returns {void}
 */
function fsClose(fd, callback = defaultCloseCallback) {
  if (callback !== defaultCloseCallback) callback = makeCallback(callback);

  const req = new FSReqCallback();
  req.oncomplete = callback;
  binding.close(getValidatedFd(fd), req);
}

/**
 * Writes `buffer` to the specified `fd` (file descriptor).
 * @param {number} fd
 * @param {Buffer | TypedArray | DataView | string} buffer
 * @param {number | object} [offsetOrOptions]
 * @param {number} [length]
 * @param {number | null} [position]
 * @param {(
 *   err?: Error,
 *   bytesWritten?: number;
 *   buffer?: Buffer | TypedArray | DataView
 *   ) => any} callback
 * @returns {void}
 */
function fsWrite(fd, buffer, offsetOrOptions, length, position, callback) {
  function wrapper(err, written) {
    // Retain a reference to buffer so that it can't be GC'ed too soon.
    callback(err, written || 0, buffer);
  }

  fd = getValidatedFd(fd);

  let offset = offsetOrOptions;
  if (ArrayBuffer.isView(buffer)) {
    callback = maybeCallback(callback || position || length || offset);

    if (typeof offset === "object") {
      ({
        offset = 0,
        length = buffer.byteLength - offset,
        position = null,
      } = offsetOrOptions ?? kEmptyObject);
    }

    if (offset == null || typeof offset === "function") {
      offset = 0;
    } else {
      validateInteger(offset, "offset", 0);
    }
    if (typeof length !== "number") length = buffer.byteLength - offset;
    if (typeof position !== "number") position = null;
    validateOffsetLengthWrite(offset, length, buffer.byteLength);

    const req = new FSReqCallback();
    req.oncomplete = wrapper;
    binding.writeBuffer(fd, buffer, offset, length, position, req);
    return;
  }

  validateStringAfterArrayBufferView(buffer, "buffer");

  if (typeof position !== "function") {
    if (typeof offset === "function") {
      position = offset;
      offset = null;
    } else {
      position = length;
    }
    length = "utf8";
  }

  const str = buffer;
  validateEncoding(str, length);
  callback = maybeCallback(position);

  const req = new FSReqCallback();
  req.oncomplete = wrapper;
  binding.writeString(fd, str, offset, length, req);
}

/**
 * Tests a user's permissions for the file or directory
 * specified by `path`.
 * @param {string | Buffer | URL} path
 * @param {number} [mode]
 * @param {(err?: Error) => any} callback
 * @returns {void}
 */
function access(path, mode, callback) {
  if (typeof mode === "function") {
    callback = mode;
    mode = F_OK;
  }

  path = getValidatedPath(path);
  mode = getValidMode(mode, "access");
  callback = makeCallback(callback);

  const req = new FSReqCallback();
  req.oncomplete = callback;
  binding.access(toNamespacedPath(path), mode, req);
}

/**
 * Closes the file descriptor.
 * @param {number} fd
 * @param {(err?: Error) => any} [callback]
 * @returns {void}
 */
function close(fd, callback = defaultCloseCallback) {
  if (callback !== defaultCloseCallback) callback = makeCallback(callback);

  const req = new FSReqCallback();
  req.oncomplete = callback;
  binding.close(getValidatedFd(fd), req);
}

/**
 * Synchronously closes the file descriptor.
 * @param {number} fd
 * @returns {void}
 */
function closeSync(fd) {
  binding.close(getValidatedFd(fd));
}

/**
 * Asynchronously opens a file.
 * @param {string | Buffer | URL} path
 * @param {string | number} [flags]
 * @param {string | number} [mode]
 * @param {(
 *   err?: Error,
 *   fd?: number
 *   ) => any} callback
 * @returns {void}
 */
function open(path, flags, mode, callback) {
  path = getValidatedPath(path);
  if (arguments.length < 3) {
    callback = flags;
    flags = "r";
    mode = 0o666;
  } else if (typeof mode === "function") {
    callback = mode;
    mode = 0o666;
  } else {
    mode = parseFileMode(mode, "mode", 0o666);
  }
  const flagsNumber = stringToFlags(flags);
  callback = makeCallback(callback);

  const req = new FSReqCallback();
  req.oncomplete = callback;

  binding.open(toNamespacedPath(path), flagsNumber, mode, req);
}

/**
 * Synchronously opens a file.
 * @param {string | Buffer | URL} path
 * @param {string | number} [flags]
 * @param {string | number} [mode]
 * @returns {number}
 */
function openSync(path, flags, mode) {
  path = getValidatedPath(path);

  return binding.open(
    toNamespacedPath(path),
    stringToFlags(flags),
    parseFileMode(mode, "mode", 0o666)
  );
}

/**
 * Asynchronously reads the entire contents of a file.
 * @param {string | Buffer | URL | number} path
 * @param {{
 *   encoding?: string | null;
 *   flag?: string;
 *   signal?: AbortSignal;
 *   } | string} [options]
 * @param {(
 *   err?: Error,
 *   data?: string | Buffer
 *   ) => any} callback
 * @returns {void}
 */
// function readFile(path, options, callback) {
//   callback = maybeCallback(callback || options);
//   options = getOptions(options, { flag: "r" });
//   console.log("in js readFile, options:" + options + ",path:" + path);
//   // const ReadFileContext = require("internal/fs/read/context");
//   const context = new ReadFileContext(callback, options.encoding);
//   context.isUserFd = isFd(path); // File descriptor ownership

//   if (options.signal) {
//     context.signal = options.signal;
//   }
//   // TODO support UserFd
//   if (context.isUserFd) {
//     process.nextTick(function tick(context) {
//       Reflect.apply(readFileAfterOpen, { context }, [null, path]);
//     }, context);
//     return;
//   }

//   if (checkAborted(options.signal, callback)) return;

//   const flagsNumber = stringToFlags(options.flag, "options.flag");
//   path = getValidatedPath(path);

//   const req = new FSReqCallback();
//   req.context = context;
//   req.oncomplete = readFileAfterOpen;
//   binding.open(toNamespacedPath(path), flagsNumber, 0o666, req);
// }

function readFile(options){
  const { filePath, encoding, success, fail } = options;
  if (typeof filePath!== "string") {
    fail({errMsg:"filePath must be a string"});
  }
  if (encoding !== 'utf8' && encoding !== 'utf-8' && encoding !== '')  {
    fail({errMsg:"Invalid encoding"});
  }
  setTimeout(() => {
    try{
      console.log("in readFile, filePath:" + filePath + ",encoding:" + encoding);
      const result = readFileSync(filePath, encoding);
      console.log("in readFile, success");
      success({data:result});
    }
    catch(e){
      console.log("in readFile, failed");
      fail({errMsg: e.message});
      return; 
    }
    
  }, 0);
  console.log("after setTimeout");
}

function readFileSync(path, encoding){
  if (typeof path!== "string") {
    throw new Error("path must be a string");
  }
  if(encoding !== 'utf8' && encoding !== 'utf-8' && encoding!== '')
  {
    throw new Error("in readFileSync, only utf8 or empty supported");
  }
  console.log("in readFileSync, before calling c++");
  let arrayBuffer = binding.readFileByteArray(path);
  console.log("in readFileSync, after calling c++");

  if (encoding === 'utf8' || encoding === 'utf-8') {
    // let uint8Array = new Uint8Array(arrayBuffer);
    // let text = String.fromCharCode.apply(null, uint8Array);
    let text = binding.decodeBytes2String(arrayBuffer, encoding);
    let first100Chars = text.slice(0, 100);
    console.log("in js readFileSync, path:" + path + ", encoding:" + encoding + ", first100Chars:\n" +first100Chars);
    return text;
  }
  else if(encoding === ''){
    //output first 10 bytes in 0x** format
    let uint8Array = new Uint8Array(arrayBuffer);
    let hexString = "";
    for(let i = 0; i < 16; i++){      
      let hex = uint8Array[i].toString(16);
      if(hex.length === 1){
        hex = "0" + hex;
      }
      hexString += "0x" + hex + " ";
    }    
    console.log("in js readFileSync, path:" + path + ", first 16 bytes:\n" + hexString);
    return arrayBuffer;
  }
}

/**
 * Synchronously reads the entire contents of a file.
 * @param {string | Buffer | URL | number} path
 * @param {{
 *   encoding?: string | null;
 *   flag?: string;
 *   }} [options]
 * @returns {string | Buffer}
 */
// function readFileSync(path, options) {
//   options = getOptions(options, { flag: "r" });

//   if (options.encoding === "utf8" || options.encoding === "utf-8") {
//     if (!isInt32(path)) {
//       path = toNamespacedPath(getValidatedPath(path));
//     }
//     console.log("in js readFileSync, options.flag:" + options.flag + ",to string:" + stringToFlags(options.flag) + ",path:" + path);
//     // 'r', 0 , "src/settings.json"
//     let text = binding.readFileUtf8(path, stringToFlags(options.flag))
//     let first100Chars = text.slice(0, 100);
//     console.log(first100Chars);
//     return text;
//   }

//   // TODO support
//   throw new Error("Not supported yet");
//   const isUserFd = isFd(path); // File descriptor ownership
//   const fd = isUserFd ? path : fs.openSync(path, options.flag, 0o666);

//   const stats = tryStatSync(fd, isUserFd);
//   const size = isFileType(stats, S_IFREG) ? stats[8] : 0;
//   let pos = 0;
//   let buffer; // Single buffer with file data
//   let buffers; // List for when size is unknown

//   if (size === 0) {
//     buffers = [];
//   } else {
//     buffer = tryCreateBuffer(size, fd, isUserFd);
//   }

//   let bytesRead;

//   if (size !== 0) {
//     do {
//       bytesRead = tryReadSync(fd, isUserFd, buffer, pos, size - pos);
//       pos += bytesRead;
//     } while (bytesRead !== 0 && pos < size);
//   } else {
//     do {
//       // The kernel lies about many files.
//       // Go ahead and try to read some bytes.
//       buffer = Buffer.allocUnsafe(8192);
//       bytesRead = tryReadSync(fd, isUserFd, buffer, 0, 8192);
//       if (bytesRead !== 0) {
//         ArrayPrototypePush(buffers, buffer.slice(0, bytesRead));
//       }
//       pos += bytesRead;
//     } while (bytesRead !== 0);
//   }

//   if (!isUserFd) fs.closeSync(fd);

//   if (size === 0) {
//     // Data was collected into the buffers list.
//     buffer = Buffer.concat(buffers, pos);
//   } else if (pos < size) {
//     buffer = buffer.slice(0, pos);
//   }

//   if (options.encoding) buffer = buffer.toString(options.encoding);
//   return buffer;
// }

function writeAll(
  fd,
  isUserFd,
  buffer,
  offset,
  length,
  signal,
  flush,
  callback
) {
  if (signal?.aborted) {
    // const abortError = new AbortError(undefined, { cause: signal?.reason });
    const abortError = new Error("writeAll operation aborted");
    if (isUserFd) {
      callback(abortError);
    } else {
      fsClose(fd, (err) => {
        callback(aggregateTwoErrors(err, abortError));
      });
    }
    return;
  }
  // write(fd, buffer, offset, length, position, callback)
  fsWrite(fd, buffer, offset, length, null, (writeErr, written) => {
    if (writeErr) {
      if (isUserFd) {
        callback(writeErr);
      } else {
        fsClose(fd, (err) => {
          callback(aggregateTwoErrors(err, writeErr));
        });
      }
    } else if (written === length) {
      if (!flush) {
        if (isUserFd) {
          callback(null);
        } else {
          fsClose(fd, callback);
        }
      } else {
        binding.fsync(fd, (syncErr) => {
          if (syncErr) {
            if (isUserFd) {
              callback(syncErr);
            } else {
              fsClose(fd, (err) => {
                callback(aggregateTwoErrors(err, syncErr));
              });
            }
          } else if (isUserFd) {
            callback(null);
          } else {
            fsClose(fd, callback);
          }
        });
      }
    } else {
      offset += written;
      length -= written;
      writeAll(fd, isUserFd, buffer, offset, length, signal, flush, callback);
    }
  });
}

/**
 * Asynchronously writes data to the file.
 * @param {string | Buffer | URL | number} path
 * @param {string | Buffer | TypedArray | DataView} data
 * @param {{
 *   encoding?: string | null;
 *   mode?: number;
 *   flag?: string;
 *   signal?: AbortSignal;
 *   flush?: boolean;
 *   } | string} [options]
 * @param {(err?: Error) => any} callback
 * @returns {void}
 */
function writeFile(path, data, options, callback) {
  callback = maybeCallback(callback || options);
  options = getOptions(options, {
    encoding: "utf8",
    mode: 0o666,
    flag: "w",
    flush: false,
  });
  const flag = options.flag || "w";
  const flush = options.flush ?? false;

  validateBoolean(flush, "options.flush");

  if (!ArrayBuffer.isView(data)) {
    validateStringAfterArrayBufferView(data, "data");
    data = Buffer.from(data, options.encoding || "utf8");
  }

  if (isFd(path)) {
    const isUserFd = true;
    const signal = options.signal;
    writeAll(path, isUserFd, data, 0, data.byteLength, signal, flush, callback);
    return;
  }

  if (checkAborted(options.signal, callback)) return;

  open(path, flag, options.mode, (openErr, fd) => {
    if (openErr) {
      callback(openErr);
    } else {
      const isUserFd = false;
      const signal = options.signal;
      writeAll(fd, isUserFd, data, 0, data.byteLength, signal, flush, callback);
    }
  });
}

/**
 * Synchronously writes data to the file.
 * @param {string | Buffer | URL | number} path
 * @param {string | Buffer | TypedArray | DataView} data
 * @param {{
 *   encoding?: string | null;
 *   mode?: number;
 *   flag?: string;
 *   flush?: boolean;
 *   } | string} [options]
 * @returns {void}
 */
function writeFileSync(path, data, options) {
  options = getOptions(options, {
    encoding: "utf8",
    mode: 0o666,
    flag: "w",
    flush: false,
  });

  const flush = options.flush ?? false;

  validateBoolean(flush, "options.flush");

  const flag = options.flag || "w";

  // C++ fast path for string data and UTF8 encoding
  if (
    typeof data === "string" &&
    (options.encoding === "utf8" || options.encoding === "utf-8")
  ) {
    if (!isInt32(path)) {
      path = toNamespacedPath(getValidatedPath(path));
    }

    return binding.writeFileUtf8(
      path,
      data,
      stringToFlags(flag),
      parseFileMode(options.mode, "mode", 0o666)
    );
  }

  // TODO support
  throw new Error("Not supported yet");
  if (!isArrayBufferView(data)) {
    validateStringAfterArrayBufferView(data, "data");
    data = Buffer.from(data, options.encoding || "utf8");
  }

  const isUserFd = isFd(path); // File descriptor ownership
  const fd = isUserFd ? path : fs.openSync(path, flag, options.mode);

  let offset = 0;
  let length = data.byteLength;
  try {
    while (length > 0) {
      const written = fs.writeSync(fd, data, offset, length);
      offset += written;
      length -= written;
    }

    if (flush) {
      fs.fsyncSync(fd);
    }
  } finally {
    if (!isUserFd) fs.closeSync(fd);
  }
}

module.exports = { readFileSync, readFile }; //