
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["verify"] = factory();
	else
		root["verify"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 返回指定范围内的随机整数。
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @example utilscore.randomNum(5,10) // => 5 || 6 || 7 || 8 || 9 || 10 
 */
var randomNum = exports.randomNum = function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 加法运算
 * @param {Number} a 
 * @param {Number} b 
 * @example utilscore.addNum(0.3 , 0.6) // => 0.9
 */
var addNum = exports.addNum = function addNum(a, b) {
  var c, d, e;
  try {
    c = a.toString().split(".")[1].length;
  } catch (f) {
    c = 0;
  }
  try {
    d = b.toString().split(".")[1].length;
  } catch (f) {
    d = 0;
  }
  return e = Math.pow(10, Math.max(c, d)), (mulNum(a, e) + mulNum(b, e)) / e;
};

/**
 * 乘法运算
 * @param {Number} a 
 * @param {Number} b 
 * @example utilscore.mulNum(0.3 , 1.5) // => 0.45
 */
var mulNum = exports.mulNum = function mulNum(a, b) {
  var c = 0,
      d = a.toString(),
      e = b.toString();
  try {
    c += d.split(".")[1].length;
  } catch (f) {}
  try {
    c += e.split(".")[1].length;
  } catch (f) {}
  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  canvasWidth: 300, // canvas宽度
  canvasHeight: 150, // canvas高度
  deviation: 5, // 滑块校验时，允许的偏差范围
  borderWidth: 2, // 拼块白边
  sliderLen: 40, // 滑块边长
  sliderRealLen: 0, // 滑块实际边长
  sliderRadius: 9, // 滑块半径
  classNameHead: 'jigsaw-'
};
config.sliderRealLen = config.sliderLen + config.sliderRadius * 2 + config.borderWidth * 2;

exports.default = config;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(3);

var _number = __webpack_require__(0);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var deviation = _config2.default.deviation,
    borderWidth = _config2.default.borderWidth,
    classNameHead = _config2.default.classNameHead,
    w = _config2.default.canvasWidth,
    h = _config2.default.canvasHeight,
    l = _config2.default.sliderLen,
    L = _config2.default.sliderRealLen,
    r = _config2.default.sliderRadius;

var Jigsaw = function () {
  function Jigsaw(el, _ref) {
    var options = _ref.options,
        onSuccess = _ref.onSuccess,
        onFail = _ref.onFail,
        onRefresh = _ref.onRefresh;

    _classCallCheck(this, Jigsaw);

    Object.assign(el.style, {
      position: 'relative',
      width: w + 'px',
      margin: '0 auto'
    });
    var optionsDefault = {
      images: [],
      sliderText: 'Slide to unlock'
    };
    this.options = Object.assign(optionsDefault, options);
    if (!(0, _utils.isArray)(this.options.images)) this.options.images = [];
    this.el = el;
    this.onSuccess = onSuccess;
    this.onFail = onFail;
    this.onRefresh = onRefresh;

    this.init();
  }

  _createClass(Jigsaw, [{
    key: 'init',
    value: function init() {
      this.initDOM();
      this.initImg();
      this.bindEvents();
    }
  }, {
    key: 'initDOM',
    value: function initDOM() {
      var canvas = (0, _utils.createCanvas)(w, h); // 画布
      canvas.setAttribute('class', classNameHead + 'canvas');
      var block = canvas.cloneNode(true); // 滑块
      var sliderContainer = (0, _utils.createElement)('div', classNameHead + 'sliderContainer');
      var refreshIcon = (0, _utils.createElement)('div', classNameHead + 'refreshIcon');
      var sliderMask = (0, _utils.createElement)('div', classNameHead + 'sliderMask');
      var slider = (0, _utils.createElement)('div', classNameHead + 'slider');
      var sliderIcon = (0, _utils.createElement)('span', classNameHead + 'sliderIcon');
      var text = (0, _utils.createElement)('span', classNameHead + 'sliderText');

      block.className = classNameHead + 'block';
      text.innerHTML = this.options.sliderText;

      var el = this.el;
      el.appendChild(canvas);
      el.appendChild(refreshIcon);
      el.appendChild(block);
      slider.appendChild(sliderIcon);
      sliderMask.appendChild(slider);
      sliderContainer.appendChild(sliderMask);
      sliderContainer.appendChild(text);
      el.appendChild(sliderContainer);

      Object.assign(this, {
        canvas: canvas,
        block: block,
        sliderContainer: sliderContainer,
        refreshIcon: refreshIcon,
        slider: slider,
        sliderMask: sliderMask,
        sliderIcon: sliderIcon,
        text: text,
        canvasCtx: canvas.getContext('2d'),
        blockCtx: block.getContext('2d')
      });
    }
  }, {
    key: 'initImg',
    value: function initImg() {
      var _this = this;

      var img = (0, _utils.createImg)(this.options.images, function () {
        _this.draw();
        _this.canvasCtx.drawImage(img, 0, 0, w, h);
        _this.blockCtx.drawImage(img, 0, 0, w, h);
        var y = _this.y - r * 2 - 1;
        var ImageData = _this.blockCtx.getImageData(_this.x - 3, y, L, L);
        _this.block.width = L;
        _this.blockCtx.putImageData(ImageData, 0, y);
      });
      this.img = img;
    }
  }, {
    key: 'draw',
    value: function draw() {
      // 随机创建滑块的位置
      this.x = (0, _number.randomNum)(L + 10, w - (L + 10));
      this.y = (0, _number.randomNum)(10 + r * 2, h - (L + 10));
      (0, _utils.drawCanvas)(this.canvasCtx, this.x, this.y, 'fill');
      (0, _utils.drawCanvas)(this.blockCtx, this.x, this.y, 'clip');
    }
  }, {
    key: 'clean',
    value: function clean() {
      this.canvasCtx.clearRect(0, 0, w, h);
      this.blockCtx.clearRect(0, 0, w, h);
      this.block.width = w;
    }
  }, {
    key: 'bindEvents',
    value: function bindEvents() {
      var _this2 = this;

      this.el.onselectstart = function () {
        return false;
      };
      this.refreshIcon.onclick = function () {
        _this2.reset();
        typeof _this2.onRefresh === 'function' && _this2.onRefresh();
      };

      var originX = void 0,
          originY = void 0,
          trail = [],
          isMouseDown = false;

      var handleDragStart = function handleDragStart(e) {
        originX = e.clientX || e.touches[0].clientX;
        originY = e.clientY || e.touches[0].clientY;
        isMouseDown = true;
      };

      var handleDragMove = function handleDragMove(e) {
        if (!isMouseDown) return false;
        var eventX = e.clientX || e.touches[0].clientX;
        var eventY = e.clientY || e.touches[0].clientY;
        var moveX = Math.round(eventX - originX);
        var moveY = Math.round(eventY - originY);
        if (moveX < 0 || moveX + l >= w) return false;
        _this2.slider.style.transition = '';
        _this2.slider.style.left = moveX + 'px';
        _this2.block.style.left = L + moveX >= w ? w - L + 'px' : moveX + 'px';

        (0, _utils.addClass)(_this2.sliderContainer, classNameHead + 'sliderContainer_active');
        _this2.sliderMask.style.width = moveX + 'px';
        trail.push(moveY);
      };

      var handleDragEnd = function handleDragEnd(e) {
        if (!isMouseDown) return false;
        isMouseDown = false;
        var eventX = e.clientX || e.changedTouches[0].clientX;
        if (eventX == originX) return false;
        (0, _utils.removeClass)(_this2.sliderContainer, classNameHead + 'sliderContainer_active');
        _this2.trail = trail;

        var _verify = _this2.verify(),
            spliced = _verify.spliced,
            verified = _verify.verified;

        if (spliced) {
          if (verified) {
            (0, _utils.addClass)(_this2.sliderContainer, classNameHead + 'sliderContainer_success');
            typeof _this2.onSuccess === 'function' && _this2.onSuccess();
          } else {
            (0, _utils.addClass)(_this2.sliderContainer, classNameHead + 'sliderContainer_fail');
            _this2.reset();
          }
        } else {
          (0, _utils.addClass)(_this2.sliderContainer, classNameHead + 'sliderContainer_fail');
          typeof _this2.onFail === 'function' && _this2.onFail();
          setTimeout(function () {
            _this2.reset();
          }, 1000);
        }
      };
      this.slider.addEventListener('mousedown', handleDragStart);
      this.slider.addEventListener('touchstart', handleDragStart);
      this.block.addEventListener('mousedown', handleDragStart);
      this.block.addEventListener('touchstart', handleDragStart);
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('touchmove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchend', handleDragEnd);
    }
  }, {
    key: 'verify',
    value: function verify() {
      var arr = this.trail; // 拖动时y轴的移动距离
      var average = arr.reduce(_number.addNum) / arr.length;
      var deviations = arr.map(function (x) {
        return x - average;
      });
      var stddev = Math.sqrt(deviations.map(_number.mulNum).reduce(_number.addNum) / arr.length);
      var left = Math.round(parseFloat(this.block.style.left));
      return {
        spliced: Math.abs(left + borderWidth * 2 - this.x) <= deviation,
        verified: stddev !== 0 // 简单验证下拖动轨迹，为零时表示Y轴上下没有波动，可能非人为操作
      };
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.sliderContainer.className = classNameHead + 'sliderContainer';
      this.slider.style.left = 0;
      this.block.style.left = 0;
      this.slider.style.transition = 'left 0.3s';
      this.sliderMask.style.width = 0;
      this.clean();
      this.img.setSrc((0, _utils.getRandomImgSrc)(this.options.images));
    }
  }]);

  return Jigsaw;
}();

window.Jigsaw = Jigsaw;
exports.default = Jigsaw;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = undefined;
exports.createCanvas = createCanvas;
exports.createImg = createImg;
exports.createElement = createElement;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.getRandomImgSrc = getRandomImgSrc;
exports.drawCanvas = drawCanvas;

var _number = __webpack_require__(0);

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var borderWidth = _config2.default.borderWidth,
    l = _config2.default.sliderLen,
    r = _config2.default.sliderRadius;
var isArray = exports.isArray = function isArray(value) {
  return Object.prototype.toString.call(value) == '[object Array]';
};

function createCanvas(width, height) {
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function createImg(images, onload) {
  var errCount = 0;
  var isIE = window.navigator.userAgent.indexOf('Trident') > -1;
  var img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = onload;
  img.onerror = function () {
    if (errCount <= 3) {
      errCount += 1;
      img.setSrc(getRandomImgSrc(images));
    }
  };

  img.setSrc = function (src) {
    if (isIE) {
      // IE浏览器无法通过img.crossOrigin跨域，使用ajax获取图片blob然后转为dataURL显示
      var xhr = new XMLHttpRequest();
      xhr.onloadend = function (e) {
        var file = new FileReader(); // FileReader仅支持IE10+
        file.readAsDataURL(e.target.response);
        file.onloadend = function (e) {
          img.src = e.target.result;
        };
      };
      xhr.open('GET', src);
      xhr.responseType = 'blob';
      xhr.send();
    } else {
      img.src = src;
    }
  };

  img.setSrc(getRandomImgSrc(images));
  return img;
}

function createElement(tagName, className) {
  var elment = document.createElement(tagName);
  elment.className = className;
  return elment;
}

function addClass(tag, className) {
  tag.classList.add(className);
}

function removeClass(tag, className) {
  tag.classList.remove(className);
}

function getRandomImgSrc(images) {
  // '//picsum.photos/300/150/?image=' + randomNum(0, 1084)
  if (!images.length) return __webpack_require__(4).default;
  var idx = (0, _number.randomNum)(0, images.length - 1);
  return images[idx];
}

function drawCanvas(ctx, x, y, operation) {
  var PI = Math.PI;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
  ctx.lineTo(x + l, y);
  ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
  ctx.lineTo(x + l, y + l);
  ctx.lineTo(x, y + l);
  ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
  ctx.lineTo(x, y);
  ctx.lineWidth = borderWidth;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.stroke();
  ctx[operation]();
  ctx.globalCompositeOperation = 'destination-over';
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAMAAABThUXgAAAAOVBMVEXMzMyGhobJycm3t7d5eXltbW2+vr5mZmbDw8NpaWmAgICZmZlycnKurq6ysrKSkpKpqamOjo6kpKQuW26QAAAC20lEQVR42u3Z22rrMBAF0NF16+br/3/swVTGCmUKeQhEh72e1DHMpLtSYqdCREREREREREREREREREREREREREREREREREREREREREREREQ0jVRLy6Edq4zWzYcc/NarWlmXCkShdJvAGaqzNtYMY+UWC/yebNo9ShStrEuuBmD4GQOl2wS2FvtLzyjSuYDtvo7g/iijG9bj6rZioHT7fsuTUAXOvg8CjNwMQtLLdvEATnuVTgD+TPLjJawTA63b1yto0kXcwRnkKLeYYf4qpwZ4uexAldtrWNt4Rev29TKydBZ9HQEjDwNErXxx+AnJNlRRwipY5KF1+3YNYQxrOI/jEapquV/ITuRAES2sNkahDvl2NZzSpfs4FcDJwwFFL/cr3q4IUQvLIstDHTKR5f7jNiDJIwFNK/dlAI6GXbSwHLw81CETMWhJLhmw8rBAVspDzoARNaz95aI6ZB4LWpS3w+o2AE4Pq6LupuXczPIfhGXdFrYk8vYx7A4A3qphGcCf0aazwcfJjyEA5Oqke/sNXna0BhxqWB6HlUvyCHH6N/jktuwXef/W4ZIC1hXAroVVzHD36dUhE1nul+8A8+tDXin3ZRXZgBCVsAYHsGvdZnIg9yPSF+NTkF6WCm9FrO+Vv8NaAaN1m2xrHb+f1EzfMGp5vXde1p4NRwloSrepRKD12DJqL27Ii1y08pp7xFIBrE8z5WABWek2k/Fex3mU/r1c/6xXyrFmoKRrmU4A+bzWNu4eQDudfWPIhGF1y+EDgj8Wuahl/BiW6MtO3b6v3WZQc335PfznHta7BTAypzA+ZOzA9pkhQcYHo13mlMewCnL89BAb4GVSBn7cWPXjQw5kJ5OKwdvnvmD70JBWpKvIi0wrlladlbQYtEU+JBV/Riv9H4QzWw+fEfyxf3hIuIasQkRERERERERERERERERERERERERERERERERERERERERERERE3+kfwW4iZutz7e0AAAAASUVORK5CYII=");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(6);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(10)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Imports
var getUrl = __webpack_require__(8);
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(9));
// Module
exports.push([module.i, "\nhtml {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-touch-callout: none;\n}\n\n.jigsaw-block {\n  position: absolute;\n  left: 0;\n  top: 0;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.jigsaw-block:active {\n  cursor: pointer;\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.jigsaw-sliderContainer {\n  position: relative;\n  text-align: center;\n  width: 300px;\n  height: 38px;\n  line-height: 38px;\n  margin-top: 15px;\n  background: #f7f9fa;\n  color: #45494c;\n  border: 1px solid #e4e7eb;\n}\n.jigsaw-sliderContainer, .jigsaw-sliderContainer * {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n}\n \n.jigsaw-sliderContainer_active .jigsaw-slider {\n  height: 38px;\n  top: -1px;\n  border: 1px solid #1991FA;\n}\n\n.jigsaw-sliderContainer_active .jigsaw-sliderMask {\n  height: 38px;\n  border-width: 1px;\n}\n\n.jigsaw-sliderContainer_success .jigsaw-slider {\n  height: 38px;\n  top: -1px;\n  border: 1px solid #52CCBA;\n  background-color: #52CCBA !important;\n}\n\n.jigsaw-sliderContainer_success .jigsaw-sliderMask {\n  height: 38px;\n  border: 1px solid #52CCBA;\n  background-color: #D2F4EF;\n}\n\n.jigsaw-sliderContainer_success .jigsaw-sliderIcon {\n  background-position: 0 -13px !important;\n}\n\n.jigsaw-sliderContainer_fail .jigsaw-slider {\n  height: 38px;\n  top: -1px;\n  border: 1px solid #f57a7a;\n  background-color: #f57a7a !important;\n}\n\n.jigsaw-sliderContainer_fail .jigsaw-sliderMask {\n  height: 38px;\n  border: 1px solid #f57a7a;\n  background-color: #fce1e1;\n}\n\n.jigsaw-sliderContainer_fail .jigsaw-sliderIcon {\n  top: 14px;\n  background-position: 0 -67px !important;\n}\n.jigsaw-sliderContainer_active .jigsaw-sliderText, .jigsaw-sliderContainer_success .jigsaw-sliderText, .jigsaw-sliderContainer_fail .jigsaw-sliderText {\n  display: none;\n}\n\n.jigsaw-sliderMask {\n  position: absolute;\n  left: -1px;\n  top: -1px;\n  height: 100%;\n  border: 0 solid #1991FA;\n  background: #D1E9FE;\n}\n\n.jigsaw-slider {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n          box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\n  -webkit-transition: background .2s linear;\n  transition: background .2s linear;\n  cursor: pointer;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.jigsaw-slider:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.jigsaw-slider:hover {\n  background: #1991FA;\n}\n\n.jigsaw-slider:hover .jigsaw-sliderIcon {\n  background-position: 0 0;\n}\n\n.jigsaw-sliderIcon {\n  position: absolute;\n  top: 15px;\n  left: 13px;\n  width: 14px;\n  height: 12px;\n  background: url(" + ___CSS_LOADER_URL___0___ + ") 0 -26px;\n  background-size: 32px 544px;;\n}\n\n.jigsaw-refreshIcon {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  outline: none;\n  background: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: 0 -299px;\n  background-size: 32px 544px;\n}\n\n.jigsaw-canvas, .jigsaw-sliderContainer, .jigsaw-sliderContainer .jigsaw-sliderMask, .jigsaw-slider {\n  border-radius: 2px;\n}", ""]);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("./img/icon_light.png");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ })
/******/ ]);
});