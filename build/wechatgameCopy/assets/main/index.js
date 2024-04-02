System.register("chunks:///_virtual/CharacterControllerDebugRenderer.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DebugDraw.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, CharacterController, CapsuleCharacterController, Color, Component, drawCapsule;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CharacterController = module.CharacterController;
      CapsuleCharacterController = module.CapsuleCharacterController;
      Color = module.Color;
      Component = module.Component;
    }, function (module) {
      drawCapsule = module.drawCapsule;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "074883d0KtP5qEyJ3V0gk2S", "CharacterControllerDebugRenderer", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var CharacterControllerDebugRenderer = exports('CharacterControllerDebugRenderer', (_dec = ccclass('CharacterControllerDebugRenderer'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(CharacterControllerDebugRenderer, _Component);
        function CharacterControllerDebugRenderer() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = CharacterControllerDebugRenderer.prototype;
        _proto.update = function update(deltaTime) {
          var characterController = this.node.getComponent(CharacterController);
          if (characterController instanceof CapsuleCharacterController) {
            drawCapsule(this.node.worldPosition, characterController.center, characterController.radius, characterController.height);
            drawCapsule(this.node.worldPosition, characterController.center, characterController.radius + characterController.skinWidth, characterController.height, Color.BLACK);
          }
        };
        return CharacterControllerDebugRenderer;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Component.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('injectComponent', injectComponent);
      cclegacy._RF.push({}, "8ff8bJLUPxLe7wlF2WPYLbn", "Component", undefined);
      var START_METHOD_NAME = 'onLoad';
      function injectComponent(componentConstructor, children) {
        if (children === void 0) {
          children = false;
        }
        return function (target, propertyKey) {
          var oldDescriptor = Object.getOwnPropertyDescriptor(target, START_METHOD_NAME);
          var oldMethod;
          if (oldDescriptor) {
            if (typeof oldDescriptor.value === 'function') {
              oldMethod = oldDescriptor.value;
            } else {
              throw new Error("The existing 'start' property is not a function.");
            }
          }
          var newDescriptor = {
            configurable: true,
            enumerable: false,
            writable: true,
            value: function value() {
              var instance = children ? this.node.getComponentInChildren(componentConstructor) : this.node.getComponent(componentConstructor);
              Reflect.set(this, propertyKey, instance);
              if (oldMethod) {
                oldMethod.apply(this);
              }
            }
          };
          Object.defineProperty(target, START_METHOD_NAME, newDescriptor);
        };
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DebugDraw.ts", ['cc'], function (exports) {
  var cclegacy, Color, Vec3, geometry, find, Camera, director;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Color = module.Color;
      Vec3 = module.Vec3;
      geometry = module.geometry;
      find = module.find;
      Camera = module.Camera;
      director = module.director;
    }],
    execute: function () {
      exports({
        drawCapsule: drawCapsule,
        drawCube: drawCube,
        drawLineFromTo: drawLineFromTo,
        drawLineOriginDirLen: drawLineOriginDirLen,
        drawSphere: drawSphere
      });
      cclegacy._RF.push({}, "5f0ddC+yOtAWJzGeF3brx54", "DebugDraw", undefined);
      function getGeometryRender() {
        var _director$root;
        var camera = undefined;
        {
          var _find;
          camera = (_find = find('Main Camera')) == null || (_find = _find.getComponent(Camera)) == null ? void 0 : _find.camera;
        }
        if (!camera) {
          return;
        }
        if (camera) {
          camera.initGeometryRenderer();
        }
        var geometryRenderer = camera && camera.geometryRenderer || ((_director$root = director.root) == null ? void 0 : _director$root.pipeline.geometryRenderer); //RenderPipeline.prototype
        return geometryRenderer;
      }
      function drawCapsule(position, center, radius, height, color) {
        if (color === void 0) {
          color = Color.GREEN;
        }
        var geometryRenderer = getGeometryRender();
        if (!geometryRenderer) return;
        geometryRenderer.addCapsule(Vec3.add(new Vec3(), position, center), radius, height, color, 10, 4, true);
      }
      function drawSphere(center, radius, color) {
        if (color === void 0) {
          color = Color.GREEN;
        }
        var geometryRenderer = getGeometryRender();
        if (!geometryRenderer) return;
        geometryRenderer.addSphere(center, radius, color, 10, 4, true);
      }
      function drawCube(position, extent, color) {
        if (color === void 0) {
          color = Color.WHITE;
        }
        var geometryRenderer = getGeometryRender();
        if (!geometryRenderer) {
          return geometryRenderer;
        }
        if (typeof extent === 'number') {
          extent = new Vec3(extent, extent, extent);
        }
        geometryRenderer.addBoundingBox(geometry.AABB.fromPoints(new geometry.AABB(), Vec3.scaleAndAdd(new Vec3(), position, extent, -0.5), Vec3.scaleAndAdd(new Vec3(), position, extent, 0.5)), color, true);
      }
      function drawLineOriginDirLen(from, dir, length, color) {
        if (color === void 0) {
          color = Color.WHITE;
        }
        var geometryRenderer = getGeometryRender();
        if (!geometryRenderer) {
          return geometryRenderer;
        }
        geometryRenderer.addLine(from, Vec3.scaleAndAdd(new Vec3(), from, dir, length), color);
      }
      function drawLineFromTo(from, to, color) {
        if (color === void 0) {
          color = Color.WHITE;
        }
        var geometryRenderer = getGeometryRender();
        if (!geometryRenderer) {
          return geometryRenderer;
        }
        geometryRenderer.addLine(from, to, color);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Env.ts", ['cc'], function (exports) {
  var cclegacy, sys;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }],
    execute: function () {
      exports('useMouseInput', useMouseInput);
      cclegacy._RF.push({}, "a8e74fzgpdNS4WNl5PVwPZm", "Env", undefined);
      function useMouseInput() {
        return !isTouchDevice();
      }
      function isTouchDevice() {
        return sys.hasFeature(sys.Feature.INPUT_TOUCH);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Event.ts", ['cc'], function (exports) {
  var cclegacy, EventTarget;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0d6c4v67HpIW7KV06ryG8UA", "Event", undefined);
      var Event = exports('Event', /*#__PURE__*/function () {
        function Event() {
          this._eventTarget = new EventTarget();
        }
        var _proto = Event.prototype;
        _proto.subscribe = function subscribe(callback, thisArg) {
          this._eventTarget.on('', callback, thisArg);
        };
        _proto.unsubscribe = function unsubscribe(callback, thisArg) {
          this._eventTarget.off('', callback, thisArg);
        };
        _proto.invoke = function invoke() {
          var _this$_eventTarget;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          (_this$_eventTarget = this._eventTarget).emit.apply(_this$_eventTarget, [''].concat(args));
        };
        return Event;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FollowCamera.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Interop.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Vec3, math, clamp, Component, constantSpeedInterop, interopToVec3;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Vec3 = module.Vec3;
      math = module.math;
      clamp = module.clamp;
      Component = module.Component;
    }, function (module) {
      constantSpeedInterop = module.constantSpeedInterop;
      interopToVec3 = module.interopToVec3;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "e4ecedi9Z1HuZujkzSkGFJj", "FollowCamera", undefined);
      var FollowCamera = exports('FollowCamera', (_dec = _decorator.ccclass('FollowCamera'), _dec2 = _decorator.executionOrder(9999), _dec3 = _decorator.property({
        displayName: 'Min Distance',
        tooltip: 'Min distance from camera to the target.'
      }), _dec4 = _decorator.property({
        displayName: 'Max Distance',
        tooltip: 'Max distance from camera to the target.'
      }), _dec5 = _decorator.property({
        displayName: 'Init Distance',
        tooltip: 'Initial distance from camera to the target.'
      }), _dec6 = _decorator.property({
        displayName: 'Init Hori Rotation',
        tooltip: 'Initial horizontal rotation.'
      }), _dec7 = _decorator.property({
        displayName: 'Init Vert Rotation',
        tooltip: 'Initial vertical rotation.'
      }), _dec8 = _decorator.property({
        type: Node,
        displayName: 'target',
        tooltip: 'The target that given camera follows.'
      }), _dec9 = _decorator.property({
        displayName: 'Auto Track',
        tooltip: 'Camera automatically follows the target. When turned on, camera automatically adjust to the back of target.'
      }), _dec10 = _decorator.property({
        displayName: 'Auto Track Speed',
        tooltip: 'Camera move speed when automatically follows the target.',
        visible: function visible() {
          return this.autoTraceEnabled;
        }
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_cc$Component) {
        _inheritsLoose(FollowCamera, _cc$Component);
        function FollowCamera() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _cc$Component.call.apply(_cc$Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "minDistance", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "maxDistance", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initialDistance", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initialHorizonRotation", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "initialVerticalRotation", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "target", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoTraceEnabled", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "autoTraceSpeed", _descriptor8, _assertThisInitialized(_this));
          _this._lookAtPosition = new Vec3();
          _this._distance = 0.0;
          _this._desiredDistance = 0.0;
          _this._currentDir = math.Vec3.negate(new math.Vec3(), math.Vec3.UNIT_Z);
          return _this;
        }
        var _proto = FollowCamera.prototype;
        _proto.start = function start() {
          Vec3.copy(this._lookAtPosition, this.target.position);
          this._desiredDistance = this.initialDistance;
          this._distance = this._desiredDistance;
          this._rotateHorizontal(this.initialHorizonRotation);
          this._rotateVertical(this.initialVerticalRotation);
          this._updatePosition();
        };
        _proto.update = function update(deltaTime) {
          this._distance = constantSpeedInterop(this._distance, this._desiredDistance, deltaTime, 5);
          this._zoom(this._distance);
          interopToVec3(this._lookAtPosition, this._lookAtPosition, this.target.worldPosition, deltaTime, 6);
          this._updatePosition();
        };
        _proto.rotateHorizontal = function rotateHorizontal(angleDeg) {
          this._rotateHorizontal(angleDeg);
        };
        _proto.rotateVertical = function rotateVertical(angleDeg) {
          this._rotateVertical(angleDeg);
        };
        _proto.zoom = function zoom(signedDistance) {
          this._zoomDelta(signedDistance);
        };
        _proto._calcTransform = function _calcTransform(targetPosition, outPosition, outRotation) {
          var dir = math.Vec3.normalize(new math.Vec3(), this._currentDir);
          math.Quat.fromViewUp(outRotation, dir, math.Vec3.UNIT_Y);
          math.Vec3.add(outPosition, targetPosition, this._currentDir);
        };
        _proto._updatePosition = function _updatePosition() {
          var position = new math.Vec3();
          var rotation = new math.Quat();
          this._calcTransform(this._lookAtPosition, position, rotation);
          this.node.position = position;
          this.node.rotation = rotation;
        };
        _proto._zoom = function _zoom(distance) {
          math.Vec3.normalize(this._currentDir, this._currentDir);
          math.Vec3.multiplyScalar(this._currentDir, this._currentDir, distance);
        };
        _proto._zoomDelta = function _zoomDelta(delta) {
          this._desiredDistance = clamp(this._distance + delta, this.minDistance, this.maxDistance);
        };
        _proto._rotateHorizontal = function _rotateHorizontal(angle) {
          var q = math.Quat.fromAxisAngle(new math.Quat(), math.Vec3.UNIT_Y, math.toRadian(angle));
          math.Vec3.transformQuat(this._currentDir, this._currentDir, q);
        };
        _proto._rotateVertical = function _rotateVertical(angle) {
          var currentDirNorm = math.Vec3.normalize(new math.Vec3(), this._currentDir);
          var up = math.Vec3.UNIT_Y;
          var axis = math.Vec3.cross(new math.Vec3(), currentDirNorm, up);
          math.Vec3.normalize(axis, axis);
          var currentAngle = math.toDegree(math.Vec3.angle(currentDirNorm, up));
          var DISABLE_FLIP_DELTA = 1e-2;
          var clampedAngle = currentAngle - math.clamp(currentAngle - angle, 10.0 + DISABLE_FLIP_DELTA, 120.0 - DISABLE_FLIP_DELTA);
          var q = math.Quat.fromAxisAngle(new math.Quat(), axis, math.toRadian(clampedAngle));
          math.Vec3.transformQuat(this._currentDir, this._currentDir, q);
        };
        return FollowCamera;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "minDistance", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "maxDistance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "initialDistance", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "initialHorizonRotation", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "initialVerticalRotation", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 45.0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "autoTraceEnabled", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "autoTraceSpeed", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 180.0;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FollowCameraInput.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FollowCamera.ts', './Env.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Node, EventMouse, Vec2, toDegree, Component, FollowCamera, useMouseInput;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      EventMouse = module.EventMouse;
      Vec2 = module.Vec2;
      toDegree = module.toDegree;
      Component = module.Component;
    }, function (module) {
      FollowCamera = module.FollowCamera;
    }, function (module) {
      useMouseInput = module.useMouseInput;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "af3e3igI0dNfqSLEz+pHrOM", "FollowCameraInput", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FollowCameraInput = exports('FollowCameraInput', (_dec = ccclass('FollowCameraInput'), _dec2 = property(FollowCamera), _dec3 = property({
        displayName: 'Hori Rotation Speed',
        tooltip: 'Rotation speed on horizontal axis.'
      }), _dec4 = property({
        displayName: 'Vert Rotation Speed',
        tooltip: 'Vertical speed on horizontal axis.'
      }), _dec5 = property({
        displayName: 'Scroll Zoom Speed',
        tooltip: 'Zoom speed with the mouse scroll wheel.'
      }), _dec6 = property({
        displayName: 'Touchpad Zoom Speed',
        tooltip: 'Zoom speed with a touch pad.'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FollowCameraInput, _Component);
        function FollowCameraInput() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "camera", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "horizontalRotationSpeed", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "verticalRotationSpeed", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "mouseWheelSpeed", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "touchZoomSpeed", _descriptor5, _assertThisInitialized(_this));
          _this._interpretTouchAsMouse = false;
          _this._mouseButtonPressing = {
            left: false,
            right: false,
            middle: false
          };
          _this._previousTwoTouchDistance = 0.0;
          _this._touches = [];
          return _this;
        }
        var _proto = FollowCameraInput.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this._interpretTouchAsMouse = useMouseInput();
          this.node.on(Node.EventType.MOUSE_DOWN, this._onMouseDown, this);
          this.node.on(Node.EventType.MOUSE_UP, this._onMouseUp, this);
          this.node.on(Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
          this.node.on(Node.EventType.TOUCH_START, this._onTouchBegin, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this._onTouchEnd, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.MOUSE_DOWN, this._onMouseDown, this);
          this.node.off(Node.EventType.MOUSE_UP, this._onMouseUp, this);
          this.node.off(Node.EventType.MOUSE_WHEEL, this._onMouseWheel, this);
          this.node.off(Node.EventType.TOUCH_START, this._onTouchBegin, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this._onTouchMove, this);
          this.node.off(Node.EventType.TOUCH_END, this._onTouchEnd, this);
        };
        _proto.update = function update(deltaTime) {};
        _proto._onMouseDown = function _onMouseDown(event) {
          switch (event.getButton()) {
            default:
              break;
            case EventMouse.BUTTON_LEFT:
              this._mouseButtonPressing.left = true;
              break;
            case EventMouse.BUTTON_RIGHT:
              this._mouseButtonPressing.right = true;
              break;
            case EventMouse.BUTTON_MIDDLE:
              this._mouseButtonPressing.middle = true;
              break;
          }
        };
        _proto._onMouseUp = function _onMouseUp(event) {
          switch (event.getButton()) {
            default:
              break;
            case EventMouse.BUTTON_LEFT:
              this._mouseButtonPressing.left = false;
              break;
            case EventMouse.BUTTON_RIGHT:
              this._mouseButtonPressing.right = false;
              break;
            case EventMouse.BUTTON_MIDDLE:
              this._mouseButtonPressing.middle = false;
              break;
          }
        };
        _proto._onMouseWheel = function _onMouseWheel(event) {
          var deltaZoom = -this.mouseWheelSpeed * Math.sign(event.getScrollY());
          this.camera.zoom(deltaZoom);
        };
        _proto._onTouchBegin = function _onTouchBegin(eventTouch) {
          var touches = eventTouch.getTouches();
          for (var _iterator = _createForOfIteratorHelperLoose(touches), _step; !(_step = _iterator()).done;) {
            var touch = _step.value;
            if (this._touches.length < 2) {
              this._touches.push({
                id: touch.getID(),
                location: Vec2.clone(touch.getLocation())
              });
            }
          }
        };
        _proto._onTouchMove = function _onTouchMove(eventTouch) {
          var touches = eventTouch.getTouches();
          if (touches.length === 1) {
            this._handSingleTouchMove(eventTouch);
            return;
          }
          console.log("Touches Move: " + this._touches.length);
          if (this._touches.length !== 2) {
            return;
          }
          if (touches.length !== 2) {
            return;
          }
          var newTouches = this._touches.map(function (_ref) {
            var id = _ref.id;
            return touches.find(function (touch) {
              return touch.getID() === id;
            });
          });
          if (newTouches.some(function (touch) {
            return !touch;
          })) {
            return;
          }
          var oldTouch0Location = this._touches[0].location;
          var oldTouch1Location = this._touches[1].location;
          var newTouch0Location = newTouches[0].getLocation();
          var newTouch1Location = newTouches[1].getLocation();
          var dir0 = Vec2.subtract(new Vec2(), newTouch0Location, oldTouch0Location);
          Vec2.normalize(dir0, dir0);
          var dir1 = Vec2.subtract(new Vec2(), newTouch1Location, oldTouch1Location);
          Vec2.normalize(dir1, dir1);
          var angle = toDegree(Vec2.angle(dir0, dir1));
          if (angle > 170.0) {
            // Zoom
            var previousDistance = Vec2.distance(oldTouch0Location, oldTouch1Location);
            var thisDistance = Vec2.distance(newTouch0Location, newTouch1Location);
            var dDistance = thisDistance - previousDistance;
            if (dDistance !== 0) {
              var deltaZoom = -this.touchZoomSpeed * dDistance;
              this.camera.zoom(deltaZoom);
            }
          } else if (angle < 10.0) {
            var delta = Vec2.subtract(new Vec2(), newTouch0Location, oldTouch0Location);
            var dx = delta.x;
            if (dx) {
              var _angle = -dx * this.horizontalRotationSpeed;
              this.camera.rotateHorizontal(_angle);
            }
            var dy = delta.y;
            if (dy) {
              var _angle2 = -dy * this.verticalRotationSpeed;
              this.camera.rotateVertical(_angle2);
            }
          }
          Vec2.copy(oldTouch0Location, newTouch0Location);
          Vec2.copy(oldTouch1Location, newTouch1Location);
        };
        _proto._onTouchEnd = function _onTouchEnd(eventTouch) {
          this._touches = this._touches.filter(function (touch) {
            return eventTouch.getTouches().findIndex(function (removal) {
              return removal.getID() === touch.id;
            }) < 0;
          });
        };
        _proto._handSingleTouchMove = function _handSingleTouchMove(event) {
          if (this._interpretTouchAsMouse && !this._mouseOrTouchMoveEnabled) {
            return;
          }
          this._rotateHorizontalByTouchMove(event.getDeltaX(), event.getDeltaY());
        };
        _proto._rotateHorizontalByTouchMove = function _rotateHorizontalByTouchMove(deltaX, deltaY) {
          var dx = deltaX;
          if (dx) {
            var angle = -dx * this.horizontalRotationSpeed;
            this.camera.rotateHorizontal(angle);
          }
          var dy = deltaY;
          if (dy) {
            var _angle3 = -dy * this.verticalRotationSpeed;
            this.camera.rotateVertical(_angle3);
          }
        };
        _createClass(FollowCameraInput, [{
          key: "_mouseOrTouchMoveEnabled",
          get: function get() {
            return this._mouseButtonPressing.left;
          }
        }]);
        return FollowCameraInput;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "horizontalRotationSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "verticalRotationSpeed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "mouseWheelSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "touchZoomSpeed", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Input.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Predefined.ts'], function (exports) {
  var _createForOfIteratorHelperLoose, cclegacy, director, Director, input, Input, predefinedAxes, predefinedActions;
  return {
    setters: [function (module) {
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
      input = module.input;
      Input = module.Input;
    }, function (module) {
      predefinedAxes = module.predefinedAxes;
      predefinedActions = module.predefinedActions;
    }],
    execute: function () {
      cclegacy._RF.push({}, "1e5a0xuGE9D9oEgieIenEPM", "Input", undefined);
      var InputManager = /*#__PURE__*/function () {
        function InputManager() {
          var _this = this;
          this._axes = {};
          this._actions = {};
          this._pressedKeys = new Set();
          for (var _i = 0, _Object$entries = Object.entries(predefinedAxes); _i < _Object$entries.length; _i++) {
            var _Object$entries$_i = _Object$entries[_i],
              id = _Object$entries$_i[0],
              mappings = _Object$entries$_i[1].mappings;
            this._addAxis.apply(this, [id].concat(mappings));
          }
          for (var _i2 = 0, _Object$entries2 = Object.entries(predefinedActions); _i2 < _Object$entries2.length; _i2++) {
            var _Object$entries2$_i = _Object$entries2[_i2],
              _id = _Object$entries2$_i[0],
              _mappings = _Object$entries2$_i[1].mappings;
            this._addAction.apply(this, [_id].concat(_mappings));
          }
          this._initialize();
          director.on(Director.EVENT_BEFORE_UPDATE, function () {
            _this.update(0.0);
          });
        }
        var _proto = InputManager.prototype;
        _proto.getAxisValue = function getAxisValue(axisId) {
          var _this$_axes$axisId$ax, _this$_axes$axisId;
          return (_this$_axes$axisId$ax = (_this$_axes$axisId = this._axes[axisId]) == null ? void 0 : _this$_axes$axisId.axis.value) != null ? _this$_axes$axisId$ax : 0.0;
        };
        _proto.getAction = function getAction(actionId) {
          var _this$_actions$action, _this$_actions$action2;
          return (_this$_actions$action = (_this$_actions$action2 = this._actions[actionId]) == null ? void 0 : _this$_actions$action2.triggered) != null ? _this$_actions$action : false;
        };
        _proto.update = function update(deltaTime) {
          for (var _i3 = 0, _Object$entries3 = Object.entries(this._actions); _i3 < _Object$entries3.length; _i3++) {
            var _Object$entries3$_i = _Object$entries3[_i3],
              _ = _Object$entries3$_i[0],
              action = _Object$entries3$_i[1];
            action.triggered = false;
            if (action.triggered2) {
              action.triggered = true;
              action.triggered2 = false;
            }
          }
          for (var _i4 = 0, _Object$entries4 = Object.entries(this._axes); _i4 < _Object$entries4.length; _i4++) {
            var _Object$entries4$_i = _Object$entries4[_i4],
              _2 = _Object$entries4$_i[0],
              _Object$entries4$_i$ = _Object$entries4$_i[1],
              axis = _Object$entries4$_i$.axis,
              mappings = _Object$entries4$_i$.mappings;
            var axisValue = 0.0;
            for (var _iterator = _createForOfIteratorHelperLoose(mappings), _step; !(_step = _iterator()).done;) {
              var mapping = _step.value;
              var pressed = this._pressedKeys.has(mapping.keyCode);
              if (pressed) {
                axisValue += 1.0 * mapping.scale;
              }
            }
            axis.value = axisValue;
          }
        };
        _proto._addAxis = function _addAxis(axisId) {
          var axisRecord = this._axes[axisId] = new AxisRecord();
          for (var _len = arguments.length, mappings = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            mappings[_key - 1] = arguments[_key];
          }
          for (var _i5 = 0, _mappings2 = mappings; _i5 < _mappings2.length; _i5++) {
            var _mappings2$_i = _mappings2[_i5],
              _keyCode = _mappings2$_i.keyCode,
              scale = _mappings2$_i.scale;
            axisRecord.mappings.push(new AxisMapping(_keyCode, scale));
          }
        };
        _proto._addAction = function _addAction(actionId) {
          var actionRecord = this._actions[actionId] = new ActionRecord();
          for (var _len2 = arguments.length, mappings = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            mappings[_key2 - 1] = arguments[_key2];
          }
          for (var _i6 = 0, _mappings3 = mappings; _i6 < _mappings3.length; _i6++) {
            var _keyCode2 = _mappings3[_i6].keyCode;
            actionRecord.mappings.push(new ActionMapping(_keyCode2));
          }
        };
        _proto._initialize = function _initialize() {
          var _this2 = this;
          input.on(Input.EventType.KEY_DOWN, function (event) {
            _this2._pressedKeys.add(event.keyCode);
            for (var _i7 = 0, _Object$entries5 = Object.entries(_this2._actions); _i7 < _Object$entries5.length; _i7++) {
              var _Object$entries5$_i = _Object$entries5[_i7],
                _ = _Object$entries5$_i[0],
                action = _Object$entries5$_i[1];
              if (action.mappings.some(function (mapping) {
                return mapping.keyCode === event.keyCode;
              })) {
                action.triggered2 = true;
              }
            }
          });
          input.on(Input.EventType.KEY_UP, function (event) {
            _this2._pressedKeys["delete"](event.keyCode);
          });
        };
        return InputManager;
      }();
      var Axis = function Axis() {
        this.value = 0.0;
      };
      var AxisMapping = function AxisMapping(keyCode, scale) {
        this.keyCode = void 0;
        this.scale = void 0;
        this.keyCode = keyCode;
        this.scale = scale;
      };
      var AxisRecord = function AxisRecord() {
        this.axis = new Axis();
        this.mappings = [];
      };
      var Action = function Action() {};
      var ActionMapping = function ActionMapping(keyCode) {
        this.keyCode = keyCode;
      };
      var ActionRecord = function ActionRecord() {
        this.action = new Action();
        this.mappings = [];
        this.triggered = false;
        this.triggered2 = false;
      };
      var globalInputManager = exports('globalInputManager', new InputManager());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Interop.ts", ['cc'], function (exports) {
  var cclegacy, clamp, Quat, Vec4, clamp01, EPSILON, lerp;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      clamp = module.clamp;
      Quat = module.Quat;
      Vec4 = module.Vec4;
      clamp01 = module.clamp01;
      EPSILON = module.EPSILON;
      lerp = module.lerp;
    }],
    execute: function () {
      exports({
        constantSpeedInterop: constantSpeedInterop,
        interopTo: interopTo,
        interopToQuat: interopToQuat,
        interopToVec3: interopToVec3
      });
      cclegacy._RF.push({}, "be4f6+KgrpCq6vnZc1xPR32", "Interop", undefined);
      function interopTo(from, to, deltaTime, speed) {
        if (speed <= 0.0) {
          return to;
        }
        var diff = to - from;
        if (Math.pow(diff, 2) < 1e-8) {
          return to;
        }
        var delta = diff * clamp(deltaTime * speed, 0.0, 1.0);
        return from + delta;
      }
      function interopToVec3(out, from, to, deltaTime, speed) {
        out.x = interopTo(from.x, to.x, deltaTime, speed);
        out.y = interopTo(from.y, to.y, deltaTime, speed);
        out.z = interopTo(from.z, to.z, deltaTime, speed);
        return out;
      }
      function interopToQuat(out, from, to, deltaTime, speed) {
        if (speed <= 0.0) {
          return Quat.copy(out, to);
        }
        if (rotationEqualQuat(from, to)) {
          return Quat.copy(out, to);
        }
        var t = clamp01(deltaTime * speed / Math.max(quatAngularDistance(from, to), 1e-6));
        return Quat.slerp(out, from, to, t);
      }
      function rotationEqualQuat(a, b, epsilon) {
        if (epsilon === void 0) {
          epsilon = EPSILON;
        }
        return Quat.equals(a, b, epsilon) || Vec4.equals(Vec4.ZERO, new Vec4(a.x + b.x, a.y + b.y, a.z + b.z, a.w + b.w), epsilon);
      }
      function quatAngularDistance(a, b) {
        var dot = Quat.dot(a, b);
        return Math.acos(2 * dot * dot - 1);
      }
      function constantSpeedInterop(from, to, deltaTime, speed) {
        if (speed <= 0.0) {
          return to;
        }
        var diff = to - from;
        if (Math.pow(diff, 2) < 1e-8) {
          return to;
        }
        var t = clamp01(deltaTime * speed / Math.abs(diff));
        return lerp(from, to, t);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './Procedural2-Animation.ts', './FollowCamera.ts', './FollowCameraInput.ts', './Procedural2Controller.ts', './Input.ts', './Predefined.ts', './Procedural2-Animation-UI.ts', './CharacterControllerDebugRenderer.ts', './Component.ts', './DebugDraw.ts', './TimeScale.ts', './TimeScaleUI.ts', './Env.ts', './Event.ts', './Interop.ts', './Node.ts', './ShowTraceSwitch.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Node.ts", ['cc'], function (exports) {
  var cclegacy, math;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      math = module.math;
    }],
    execute: function () {
      exports('getForward', getForward);
      cclegacy._RF.push({}, "c68cdisgyVOdbw/s+22YHmB", "Node", undefined);
      function getForward(node) {
        return math.Vec3.transformQuat(new math.Vec3(), math.Vec3.UNIT_Z, node.worldRotation);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Predefined.ts", ['cc'], function (exports) {
  var cclegacy, KeyCode;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      KeyCode = module.KeyCode;
    }],
    execute: function () {
      var _predefinedAxes, _predefinedActions;
      cclegacy._RF.push({}, "c4e47lmNBdA17TPXiNYx+sT", "Predefined", undefined);
      var PredefinedAxisId = exports('PredefinedAxisId', /*#__PURE__*/function (PredefinedAxisId) {
        PredefinedAxisId[PredefinedAxisId["MoveForward"] = 0] = "MoveForward";
        PredefinedAxisId[PredefinedAxisId["MoveRight"] = 1] = "MoveRight";
        return PredefinedAxisId;
      }({}));
      var PredefinedActionId = exports('PredefinedActionId', /*#__PURE__*/function (PredefinedActionId) {
        PredefinedActionId[PredefinedActionId["Fire"] = 0] = "Fire";
        PredefinedActionId[PredefinedActionId["IronSights"] = 1] = "IronSights";
        PredefinedActionId[PredefinedActionId["Jump"] = 2] = "Jump";
        PredefinedActionId[PredefinedActionId["Reload"] = 3] = "Reload";
        PredefinedActionId[PredefinedActionId["Crouch"] = 4] = "Crouch";
        PredefinedActionId[PredefinedActionId["ControlMode"] = 5] = "ControlMode";
        return PredefinedActionId;
      }({}));
      var predefinedAxes = exports('predefinedAxes', (_predefinedAxes = {}, _predefinedAxes[PredefinedAxisId.MoveForward] = {
        mappings: [{
          keyCode: KeyCode.KEY_W,
          scale: 1.0
        }, {
          keyCode: KeyCode.KEY_S,
          scale: -1.0
        }]
      }, _predefinedAxes[PredefinedAxisId.MoveRight] = {
        mappings: [{
          keyCode: KeyCode.KEY_D,
          scale: 1.0
        }, {
          keyCode: KeyCode.KEY_A,
          scale: -1.0
        }]
      }, _predefinedAxes));
      var predefinedActions = exports('predefinedActions', (_predefinedActions = {}, _predefinedActions[PredefinedActionId.Fire] = {
        mappings: [{
          keyCode: KeyCode.KEY_F
        }]
      }, _predefinedActions[PredefinedActionId.IronSights] = {
        mappings: [{
          keyCode: KeyCode.KEY_Q
        }]
      }, _predefinedActions[PredefinedActionId.Jump] = {
        mappings: [{
          keyCode: KeyCode.SPACE
        }]
      }, _predefinedActions[PredefinedActionId.Reload] = {
        mappings: [{
          keyCode: KeyCode.KEY_R
        }]
      }, _predefinedActions[PredefinedActionId.Crouch] = {
        mappings: [{
          keyCode: KeyCode.KEY_C
        }]
      }, _predefinedActions[PredefinedActionId.ControlMode] = {
        mappings: [{
          keyCode: KeyCode.ALT_LEFT
        }]
      }, _predefinedActions));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Procedural2-Animation-UI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Procedural2-Animation.ts', './CharacterControllerDebugRenderer.ts', './ShowTraceSwitch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, Toggle, Component, Procedural2_Animation, CharacterControllerDebugRenderer, setGlobalShowTraces;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Toggle = module.Toggle;
      Component = module.Component;
    }, function (module) {
      Procedural2_Animation = module.Procedural2_Animation;
    }, function (module) {
      CharacterControllerDebugRenderer = module.CharacterControllerDebugRenderer;
    }, function (module) {
      setGlobalShowTraces = module.setGlobalShowTraces;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "11dbad9lR1Er5Y57XDzU53Y", "Procedural2-Animation-UI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Procedural2_Animation_UI = exports('Procedural2_Animation_UI', (_dec = ccclass('Procedural2-Procedural2_Animation_UI-UI'), _dec2 = property(Toggle), _dec3 = property(Toggle), _dec4 = property(Toggle), _dec5 = property(Toggle), _dec6 = property(Toggle), _dec7 = property(Toggle), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Procedural2_Animation_UI, _Component);
        function Procedural2_Animation_UI() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "ikEnabledToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fitPelvisToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fitPositionToggle", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "fitRotationToggle", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "showTracesToggle", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "displayCCTColliderToggle", _descriptor6, _assertThisInitialized(_this));
          _this._displayCCTCollider = false;
          return _this;
        }
        var _proto = Procedural2_Animation_UI.prototype;
        _proto.start = function start() {
          this.toggleIKEnabled(this.ikEnabledToggle);
          this.toggleFitPelvis(this.fitPelvisToggle);
          this.toggleFitPosition(this.fitPositionToggle);
          this.toggleFitRotation(this.fitRotationToggle);
          this.toggleShowTraces(this.showTracesToggle);
          this.toggleDisplayCCTCollider(this.displayCCTColliderToggle);
        };
        _proto.toggleIKEnabled = function toggleIKEnabled(toggle) {
          this._toggleBoolean('ikEnabled', toggle);
        };
        _proto.toggleFitPelvis = function toggleFitPelvis(toggle) {
          this._toggleBoolean('fitPelvis', toggle);
        };
        _proto.toggleFitPosition = function toggleFitPosition(toggle) {
          this._toggleBoolean('fitPosition', toggle);
        };
        _proto.toggleFitRotation = function toggleFitRotation(toggle) {
          this._toggleBoolean('fitRotation', toggle);
        };
        _proto.toggleShowTraces = function toggleShowTraces(toggle) {
          setGlobalShowTraces(toggle.isChecked);
        };
        _proto.toggleDisplayCCTCollider = function toggleDisplayCCTCollider(toggle) {
          this._displayCCTCollider = toggle.isChecked;
          for (var _iterator = _createForOfIteratorHelperLoose(this.node.scene.getComponentsInChildren(CharacterControllerDebugRenderer)), _step; !(_step = _iterator()).done;) {
            var renderer = _step.value;
            renderer.enabled = toggle.isChecked;
          }
        };
        _proto._toggleBoolean = function _toggleBoolean(name, toggle) {
          var anim = this.node.scene.getComponentInChildren(Procedural2_Animation);
          if (anim) {
            anim[name] = toggle.isChecked;
          }
        };
        return Procedural2_Animation_UI;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ikEnabledToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fitPelvisToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "fitPositionToggle", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "fitRotationToggle", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "showTracesToggle", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "displayCCTColliderToggle", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Procedural2-Animation.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Procedural2Controller.ts', './Component.ts', './DebugDraw.ts', './Interop.ts', './ShowTraceSwitch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, animation, Vec3, Color, Quat, physics, geometry, Component, Procedural2Controller, injectComponent, drawCube, drawLineOriginDirLen, interopTo, interopToVec3, interopToQuat, globalShowTraces;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      animation = module.animation;
      Vec3 = module.Vec3;
      Color = module.Color;
      Quat = module.Quat;
      physics = module.physics;
      geometry = module.geometry;
      Component = module.Component;
    }, function (module) {
      Procedural2Controller = module.Procedural2Controller;
    }, function (module) {
      injectComponent = module.injectComponent;
    }, function (module) {
      drawCube = module.drawCube;
      drawLineOriginDirLen = module.drawLineOriginDirLen;
    }, function (module) {
      interopTo = module.interopTo;
      interopToVec3 = module.interopToVec3;
      interopToQuat = module.interopToQuat;
    }, function (module) {
      globalShowTraces = module.globalShowTraces;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class4, _class5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;
      cclegacy._RF.push({}, "637209b2u9OWodSNn+ILOL8", "Procedural2-Animation", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var FootIkSetting = (_dec = ccclass("Procedural2_Animation.FootIkSetting"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function () {
        function FootIkSetting() {
          _initializerDefineProperty(this, "fkBone", _descriptor, this);
          _initializerDefineProperty(this, "ikBone", _descriptor2, this);
          _initializerDefineProperty(this, "deformBone", _descriptor3, this);
          _initializerDefineProperty(this, "bottomReferenceBone", _descriptor4, this);
          _initializerDefineProperty(this, "debugTargetBone", _descriptor5, this);
          this.distanceToBottom = 0.0;
        }
        var _proto = FootIkSetting.prototype;
        _proto.calculateDistanceToBottom = function calculateDistanceToBottom() {
          var deformBone = this.deformBone,
            bottomReferenceBone = this.bottomReferenceBone;
          var distanceToBottom = deformBone && bottomReferenceBone ? deformBone.worldPosition.y - bottomReferenceBone.worldPosition.y : 0;
          this.distanceToBottom = distanceToBottom;
        };
        return FootIkSetting;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fkBone", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ikBone", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "deformBone", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bottomReferenceBone", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "debugTargetBone", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class);
      var Procedural2_Animation = exports('Procedural2_Animation', (_dec7 = ccclass('Procedural2_Animation'), _dec8 = requireComponent(animation.AnimationController), _dec9 = requireComponent(Procedural2Controller), _dec10 = property({
        min: 0,
        unit: 'm'
      }), _dec11 = property({
        min: 0,
        unit: 'm'
      }), _dec12 = injectComponent(animation.AnimationController), _dec13 = injectComponent(Procedural2Controller), _dec7(_class4 = _dec8(_class4 = _dec9(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Procedural2_Animation, _Component);
        function Procedural2_Animation() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "debug", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "footIKTraceStartBias", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "footIKTrackDistanceBelowFoot", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftFootIKSetting", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightFootIKSetting", _descriptor10, _assertThisInitialized(_this));
          _this.ikEnabled = true;
          _this.fitPelvis = true;
          _this.fitPosition = true;
          _this.fitRotation = true;
          _initializerDefineProperty(_this, "_animationController", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_controller", _descriptor12, _assertThisInitialized(_this));
          _this._pelvisOffset = new Vec3();
          _this._leftFootOffset = new FootOffset();
          _this._rightFootOffset = new FootOffset();
          _this._inAirTimer = 0.0;
          _this._velocityLR = 0.0;
          _this._velocityFB = 0.0;
          _this._isInAir = true;
          return _this;
        }
        var _proto2 = Procedural2_Animation.prototype;
        _proto2.start = function start() {
          this.leftFootIKSetting.calculateDistanceToBottom();
          this.rightFootIKSetting.calculateDistanceToBottom();
        };
        _proto2.onEnable = function onEnable() {
          this._controller.onJumped.subscribe(this._onJumped, this);
        };
        _proto2.onDisable = function onDisable() {
          this._controller.onJumped.unsubscribe(this._onJumped, this);
        };
        _proto2.update = function update(deltaTime) {
          this._updateMovementState(deltaTime);
          this._updateAirState(deltaTime);
          this._updateFootIK(deltaTime);
        };
        _proto2.lateUpdate = function lateUpdate(dt) {
          if (this.debug && globalShowTraces) {
            for (var _i = 0, _arr = [this.leftFootIKSetting, this.rightFootIKSetting]; _i < _arr.length; _i++) {
              var setting = _arr[_i];
              if (setting.debugTargetBone) {
                drawCube(setting.debugTargetBone.worldPosition, 0.02, Color.CYAN);
              }
            }
          }
        };
        _proto2._onJumped = function _onJumped() {
          this._animationController.setValue('Jump', true);
        };
        _proto2._updateMovementState = function _updateMovementState(deltaTime) {
          var velocity = this._controller.velocity;
          var moveSpeed = Vec3.len(new Vec3(velocity.x, 0.0, velocity.z));
          var isMoving = moveSpeed > 1e-2;
          var hasMovementInput = this._controller.hasMovementInput;
          // Sometimes the physics may cause little movement.
          // To prevent jitter, if the speed is not so big,
          // we should move only if there's "input", that's in controlled by player.
          var hasEffectiveMovementInput = isMoving && hasMovementInput;
          var shouldMove = hasEffectiveMovementInput || moveSpeed > 1.5;
          this._animationController.setValue('ShouldMove', shouldMove);
          this._animationController.setValue('MoveSpeed', moveSpeed);
          var localVelocity = new Vec3();
          {
            var q = Quat.invert(new Quat(), this.node.worldRotation);
            Vec3.transformQuat(localVelocity, velocity, q);
          }
          this._velocityLR = interopTo(this._velocityLR, localVelocity.x, deltaTime, 6);
          this._velocityFB = interopTo(this._velocityFB, localVelocity.z, deltaTime, 6);
          this._animationController.setValue('VelocityLR', this._velocityLR);
          this._animationController.setValue('VelocityFB', this._velocityFB);
        };
        _proto2._updateAirState = function _updateAirState(deltaTime) {
          var GRAVITY_PULL_TIME_THRESHOLD = 0.1;
          var velocityY = this._controller.velocity.y;
          var inAir = false;
          if (!this._isInAir) {
            // If we're on ground and controller says we're falling,
            // - if we have positive y velocity, that's the case we're jumping up, we're in air.
            // - if we have negative y velocity, that's the case we're falling,
            //   but to avoid suddenly change of falling state(for example sliding down) of controller,
            //   we give a cache time to judgement.
            inAir = this._controller.falling && (velocityY > 0 || velocityY < -this._controller.gravity * GRAVITY_PULL_TIME_THRESHOLD);
          } else {
            inAir = this._controller.falling;
          }
          this._isInAir = inAir;
          this._animationController.setValue('InAir', this._isInAir);
        };
        _proto2._updateFootIK = function _updateFootIK(deltaTime) {
          var leftFootOffset = this._calculateFootOffset(this.leftFootIKSetting, new FootOffset());
          var rightFootOffset = this._calculateFootOffset(this.rightFootIKSetting, new FootOffset());
          {
            this._leftFootOffset.interopTo(leftFootOffset, deltaTime);
          }
          {
            this._rightFootOffset.interopTo(rightFootOffset, deltaTime);
          }
          this._updatePelvisOffset(deltaTime, leftFootOffset.position, rightFootOffset.position);
          this._setVarVec3OrZero('LeftFootOffset', this._leftFootOffset.position, this.fitPosition);
          this._setVarQuatOrIdentity('LeftFootRotationOffset', this._leftFootOffset.rotation, this.fitRotation);
          this._setVarVec3OrZero('RightFootOffset', this._rightFootOffset.position, this.fitPosition);
          this._setVarQuatOrIdentity('RightFootRotationOffset', this._rightFootOffset.rotation, this.fitRotation);
          this._setVarVec3OrZero('PelvisPositionOffset', this._pelvisOffset, this.fitPelvis);
          this._animationController.setValue('IKEnabled', this.ikEnabled);
        };
        _proto2._setVarVec3OrZero = function _setVarVec3OrZero(varName, value, set) {
          this._animationController.setValue_experimental(varName, set ? value : Vec3.ZERO);
        };
        _proto2._setVarQuatOrIdentity = function _setVarQuatOrIdentity(varName, value, set) {
          this._animationController.setValue_experimental(varName, set ? value : Quat.IDENTITY);
        };
        _proto2._calculateFootOffset = function _calculateFootOffset(setting, out) {
          if (this._isInAir) {
            return out.identity();
          }
          var fkBone = setting.fkBone,
            ikBone = setting.ikBone,
            distanceToBottom = setting.distanceToBottom;
          var footIKTraceStartBias = this.footIKTraceStartBias;
          if (!fkBone || !ikBone) {
            return out.identity();
          }
          var footLocation = new Vec3(fkBone.worldPosition);
          footLocation.y = this.node.worldPosition.y;
          var traceStart = new Vec3(footLocation);
          Vec3.scaleAndAdd(traceStart, traceStart, new Vec3(0, 1, 0), footIKTraceStartBias);
          var traceDistance = this.footIKTraceStartBias + this.footIKTrackDistanceBelowFoot;
          var physicsSystem = physics.PhysicsSystem.instance;
          var MASK_APPROX_WALKABLE = 1 << 3;
          var mask = ~0;
          mask &= ~MASK_APPROX_WALKABLE;
          var hit = physicsSystem.raycastClosest(geometry.Ray.set(new geometry.Ray(), traceStart.x, traceStart.y, traceStart.z, 0, -1, 0), mask, traceDistance, undefined);
          if (this.debug && globalShowTraces) {
            drawCube(fkBone.worldPosition, 0.02, Color.YELLOW);
            drawCube(traceStart, 0.02, Color.RED);
            if (hit) {
              drawCube(physicsSystem.raycastClosestResult.hitPoint, 0.02, Color.BLUE);
            }
            drawLineOriginDirLen(traceStart, new Vec3(0, -1, 0), traceDistance);
          }
          if (!hit) {
            return out.identity();
          }
          var _physicsSystem$raycas = physicsSystem.raycastClosestResult,
            hitPoint = _physicsSystem$raycas.hitPoint,
            hitNormal = _physicsSystem$raycas.hitNormal;
          var targetPosition = Vec3.copy(new Vec3(), hitPoint);
          // targetPosition.y += distanceToBottom;
          Vec3.scaleAndAdd(targetPosition, targetPosition, hitNormal, distanceToBottom);
          var footLocationLifted = new Vec3(footLocation);
          footLocationLifted.y += distanceToBottom;
          Vec3.subtract(out.position, targetPosition, footLocationLifted);
          Quat.rotationTo(out.rotation, Vec3.UNIT_Y, hitNormal);
          return out;
        };
        _proto2._updatePelvisOffset = function _updatePelvisOffset(deltaTime, leftFootTargetOffset, rightFootTargetOffset) {
          var pelvisOffset = leftFootTargetOffset.y < rightFootTargetOffset.y ? leftFootTargetOffset : rightFootTargetOffset;
          {
            interopToVec3(this._pelvisOffset, this._pelvisOffset, pelvisOffset, deltaTime, pelvisOffset.y > this._pelvisOffset.y ? 10 : 15);
          }
        };
        return Procedural2_Animation;
      }(Component), (_descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "debug", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "footIKTraceStartBias", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "footIKTrackDistanceBelowFoot", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.45;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "leftFootIKSetting", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new FootIkSetting();
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "rightFootIKSetting", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new FootIkSetting();
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "_animationController", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "_controller", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class5)) || _class4) || _class4) || _class4));
      var FootOffset = /*#__PURE__*/function () {
        function FootOffset(position, rotation) {
          if (position === void 0) {
            position = new Vec3();
          }
          if (rotation === void 0) {
            rotation = new Quat();
          }
          this.position = position;
          this.rotation = rotation;
        }
        var _proto3 = FootOffset.prototype;
        _proto3.identity = function identity() {
          Vec3.zero(this.position);
          Quat.identity(this.rotation);
          return this;
        };
        FootOffset.copy = function copy(target, source) {
          Vec3.copy(target.position, source.position);
          Quat.copy(target.rotation, source.rotation);
        };
        _proto3.interopTo = function interopTo(target, deltaTime) {
          interopToVec3(this.position, this.position, target.position, deltaTime, target.position.y > this.position.y ? 30 : 15);
          interopToQuat(this.rotation, this.rotation, target.rotation, deltaTime, 30);
        };
        return FootOffset;
      }();
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Procedural2Controller.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Component.ts', './Input.ts', './Predefined.ts', './Node.ts', './DebugDraw.ts', './Event.ts', './ShowTraceSwitch.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, CharacterController, Vec3, Color, find, toDegree, Quat, toRadian, NodeSpace, geometry, physics, Component, injectComponent, globalInputManager, PredefinedActionId, PredefinedAxisId, getForward, drawLineOriginDirLen, Event, globalShowTraces;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CharacterController = module.CharacterController;
      Vec3 = module.Vec3;
      Color = module.Color;
      find = module.find;
      toDegree = module.toDegree;
      Quat = module.Quat;
      toRadian = module.toRadian;
      NodeSpace = module.NodeSpace;
      geometry = module.geometry;
      physics = module.physics;
      Component = module.Component;
    }, function (module) {
      injectComponent = module.injectComponent;
    }, function (module) {
      globalInputManager = module.globalInputManager;
    }, function (module) {
      PredefinedActionId = module.PredefinedActionId;
      PredefinedAxisId = module.PredefinedAxisId;
    }, function (module) {
      getForward = module.getForward;
    }, function (module) {
      drawLineOriginDirLen = module.drawLineOriginDirLen;
    }, function (module) {
      Event = module.Event;
    }, function (module) {
      globalShowTraces = module.globalShowTraces;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "f4bf33i3XRNCb+1u5q1yYAf", "Procedural2Controller", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EXTRA_DOWNWARD_MOVEMENT_DISTANCE_IF_NOT_IN_AIR = 0.1;
      var Procedural2Controller = exports('Procedural2Controller', (_dec = ccclass('Procedural2Controller'), _dec2 = _decorator.property({
        unit: '°/s'
      }), _dec3 = _decorator.property({
        unit: 'm/s'
      }), _dec4 = _decorator.property({
        unit: 'm/s²'
      }), _dec5 = _decorator.property({
        unit: 's'
      }), _dec6 = injectComponent(CharacterController), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Procedural2Controller, _Component);
        function Procedural2Controller() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "debug", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveTurnSpeed", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "moveSpeed", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "gravity", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "jumpPreparationDuration", _descriptor5, _assertThisInitialized(_this));
          _this._cacheVelocity = new Vec3();
          _this.onJumped = new Event();
          _initializerDefineProperty(_this, "_characterController", _descriptor6, _assertThisInitialized(_this));
          _this._hasMovementInput = false;
          _this._velocityY = 0.0;
          _this._movement = new Vec3();
          _this._falling = false;
          _this._walkableNormal = new Vec3(Vec3.UNIT_Y);
          _this._lastContact = new Vec3();
          _this._isPreparingJump = false;
          _this._jumpPreparationTimer = 0.0;
          _this._shouldFadeView = true;
          return _this;
        }
        var _proto = Procedural2Controller.prototype;
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          this._characterController.on('onControllerColliderHit', this._onPhysicalCharacterControllerHit, this);
        };
        _proto.onDisable = function onDisable() {
          this._characterController.off('onControllerColliderHit', this._onPhysicalCharacterControllerHit, this);
        };
        _proto.update = function update(deltaTime) {
          if (globalInputManager.getAction(PredefinedActionId.ControlMode)) {
            this._shouldFadeView = !this._shouldFadeView;
          }
          this._updateJumpPreparation(deltaTime);
          this._applyLocomotionInput(deltaTime);
          if (this.debug && globalShowTraces) {
            drawLineOriginDirLen(this.node.worldPosition, this._walkableNormal, 1., Color.BLUE);
          }
        };
        _proto._applyLocomotionInput = function _applyLocomotionInput(deltaTime) {
          var _movement = this._movement;
          Vec3.zero(_movement);
          this._hasMovementInput = false;
          if (this._canMove) {
            this._applyInput(deltaTime);
            if (!Vec3.equals(_movement, Vec3.ZERO)) {
              if (!this._falling) {
                this._updateWalkableNormal();
                this._applySliding(_movement);
              }
            }
          }
          this._applyJumpInput(deltaTime);
          if (this.debug && globalShowTraces) {
            drawLineOriginDirLen(this.node.worldPosition, Vec3.normalize(new Vec3(), _movement), 1., Color.RED);
          }
          this._velocityY += -this.gravity * deltaTime;
          _movement.y += this._velocityY * deltaTime;
          // TODO: aim of the extra movement is intend to prevent jitter due to precision problem.
          if (!this._falling) {
            _movement.y -= EXTRA_DOWNWARD_MOVEMENT_DISTANCE_IF_NOT_IN_AIR;
          }
          this._characterController.move(_movement);
          var grounded = this._characterController.isGrounded;
          if (grounded) {
            this._velocityY = 0.0;
            this._falling = false;
          } else {
            this._falling = true;
          }
        };
        _proto._applyInput = function _applyInput(deltaTime) {
          var forwardInput = globalInputManager.getAxisValue(PredefinedAxisId.MoveForward);
          var rightInput = globalInputManager.getAxisValue(PredefinedAxisId.MoveRight);
          var inputVector = new Vec3(-rightInput, 0.0, forwardInput);
          if (Vec3.equals(inputVector, Vec3.ZERO)) {
            return;
          }
          this._hasMovementInput = true;
          this._faceView(deltaTime);
          Vec3.normalize(inputVector, inputVector);
          this._transformInputVector(inputVector);
          Vec3.multiplyScalar(this._movement, inputVector, this.moveSpeed * deltaTime);
        };
        _proto._applyJumpInput = function _applyJumpInput(deltaTime) {
          if (!this._canJump) {
            return;
          }
          if (globalInputManager.getAction(PredefinedActionId.Jump)) {
            this._jumpPreparationTimer = 0.0;
            this._isPreparingJump = true;
            this.onJumped.invoke();
          }
        };
        _proto._getViewDirection = function _getViewDirection(out) {
          if (!this._shouldFadeView) {
            return Vec3.copy(out, getForward(this.node));
          }
          var mainCamera = find('Main Camera');
          if (!mainCamera) {
            return Vec3.set(out, 0, 0, -1);
          } else {
            return Vec3.negate(out, getForward(mainCamera));
          }
        };
        _proto._faceView = function _faceView(deltaTime) {
          var viewDir = this._getViewDirection(new Vec3());
          viewDir.y = 0.0;
          viewDir.normalize();
          var characterDir = getForward(this.node);
          characterDir.y = 0.0;
          characterDir.normalize();
          var currentAimAngle = signedAngleVec3(characterDir, viewDir, Vec3.UNIT_Y);
          var currentAimAngleDegMag = toDegree(Math.abs(currentAimAngle));
          var maxRotDegMag = this.moveTurnSpeed * deltaTime;
          var rotDegMag = Math.min(maxRotDegMag, currentAimAngleDegMag);
          var q = Quat.fromAxisAngle(new Quat(), Vec3.UNIT_Y, Math.sign(currentAimAngle) * toRadian(rotDegMag));
          this.node.rotate(q, NodeSpace.WORLD);
        };
        _proto._transformInputVector = function _transformInputVector(inputVector) {
          var viewDir = this._getViewDirection(new Vec3());
          viewDir.y = 0.0;
          Vec3.normalize(viewDir, viewDir);
          var q = Quat.rotationTo(new Quat(), Vec3.UNIT_Z, viewDir);
          Vec3.transformQuat(inputVector, inputVector, q);
        };
        _proto._onPhysicalCharacterControllerHit = function _onPhysicalCharacterControllerHit(contact) {};
        _proto._updateWalkableNormal = function _updateWalkableNormal() {
          Vec3.copy(this._walkableNormal, Vec3.UNIT_Y);
          var traceStart = new Vec3(this.node.worldPosition);
          var traceDistance = 1;
          var ray = geometry.Ray.set(new geometry.Ray(), traceStart.x, traceStart.y, traceStart.z, 0, -1, 0);
          var physicsSystem = physics.PhysicsSystem.instance;
          var hit = physicsSystem.raycastClosest(ray, undefined, traceDistance, false);
          if (!hit) {
            return;
          }
          Vec3.copy(this._walkableNormal, physicsSystem.raycastClosestResult.hitNormal);
        };
        _proto._applySliding = function _applySliding(v) {
          if (this._falling) {
            return;
          }

          // Don't slide if we're slide upwards.
          if (Vec3.angle(this._walkableNormal, v) > Math.PI / 2) {
            return;
          }
          Vec3.projectOnPlane(v, new Vec3(v), this._walkableNormal);
        };
        _proto._updateJumpPreparation = function _updateJumpPreparation(deltaTime) {
          if (!this._isPreparingJump) {
            return;
          }
          this._jumpPreparationTimer += deltaTime;
          if (this._jumpPreparationTimer >= this.jumpPreparationDuration) {
            this._isPreparingJump = false;
            this._doJump();
          }
        };
        _proto._doJump = function _doJump() {
          this._falling = true;
          this._velocityY = 5;
        };
        _createClass(Procedural2Controller, [{
          key: "velocity",
          get: function get() {
            return Vec3.set(this._cacheVelocity, this._characterController.velocity.x, this._velocityY, this._characterController.velocity.z);
          }
        }, {
          key: "falling",
          get: function get() {
            return this._falling;
          }
        }, {
          key: "hasMovementInput",
          get: function get() {
            return this._hasMovementInput;
          }
        }, {
          key: "_canJump",
          get: function get() {
            return !this._falling && !this._isPreparingJump;
          }
        }, {
          key: "_canMove",
          get: function get() {
            return !this._isPreparingJump;
          }
        }]);
        return Procedural2Controller;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "debug", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveTurnSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 270;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "gravity", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 9.18;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "jumpPreparationDuration", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_characterController", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      function signedAngleVec3(a, b, normal) {
        var angle = Vec3.angle(a, b);
        var cross = Vec3.cross(new Vec3(), a, b);
        cross.normalize();
        return Vec3.dot(cross, normal) < 0 ? -angle : angle;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShowTraceSwitch.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('setGlobalShowTraces', setGlobalShowTraces);
      cclegacy._RF.push({}, "46424PZadRGDoYBLA06wzH/", "ShowTraceSwitch", undefined);
      var globalShowTraces = exports('globalShowTraces', false);
      function setGlobalShowTraces(enabled) {
        globalShowTraces = exports('globalShowTraces', enabled);
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeScale.ts", ['cc'], function (exports) {
  var cclegacy, game, error, Director;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      error = module.error;
      Director = module.Director;
    }],
    execute: function () {
      exports('setTimeScale', setTimeScale);
      cclegacy._RF.push({}, "8d9f242JsBNO7JnkGlDstcA", "TimeScale", undefined);
      var getOrCreateTimeScalePolyfill = function () {
        var polyfill;
        return function () {
          if (!polyfill) {
            var polyfill_ = {
              multiplier: 1.0
            };
            var tick = Director.prototype.tick;
            Director.prototype.tick = function (dt) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              tick.call.apply(tick, [this, dt * polyfill_.multiplier].concat(args));
            };
            polyfill = polyfill_;
          }
          return polyfill;
        };
      }();
      function setTimeScale(multiplier) {
        getOrCreateTimeScalePolyfill().multiplier = multiplier;
      }
      if (!('__debugTickSlow' in globalThis)) {
        Object.defineProperty(globalThis, '__debugTickSlow', {
          value: function value(deltaTime) {
            if (!game.isPaused()) {
              error("You should pause to use __debugTickN()");
              return;
            }
            var multiplier = getOrCreateTimeScalePolyfill().multiplier;
            var tickLength = 1.0 / 60.0 * multiplier;
            var ticks = deltaTime / tickLength;
            var nTicks = Math.trunc(ticks);
            var frac = ticks - nTicks;
            var stepFrac = function stepFrac() {
              return setTimeout(function () {
                return game.step();
              }, frac * 1000);
            };
            if (nTicks === 0) {
              stepFrac();
            } else {
              var handle = setInterval(function () {
                game.step();
                --nTicks;
                if (nTicks === 0) {
                  clearInterval(handle);
                  stepFrac();
                }
              }, tickLength * 1000);
            }
          }
        });
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeScaleUI.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TimeScale.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Slider, Component, setTimeScale;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Slider = module.Slider;
      Component = module.Component;
    }, function (module) {
      setTimeScale = module.setTimeScale;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "a7984LE81BBLKwq2Lv1nmtX", "TimeScaleUI", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TimeScaleUI = exports('TimeScaleUI', (_dec = ccclass('TimeScaleUI'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TimeScaleUI, _Component);
        function TimeScaleUI() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = TimeScaleUI.prototype;
        _proto.start = function start() {
          var slider = this.node.getComponent(Slider);
          if (slider) {
            this.onSliderValueChanged(slider);
          }
        };
        _proto.onSliderValueChanged = function onSliderValueChanged(slider) {
          setTimeScale(slider.progress);
        };
        return TimeScaleUI;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});