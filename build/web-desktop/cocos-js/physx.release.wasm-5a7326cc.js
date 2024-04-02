System.register(["./_virtual_cc-478d6470.js","./_commonjsHelpers-ac46539f.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t._},function(t){r=t.c}],execute:function(){var n=r((function(t){var r,n=(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){void 0===t&&(t={});var n,i,o=void 0!==t?t:{};o.ready=new Promise((function(t,e){n=t,i=e}));var a=Object.assign({},o),s=function(t,e){throw e},u="";"undefined"!=typeof document&&document.currentScript&&(u=document.currentScript.src),r&&(u=r),u=0!==u.indexOf("blob:")?u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var c,l=o.print||console.log.bind(console),f=o.printErr||console.error.bind(console);Object.assign(o,a),a=null,o.arguments&&o.arguments,o.thisProgram&&o.thisProgram,o.quit&&(s=o.quit),o.wasmBinary&&(c=o.wasmBinary);var p,d=o.noExitRuntime||!0;"object"!=typeof WebAssembly&&k("no native wasm support detected");var h,v,y,m,g,b,C,w,$,T=!1;function P(){var t=p.buffer;o.HEAP8=h=new Int8Array(t),o.HEAP16=y=new Int16Array(t),o.HEAP32=g=new Int32Array(t),o.HEAPU8=v=new Uint8Array(t),o.HEAPU16=m=new Uint16Array(t),o.HEAPU32=b=new Uint32Array(t),o.HEAPF32=C=new Float32Array(t),o.HEAPF64=w=new Float64Array(t)}var A,_,O=[],W=[],S=[],j=0,E=null;function k(t){o.onAbort&&o.onAbort(t),f(t="Aborted("+t+")"),T=!0,t+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(t);throw i(e),e}function F(t){return t.startsWith("data:application/octet-stream;base64,")}function R(t){try{if(t==A&&c)return new Uint8Array(c);throw"both async and sync fetching of the wasm failed"}catch(t){k(t)}}function D(t,e,r){return function(t){return c||"function"!=typeof fetch?Promise.resolve().then((function(){return R(t)})):fetch(t,{credentials:"same-origin"}).then((function(e){if(!e.ok)throw"failed to load wasm binary file at '"+t+"'";return e.arrayBuffer()})).catch((function(){return R(t)}))}(t).then((function(t){return WebAssembly.instantiate(t,e)})).then((function(t){return t})).then(r,(function(t){f("failed to asynchronously prepare wasm: "+t),k(t)}))}function x(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function I(t){for(;t.length>0;)t.shift()(o)}function U(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=48&&e<=57?"_"+t:t}function V(t,e){var r;return(r={},r[t=U(t)]=function(){return e.apply(this,arguments)},r)[t]}F(A="physx.release.wasm.wasm")||(_=A,A=o.locateFile?o.locateFile(_,u):u+_);var z=new function(){this.allocated=[void 0],this.freelist=[],this.get=function(t){return this.allocated[t]},this.has=function(t){return void 0!==this.allocated[t]},this.allocate=function(t){var e=this.freelist.pop()||this.allocated.length;return this.allocated[e]=t,e},this.free=function(t){this.allocated[t]=void 0,this.freelist.push(t)}};function H(t,e){var r=V(e,(function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var B=void 0;function M(t){throw new B(t)}var N=function(t){return t||M("Cannot use deleted val. handle = "+t),z.get(t).value},q=function(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return z.allocate({refcount:1,value:t})}},G=void 0,L=void 0;function J(t){for(var e="",r=t;v[r];)e+=L[v[r++]];return e}var K=[];function Q(){for(;K.length;){var t=K.pop();t.$$.deleteScheduled=!1,t.delete()}}var Z=void 0;var X={};function Y(t,e){for(void 0===e&&M("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}function tt(t,e,r){e=Y(t,e),X.hasOwnProperty(e)?M("Tried to register registered instance: "+e):X[e]=r}var et={};function rt(t){var e=le(t),r=J(e);return ce(e),r}function nt(t,e){var r=et[t];return void 0===r&&M(e+" has unknown type "+rt(t)),r}function it(){}var ot=!1;function at(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function st(t,e,r){if(e===r)return t;if(void 0===r.baseClass)return null;var n=st(t,e,r.baseClass);return null===n?null:r.downcast(n)}var ut={},ct=void 0;function lt(t){throw new ct(t)}function ft(t,e){return e.ptrType&&e.ptr||lt("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&lt("Both smartPtrType and smartPtr must be specified"),e.count={value:1},pt(Object.create(t,{$$:{value:e}}))}function pt(t){return"undefined"==typeof FinalizationRegistry?(pt=function(t){return t},t):(ot=new FinalizationRegistry((function(t){at(t.$$)})),it=function(t){return ot.unregister(t)},(pt=function(t){var e=t.$$;if(e.smartPtr){var r={$$:e};ot.register(t,r,t)}return t})(t))}var dt={};function ht(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function vt(t){return this.fromWireType(g[t>>2])}var yt={},mt={};function gt(t,e,r){function n(e){var n=r(e);n.length!==t.length&&lt("Mismatched type converter count");for(var i=0;i<t.length;++i)Ct(t[i],n[i])}t.forEach((function(t){mt[t]=e}));var i=new Array(e.length),o=[],a=0;e.forEach((function(t,e){et.hasOwnProperty(t)?i[e]=et[t]:(o.push(t),yt.hasOwnProperty(t)||(yt[t]=[]),yt[t].push((function(){i[e]=et[t],++a===o.length&&n(i)})))})),0===o.length&&n(i)}function bt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function Ct(t,e,r){if(void 0===r&&(r={}),!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||M('type "'+n+'" must have a positive integer typeid pointer'),et.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;M("Cannot register type '"+n+"' twice")}if(et[t]=e,delete mt[t],yt.hasOwnProperty(t)){var i=yt[t];delete yt[t],i.forEach((function(t){return t()}))}}function wt(t){M(t.$$.ptrType.registeredClass.name+" instance already deleted")}function $t(){}function Tt(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||M("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function Pt(t,e,r){o.hasOwnProperty(t)?((void 0===r||void 0!==o[t].overloadTable&&void 0!==o[t].overloadTable[r])&&M("Cannot register public name '"+t+"' twice"),Tt(o,t,t),o.hasOwnProperty(r)&&M("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),o[t].overloadTable[r]=e):(o[t]=e,void 0!==r&&(o[t].numArguments=r))}function At(t,e,r,n,i,o,a,s){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=s,this.pureVirtualFunctions=[]}function _t(t,e,r){for(;e!==r;)e.upcast||M("Expected null or instance of "+r.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function Ot(t,e){if(null===e)return this.isReference&&M("null is not a valid "+this.name),0;e.$$||M('Cannot pass "'+Mt(e)+'" as a '+this.name),e.$$.ptr||M("Cannot pass deleted object as a pointer of type "+this.name);var r=e.$$.ptrType.registeredClass;return _t(e.$$.ptr,r,this.registeredClass)}function Wt(t,e){var r;if(null===e)return this.isReference&&M("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||M('Cannot pass "'+Mt(e)+'" as a '+this.name),e.$$.ptr||M("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&M("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;if(r=_t(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&M("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:M("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var i=e.clone();r=this.rawShare(r,q((function(){i.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:M("Unsupporting sharing policy")}return r}function St(t,e){if(null===e)return this.isReference&&M("null is not a valid "+this.name),0;e.$$||M('Cannot pass "'+Mt(e)+'" as a '+this.name),e.$$.ptr||M("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&M("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;return _t(e.$$.ptr,r,this.registeredClass)}function jt(t,e,r,n,i,o,a,s,u,c,l){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=s,this.rawConstructor=u,this.rawShare=c,this.rawDestructor=l,i||void 0!==e.baseClass?this.toWireType=Wt:n?(this.toWireType=Ot,this.destructorFunction=null):(this.toWireType=St,this.destructorFunction=null)}function Et(t,e,r){o.hasOwnProperty(t)||lt("Replacing nonexistant public symbol"),void 0!==o[t].overloadTable&&void 0!==r?o[t].overloadTable[r]=e:(o[t]=e,o[t].argCount=r)}var kt=[];function Ft(t){var e=kt[t];return e||(t>=kt.length&&(kt.length=t+1),kt[t]=e=$.get(t)),e}function Rt(t,e,r){return t.includes("j")?function(t,e,r){var n=o["dynCall_"+t];return r&&r.length?n.apply(null,[e].concat(r)):n.call(null,e)}(t,e,r):Ft(e).apply(null,r)}function Dt(t,e){var r,n,i,o=(t=J(t)).includes("j")?(r=t,n=e,i=[],function(){return i.length=0,Object.assign(i,arguments),Rt(r,n,i)}):Ft(e);return"function"!=typeof o&&M("unknown function pointer with signature "+t+": "+e),o}var xt=void 0;function It(t,e){var r=[],n={};throw e.forEach((function t(e){n[e]||et[e]||(mt[e]?mt[e].forEach(t):(r.push(e),n[e]=!0))})),new xt(t+": "+r.map(rt).join([", "]))}function Ut(t,e,r,n,i){var o=e.length;o<2&&M("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,s=!1,u=1;u<e.length;++u)if(null!==e[u]&&void 0===e[u].destructorFunction){s=!0;break}var c="void"!==e[0].name,l=o-2,f=new Array(l),p=[],d=[];return function(){var r;arguments.length!==l&&M("function "+t+" called with "+arguments.length+" arguments, expected "+l+" args!"),d.length=0,p.length=a?2:1,p[0]=i,a&&(r=e[1].toWireType(d,this),p[1]=r);for(var o=0;o<l;++o)f[o]=e[o+2].toWireType(d,arguments[o]),p.push(f[o]);var u=n.apply(null,p);function h(t){if(s)ht(d);else for(var n=a?1:2;n<e.length;n++){var i=1===n?r:f[n-2];null!==e[n].destructorFunction&&e[n].destructorFunction(i)}if(c)return e[0].fromWireType(t)}return h(u)}}function Vt(t,e){for(var r=[],n=0;n<t;n++)r.push(b[e+4*n>>2]);return r}function zt(t,e,r){return t instanceof Object||M(r+' with invalid "this": '+t),t instanceof e.registeredClass.constructor||M(r+' incompatible with "this" of type '+t.constructor.name),t.$$.ptr||M("cannot call emscripten binding method "+r+" on deleted object"),_t(t.$$.ptr,t.$$.ptrType.registeredClass,e.registeredClass)}function Ht(t){t>=z.reserved&&0==--z.get(t).refcount&&z.free(t)}function Bt(t,e,r){switch(e){case 0:return function(t){var e=r?h:v;return this.fromWireType(e[t])};case 1:return function(t){var e=r?y:m;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=r?g:b;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function Mt(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function Nt(t,e){switch(e){case 2:return function(t){return this.fromWireType(C[t>>2])};case 3:return function(t){return this.fromWireType(w[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function qt(t,e,r){switch(e){case 0:return r?function(t){return h[t]}:function(t){return v[t]};case 1:return r?function(t){return y[t>>1]}:function(t){return m[t>>1]};case 2:return r?function(t){return g[t>>2]}:function(t){return b[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}var Gt="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function Lt(t,e,r){for(var n=e+r,i=e;t[i]&&!(i>=n);)++i;if(i-e>16&&t.buffer&&Gt)return Gt.decode(t.subarray(e,i));for(var o="";e<i;){var a=t[e++];if(128&a){var s=63&t[e++];if(192!=(224&a)){var u=63&t[e++];if((a=224==(240&a)?(15&a)<<12|s<<6|u:(7&a)<<18|s<<12|u<<6|63&t[e++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|s)}else o+=String.fromCharCode(a)}return o}var Jt="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function Kt(t,e){for(var r=t,n=r>>1,i=n+e/2;!(n>=i)&&m[n];)++n;if((r=n<<1)-t>32&&Jt)return Jt.decode(v.subarray(t,r));for(var o="",a=0;!(a>=e/2);++a){var s=y[t+2*a>>1];if(0==s)break;o+=String.fromCharCode(s)}return o}function Qt(t,e,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=e,i=(r-=2)<2*t.length?r/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);y[e>>1]=a,e+=2}return y[e>>1]=0,e-n}function Zt(t){return 2*t.length}function Xt(t,e){for(var r=0,n="";!(r>=e/4);){var i=g[t+4*r>>2];if(0==i)break;if(++r,i>=65536){var o=i-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(i)}return n}function Yt(t,e,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=e,i=n+r-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),g[e>>2]=a,(e+=4)+4>i)break}return g[e>>2]=0,e-n}function te(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}var ee={};function re(t){var e=ee[t];return void 0===e?J(t):e}var ne,ie=[],oe=[];function ae(t){var e=t-p.buffer.byteLength+65535>>>16;try{return p.grow(e),P(),1}catch(t){}}ne=function(){return performance.now()};var se=[null,[],[]];B=o.BindingError=H(Error,"BindingError"),z.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),z.reserved=z.allocated.length,o.count_emval_handles=function(){for(var t=0,e=z.reserved;e<z.allocated.length;++e)void 0!==z.allocated[e]&&++t;return t},G=o.PureVirtualError=H(Error,"PureVirtualError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);L=t}(),o.getInheritedInstanceCount=function(){return Object.keys(X).length},o.getLiveInheritedInstances=function(){var t=[];for(var e in X)X.hasOwnProperty(e)&&t.push(X[e]);return t},o.flushPendingDeletes=Q,o.setDelayFunction=function(t){Z=t,K.length&&Z&&Z(Q)},ct=o.InternalError=H(Error,"InternalError"),$t.prototype.isAliasOf=function(t){if(!(this instanceof $t))return!1;if(!(t instanceof $t))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,i=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)i=n.upcast(i),n=n.baseClass;return e===n&&r===i},$t.prototype.clone=function(){if(this.$$.ptr||wt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=pt(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},$t.prototype.delete=function(){this.$$.ptr||wt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&M("Object already scheduled for deletion"),it(this),at(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},$t.prototype.isDeleted=function(){return!this.$$.ptr},$t.prototype.deleteLater=function(){return this.$$.ptr||wt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&M("Object already scheduled for deletion"),K.push(this),1===K.length&&Z&&Z(Q),this.$$.deleteScheduled=!0,this},jt.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},jt.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},jt.prototype.argPackAdvance=8,jt.prototype.readValueFromPointer=vt,jt.prototype.deleteObject=function(t){null!==t&&t.delete()},jt.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=function(t,e){return e=Y(t,e),X[e]}(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function i(){return this.isSmartPointer?ft(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):ft(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var o,a=this.registeredClass.getActualType(e),s=ut[a];if(!s)return i.call(this);o=this.isConst?s.constPointerType:s.pointerType;var u=st(e,this.registeredClass,o.registeredClass);return null===u?i.call(this):this.isSmartPointer?ft(o.registeredClass.instancePrototype,{ptrType:o,ptr:u,smartPtrType:this,smartPtr:t}):ft(o.registeredClass.instancePrototype,{ptrType:o,ptr:u})},xt=o.UnboundTypeError=H(Error,"UnboundTypeError");var ue={t:function(t,e,r){t=J(t),e=nt(e,"wrapper"),r=N(r);var n=[].slice,i=e.registeredClass,o=i.instancePrototype,a=i.baseClass.instancePrototype,s=i.baseClass.constructor,u=V(t,(function(){i.baseClass.pureVirtualFunctions.forEach(function(t){if(this[t]===a[t])throw new G("Pure virtual function "+t+" must be implemented in JavaScript")}.bind(this)),Object.defineProperty(this,"__parent",{value:o}),this.__construct.apply(this,n.call(arguments))}));for(var c in o.__construct=function(){this===o&&M("Pass correct 'this' to __construct");var t=s.implement.apply(void 0,[this].concat(n.call(arguments)));it(t);var e=t.$$;t.notifyOnDestruction(),e.preservePointerOnDelete=!0,Object.defineProperties(this,{$$:{value:e}}),pt(this),tt(i,e.ptr,this)},o.__destruct=function(){var t;this===o&&M("Pass correct 'this' to __destruct"),it(this),t=Y(i,t=this.$$.ptr),X.hasOwnProperty(t)?delete X[t]:M("Tried to unregister unregistered instance: "+t)},u.prototype=Object.create(o),r)u.prototype[c]=r[c];return q(u)},r:function(t){var e=dt[t];delete dt[t];var r=e.rawConstructor,n=e.rawDestructor,i=e.fields;gt([t],i.map((function(t){return t.getterReturnType})).concat(i.map((function(t){return t.setterArgumentType}))),(function(t){var o={};return i.forEach((function(e,r){var n=e.fieldName,a=t[r],s=e.getter,u=e.getterContext,c=t[r+i.length],l=e.setter,f=e.setterContext;o[n]={read:function(t){return a.fromWireType(s(u,t))},write:function(t,e){var r=[];l(f,t,c.toWireType(r,e)),ht(r)}}})),[{name:e.name,fromWireType:function(t){var e={};for(var r in o)e[r]=o[r].read(t);return n(t),e},toWireType:function(t,e){for(var i in o)if(!(i in e))throw new TypeError('Missing field: "'+i+'"');var a=r();for(i in o)o[i].write(a,e[i]);return null!==t&&t.push(n,a),a},argPackAdvance:8,readValueFromPointer:vt,destructorFunction:n}]}))},C:function(){},I:function(t,e,r,n,i){var o=bt(r);Ct(t,{name:e=J(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:i},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=h;else if(2===r)n=y;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=g}return this.fromWireType(n[t>>o])},destructorFunction:null})},c:function(t,e,r,n,i,o,a,s,u,c,l,f,p){l=J(l),o=Dt(i,o),s&&(s=Dt(a,s)),c&&(c=Dt(u,c)),p=Dt(f,p);var d=U(l);Pt(d,(function(){It("Cannot construct "+l+" due to unbound types",[n])})),gt([t,e,r],n?[n]:[],(function(e){var r,i;e=e[0],i=n?(r=e.registeredClass).instancePrototype:$t.prototype;var a=V(d,(function(){if(Object.getPrototypeOf(this)!==u)throw new B("Use 'new' to construct "+l);if(void 0===f.constructor_body)throw new B(l+" has no accessible constructor");var t=f.constructor_body[arguments.length];if(void 0===t)throw new B("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(f.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),u=Object.create(i,{constructor:{value:a}});a.prototype=u;var f=new At(l,a,u,p,r,o,s,c);f.baseClass&&(void 0===f.baseClass.__derivedClasses&&(f.baseClass.__derivedClasses=[]),f.baseClass.__derivedClasses.push(f));var h=new jt(l,f,!0,!1,!1),v=new jt(l+"*",f,!1,!1,!1),y=new jt(l+" const*",f,!1,!0,!1);return ut[t]={pointerType:v,constPointerType:y},Et(d,a),[h,v,y]}))},o:function(t,r,n,i,o,a,s){var u=Vt(n,i);r=J(r),a=Dt(o,a),gt([],[t],(function(t){var i=(t=t[0]).name+"."+r;function o(){It("Cannot call "+i+" due to unbound types",u)}r.startsWith("@@")&&(r=Symbol[r.substring(2)]);var c=t.registeredClass.constructor;return void 0===c[r]?(o.argCount=n-1,c[r]=o):(Tt(c,r,i),c[r].overloadTable[n-1]=o),gt([],u,(function(o){var u=[o[0],null].concat(o.slice(1)),l=Ut(i,u,null,a,s);if(void 0===c[r].overloadTable?(l.argCount=n-1,c[r]=l):c[r].overloadTable[n-1]=l,t.registeredClass.__derivedClasses)for(var f,p=e(t.registeredClass.__derivedClasses);!(f=p()).done;){var d=f.value;d.constructor.hasOwnProperty(r)||(d.constructor[r]=l)}return[]})),[]}))},e:function(t,e,r,n,i,o){e>0||k(undefined);var a=Vt(e,r);i=Dt(n,i),gt([],[t],(function(t){var r="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new B("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){It("Cannot construct "+t.name+" due to unbound types",a)},gt([],a,(function(n){return n.splice(1,0,null),t.registeredClass.constructor_body[e-1]=Ut(r,n,null,i,o),[]})),[]}))},a:function(t,e,r,n,i,o,a,s){var u=Vt(r,n);e=J(e),o=Dt(i,o),gt([],[t],(function(t){var n=(t=t[0]).name+"."+e;function i(){It("Cannot call "+n+" due to unbound types",u)}e.startsWith("@@")&&(e=Symbol[e.substring(2)]),s&&t.registeredClass.pureVirtualFunctions.push(e);var c=t.registeredClass.instancePrototype,l=c[e];return void 0===l||void 0===l.overloadTable&&l.className!==t.name&&l.argCount===r-2?(i.argCount=r-2,i.className=t.name,c[e]=i):(Tt(c,e,n),c[e].overloadTable[r-2]=i),gt([],u,(function(i){var s=Ut(n,i,t,o,a);return void 0===c[e].overloadTable?(s.argCount=r-2,c[e]=s):c[e].overloadTable[r-2]=s,[]})),[]}))},d:function(t,e,r,n,i,o,a,s,u,c){e=J(e),i=Dt(n,i),gt([],[t],(function(t){var n=(t=t[0]).name+"."+e,l={get:function(){It("Cannot access "+n+" due to unbound types",[r,a])},enumerable:!0,configurable:!0};return l.set=u?function(){It("Cannot access "+n+" due to unbound types",[r,a])}:function(){M(n+" is a read-only property")},Object.defineProperty(t.registeredClass.instancePrototype,e,l),gt([],u?[r,a]:[r],(function(r){var a=r[0],l={get:function(){var e=zt(this,t,n+" getter");return a.fromWireType(i(o,e))},enumerable:!0};if(u){u=Dt(s,u);var f=r[1];l.set=function(e){var r=zt(this,t,n+" setter"),i=[];u(c,r,f.toWireType(i,e)),ht(i)}}return Object.defineProperty(t.registeredClass.instancePrototype,e,l),[]})),[]}))},x:function(t,e,r){t=J(t),gt([],[e],(function(e){return e=e[0],o[t]=e.fromWireType(r),[]}))},H:function(t,e){Ct(t,{name:e=J(e),fromWireType:function(t){var e=N(t);return Ht(t),e},toWireType:function(t,e){return q(e)},argPackAdvance:8,readValueFromPointer:vt,destructorFunction:null})},h:function(t,e,r,n){var i=bt(r);function o(){}e=J(e),o.values={},Ct(t,{name:e,constructor:o,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:Bt(e,i,n),destructorFunction:null}),Pt(e,o)},b:function(t,e,r){var n=nt(t,"enum");e=J(e);var i=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:V(n.name+"_"+e,(function(){}))}});i.values[r]=o,i[e]=o},A:function(t,e,r){var n=bt(r);Ct(t,{name:e=J(e),fromWireType:function(t){return t},toWireType:function(t,e){return e},argPackAdvance:8,readValueFromPointer:Nt(e,n),destructorFunction:null})},g:function(t,e,r,n,i,o){var a=Vt(e,r);t=J(t),i=Dt(n,i),Pt(t,(function(){It("Cannot call "+t+" due to unbound types",a)}),e-1),gt([],a,(function(r){var n=[r[0],null].concat(r.slice(1));return Et(t,Ut(t,n,null,i,o),e-1),[]}))},p:function(t,e,r,n){e=J(e);var i=bt(r),o=function(t){return t};if(0===n){var a=32-8*r;o=function(t){return t<<a>>>a}}var s=e.includes("unsigned");Ct(t,{name:e,fromWireType:o,toWireType:s?function(t,e){return this.name,e>>>0}:function(t,e){return this.name,e},argPackAdvance:8,readValueFromPointer:qt(e,i,0!==n),destructorFunction:null})},k:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function i(t){var e=b,r=e[t>>=2],i=e[t+1];return new n(e.buffer,i,r)}Ct(t,{name:r=J(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},z:function(t,e){var r="std::string"===(e=J(e));Ct(t,{name:e,fromWireType:function(t){var e,n,i=b[t>>2],o=t+4;if(r)for(var a=o,s=0;s<=i;++s){var u=o+s;if(s==i||0==v[u]){var c=(n=a)?Lt(v,n,u-a):"";void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),a=u+1}}else{var l=new Array(i);for(s=0;s<i;++s)l[s]=String.fromCharCode(v[o+s]);e=l.join("")}return ce(t),e},toWireType:function(t,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var i="string"==typeof e;i||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||M("Cannot pass non-string to std::string"),n=r&&i?function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++r):e+=3}return e}(e):e.length;var o=pe(4+n+1),a=o+4;if(b[o>>2]=n,r&&i)!function(t,e,r,n){if(!(n>0))return 0;for(var i=r+n-1,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),a<=127){if(r>=i)break;e[r++]=a}else if(a<=2047){if(r+1>=i)break;e[r++]=192|a>>6,e[r++]=128|63&a}else if(a<=65535){if(r+2>=i)break;e[r++]=224|a>>12,e[r++]=128|a>>6&63,e[r++]=128|63&a}else{if(r+3>=i)break;e[r++]=240|a>>18,e[r++]=128|a>>12&63,e[r++]=128|a>>6&63,e[r++]=128|63&a}}e[r]=0}(e,v,a,n+1);else if(i)for(var s=0;s<n;++s){var u=e.charCodeAt(s);u>255&&(ce(a),M("String has UTF-16 code units that do not fit in 8 bits")),v[a+s]=u}else for(s=0;s<n;++s)v[a+s]=e[s];return null!==t&&t.push(ce,o),o},argPackAdvance:8,readValueFromPointer:vt,destructorFunction:function(t){ce(t)}})},w:function(t,e,r){var n,i,o,a,s;r=J(r),2===e?(n=Kt,i=Qt,a=Zt,o=function(){return m},s=1):4===e&&(n=Xt,i=Yt,a=te,o=function(){return b},s=2),Ct(t,{name:r,fromWireType:function(t){for(var r,i=b[t>>2],a=o(),u=t+4,c=0;c<=i;++c){var l=t+4+c*e;if(c==i||0==a[l>>s]){var f=n(u,l-u);void 0===r?r=f:(r+=String.fromCharCode(0),r+=f),u=l+e}}return ce(t),r},toWireType:function(t,n){"string"!=typeof n&&M("Cannot pass non-string to C++ string type "+r);var o=a(n),u=pe(4+o+e);return b[u>>2]=o>>s,i(n,u+4,o+e),null!==t&&t.push(ce,u),u},argPackAdvance:8,readValueFromPointer:vt,destructorFunction:function(t){ce(t)}})},s:function(t,e,r,n,i,o){dt[t]={name:J(e),rawConstructor:Dt(r,n),rawDestructor:Dt(i,o),fields:[]}},m:function(t,e,r,n,i,o,a,s,u,c){dt[t].fields.push({fieldName:J(e),getterReturnType:r,getter:Dt(n,i),getterContext:o,setterArgumentType:a,setter:Dt(s,u),setterContext:c})},J:function(t,e){Ct(t,{isVoid:!0,name:e=J(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},v:function(t,e,r,n,i){return(t=ie[t])(e=N(e),r=re(r),function(t){var e=[];return b[t>>2]=q(e),e}(n),i)},l:function(t,e,r,n){(t=ie[t])(e=N(e),r=re(r),null,n)},n:Ht,i:function(t,e){var r=function(t,e){for(var r=new Array(t),n=0;n<t;++n)r[n]=nt(b[e+4*n>>2],"parameter "+n);return r}(t,e),n=r[0],i=n.name+"_$"+r.slice(1).map((function(t){return t.name})).join("_")+"$",o=oe[i];if(void 0!==o)return o;var a,s,u=new Array(t-1);return a=function(e,i,o,a){for(var s=0,c=0;c<t-1;++c)u[c]=r[c+1].readValueFromPointer(a+s),s+=r[c+1].argPackAdvance;var l=e[i].apply(e,u);for(c=0;c<t-1;++c)r[c+1].deleteObject&&r[c+1].deleteObject(u[c]);if(!n.isVoid)return n.toWireType(o,l)},s=ie.length,ie.push(a),o=s,oe[i]=o,o},B:function(t){t>4&&(z.get(t).refcount+=1)},u:function(t){ht(N(t)),Ht(t)},q:function(t,e){var r=(t=nt(t,"_emval_take_value")).readValueFromPointer(e);return q(r)},j:function(){k("")},F:function(){return Date.now()},f:ne,G:function(t,e,r){v.copyWithin(t,e,e+r)},D:function(t){var e=v.length,r=2147483648;if((t>>>=0)>r)return!1;for(var n,i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),ae(Math.min(r,(n=Math.max(t,o))+(65536-n%65536)%65536)))return!0}return!1},E:function(t){var e;e=t,d||(o.onExit&&o.onExit(e),T=!0),s(e,new x(e))},y:function(t,e,r,n){for(var i,o,a,s=0,u=0;u<r;u++){var c=b[e>>2],p=b[e+4>>2];e+=8;for(var d=0;d<p;d++)i=t,o=v[c+d],a=void 0,a=se[i],0===o||10===o?((1===i?l:f)(Lt(a,0)),a.length=0):a.push(o);s+=p}return b[n>>2]=s,0}};!function(){var t,e,r,n,a={a:ue};function s(t){var e,r=t.exports;return o.asm=r,p=o.asm.K,P(),$=o.asm.N,e=o.asm.L,W.unshift(e),function(){if(j--,o.monitorRunDependencies&&o.monitorRunDependencies(j),0==j&&E){var t=E;E=null,t()}}(),r}if(j++,o.monitorRunDependencies&&o.monitorRunDependencies(j),o.instantiateWasm)try{return o.instantiateWasm(a,s)}catch(t){f("Module.instantiateWasm callback failed with error: "+t),i(t)}(t=c,e=A,r=a,n=function(t){s(t.instance)},t||"function"!=typeof WebAssembly.instantiateStreaming||F(e)||"function"!=typeof fetch?D(e,r,n):fetch(e,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,r).then(n,(function(t){return f("wasm streaming compile failed: "+t),f("falling back to ArrayBuffer instantiation"),D(e,r,n)}))}))).catch(i)}();var ce=function(){return(ce=o.asm.M).apply(null,arguments)},le=function(){return(le=o.asm.O).apply(null,arguments)};o.__embind_initialize_bindings=function(){return(o.__embind_initialize_bindings=o.asm.P).apply(null,arguments)};var fe,pe=function(){return(pe=o.asm.Q).apply(null,arguments)};function de(){function t(){fe||(fe=!0,o.calledRun=!0,T||(I(W),n(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)t=o.postRun.shift(),S.unshift(t);var t;I(S)}()))}j>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)t=o.preRun.shift(),O.unshift(t);var t;I(O)}(),j>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),t()}),1)):t()))}if(o.dynCall_iifiiiijii=function(){return(o.dynCall_iifiiiijii=o.asm.R).apply(null,arguments)},o.dynCall_vifijii=function(){return(o.dynCall_vifijii=o.asm.S).apply(null,arguments)},o.dynCall_jiji=function(){return(o.dynCall_jiji=o.asm.T).apply(null,arguments)},E=function t(){fe||de(),fe||(E=t)},o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return de(),t.ready});t.exports=n}));t({default:n,__moduleExports:n})}}}));