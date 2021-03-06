
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
  classNameHead: 'jigsaw'
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

var H5Verfity = function () {
  function H5Verfity(el, _ref) {
    var images = _ref.images,
        sliderText = _ref.sliderText,
        onSuccess = _ref.onSuccess,
        onFail = _ref.onFail,
        onRefresh = _ref.onRefresh;

    _classCallCheck(this, H5Verfity);

    Object.assign(el.style, {
      position: 'relative',
      width: w + 'px',
      margin: '0 auto'
    });
    if (!(0, _utils.isArray)(images)) images = [];
    var options = {
      images: images,
      sliderText: sliderText || 'Slide to unlock'
    };
    this.options = options;
    this.el = el;
    this.onSuccess = onSuccess;
    this.onFail = onFail;
    this.onRefresh = onRefresh;

    this.init();
  }

  _createClass(H5Verfity, [{
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
      canvas.setAttribute('class', classNameHead + '-canvas');
      var block = canvas.cloneNode(true); // 滑块
      var sliderContainer = (0, _utils.createElement)('div', classNameHead + '-wrapper');
      var refreshIcon = (0, _utils.createElement)('div', classNameHead + '-refreshIcon');
      var sliderMask = (0, _utils.createElement)('div', classNameHead + '-sliderMask');
      var slider = (0, _utils.createElement)('div', classNameHead + '-slider');
      var sliderIcon = (0, _utils.createElement)('span', classNameHead + '-sliderIcon');
      var text = (0, _utils.createElement)('span', classNameHead + '-sliderText');

      (0, _utils.addClass)(block, classNameHead + '-block');
      text.innerHTML = this.options.sliderText;

      var el = this.el;
      (0, _utils.addClass)(el, classNameHead + '-container');
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
        if (moveX < 0 || moveX + l > w) return false;
        _this2.slider.style.transition = '';
        _this2.slider.style.left = moveX + 'px';
        _this2.block.style.left = L + moveX >= w ? w - L + 'px' : moveX + 'px';

        (0, _utils.addClass)(_this2.sliderContainer, classNameHead + '--moving');
        _this2.sliderMask.style.width = moveX + 40 + 'px';
        trail.push(moveY);
      };

      var handleDragEnd = function handleDragEnd(e) {
        if (!isMouseDown) return false;
        isMouseDown = false;
        var eventX = e.clientX || e.changedTouches[0].clientX;
        if (eventX == originX) return false;
        (0, _utils.removeClass)(_this2.sliderContainer, classNameHead + '--moving');
        _this2.trail = trail;

        var _verify = _this2.verify(),
            spliced = _verify.spliced,
            verified = _verify.verified;

        if (spliced) {
          if (verified) {
            (0, _utils.addClass)(_this2.sliderContainer, classNameHead + '--success');
            typeof _this2.onSuccess === 'function' && _this2.onSuccess();
          } else {
            (0, _utils.addClass)(_this2.sliderContainer, classNameHead + '--error');
            _this2.reset();
          }
        } else {
          (0, _utils.addClass)(_this2.sliderContainer, classNameHead + '--error');
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
      this.sliderContainer.className = classNameHead + '-wrapper';
      this.slider.style.left = 0;
      this.block.style.left = 0;
      this.slider.style.transition = 'left 0.3s';
      this.sliderMask.style.width = 0;
      this.clean();
      this.img.setSrc((0, _utils.getRandomImgSrc)(this.options.images));
    }
  }]);

  return H5Verfity;
}();

window.H5Verfity = H5Verfity;
exports.default = H5Verfity;

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
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.toggleClass = toggleClass;
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

function hasClass(obj, cls) {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
  if (!hasClass(obj, cls)) {
    if (obj.className) obj.className += ' ';
    obj.className += cls;
  }
}

function removeClass(obj, cls) {
  if (hasClass(obj, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    obj.className = obj.className.replace(reg, ' ');
  }
}

function toggleClass(obj, cls) {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls);
  } else {
    addClass(obj, cls);
  }
}

// export function addClass (tag, className) {
//   tag.classList.add(className)
// }

// export function removeClass (tag, className) {
//   tag.classList.remove(className)
// }

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
content = content.__esModule ? content.default : content;

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

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(8);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".jigsaw-container{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:0}.jigsaw-container,.jigsaw-container:before,.jigsaw-container:after,.jigsaw-container *,.jigsaw-container *:before,.jigsaw-container *:after{-webkit-box-sizing:border-box;box-sizing:border-box}.jigsaw-container .jigsaw-canvas,.jigsaw-container .jigsaw-wrapper,.jigsaw-container .jigsaw-slider{border-radius:2px}.jigsaw-container .jigsaw-block{position:absolute;left:0;top:0;cursor:-webkit-grab;cursor:grab}.jigsaw-container .jigsaw-block:active{cursor:-webkit-grabbing;cursor:grabbing}.jigsaw-container .jigsaw-sliderMask{position:absolute;left:0;top:0;width:40px;height:100%;border-radius:2px}.jigsaw-container .jigsaw-sliderText{font-size:14px}.jigsaw-container .jigsaw-slider{position:absolute;top:0;left:0;width:40px;height:40px;background:#fff;-webkit-box-shadow:0 0 3px rgba(0,0,0,.3);box-shadow:0 0 3px rgba(0,0,0,.3);-webkit-transition:background .2s linear;transition:background .2s linear;cursor:-webkit-grab;cursor:grab}.jigsaw-container .jigsaw-slider:active{cursor:-webkit-grabbing;cursor:grabbing}.jigsaw-container .jigsaw-sliderIcon{position:absolute;top:15px;left:13px;width:14px;height:12px;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") 0 -26px;background-size:32px 544px}.jigsaw-container .jigsaw-refreshIcon{position:absolute;right:0;top:0;width:30px;height:30px;cursor:pointer;outline:none;background:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");background-position:0 -299px;background-size:32px 544px}.jigsaw-container .jigsaw-wrapper{position:relative;text-align:center;width:300px;height:40px;line-height:40px;margin-top:15px;background:#f7f9fa;color:#45494c;-webkit-box-shadow:0 0 0 1px #e4e7eb;box-shadow:0 0 0 1px #e4e7eb}.jigsaw-container .jigsaw-wrapper.jigsaw--moving .jigsaw-sliderText,.jigsaw-container .jigsaw-wrapper.jigsaw--error .jigsaw-sliderText,.jigsaw-container .jigsaw-wrapper.jigsaw--success .jigsaw-sliderText{display:none}.jigsaw-container .jigsaw-wrapper.jigsaw--moving .jigsaw-slider{background-color:#1991fa}.jigsaw-container .jigsaw-wrapper.jigsaw--moving .jigsaw-slider .jigsaw-sliderIcon{background-position:0 0}.jigsaw-container .jigsaw-wrapper.jigsaw--moving .jigsaw-sliderMask{-webkit-box-shadow:0 0 0 1px #1991fa;box-shadow:0 0 0 1px #1991fa;background:#d1e9fe}.jigsaw-container .jigsaw-wrapper.jigsaw--success .jigsaw-slider{background-color:#52ccba}.jigsaw-container .jigsaw-wrapper.jigsaw--success .jigsaw-sliderMask{background-color:#d2f4ef;-webkit-box-shadow:0 0 0 1px #52ccba;box-shadow:0 0 0 1px #52ccba}.jigsaw-container .jigsaw-wrapper.jigsaw--success .jigsaw-sliderIcon{background-position:0 -13px}.jigsaw-container .jigsaw-wrapper.jigsaw--error .jigsaw-slider{background-color:#f57a7a}.jigsaw-container .jigsaw-wrapper.jigsaw--error .jigsaw-sliderMask{background-color:#fce1e1;-webkit-box-shadow:0 0 0 1px #f57a7a;box-shadow:0 0 0 1px #f57a7a}.jigsaw-container .jigsaw-wrapper.jigsaw--error .jigsaw-sliderIcon{top:14px;background-position:0 -67px}", ""]);
// Exports
module.exports = exports;


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
        return "@media ".concat(item[2], " {").concat(content, "}");
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

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
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


  url = url && url.__esModule ? url.default : url;

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
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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ampqampqampqKkiw6wQ7JtkNgp0r6C8oCUqCwSUlSUnSX7KLBDtHUBYQlAQEBARlQUlSlpCQkJQkJGXJThbsmKAsICAgICIgICAiGFxChoSEhAwJCQlJWbKTBNsvKAkICAiIiIiIiIgICAj6S0hIyJAhQ4YMGRISEpKSZCcIRi4oCwiIiIjIIYeI3Je//OWJJ5988tv222+/19XV1U3M5XIT8/n8BJsVCoV1xWKxq7e3t+upp56664YbbvjxWWed1YUiMhRRRIYMGRKSsmQHBCMTlAQEBERE5JBDvqWlZcy3vvWt08aNG/eu+vr6VyEYntTT03PfE088cf0//MM/XLls2bINKKCIIjJkSEhISpLtFAxfUBIQEJBDRB75iRMn5u+44473TJ48+RO5XO4gO6BYLK555JFHLjz22GOv6erqKqCAAjIUkZCQlCTbIRi+gICAgBxyyCO/ZMmSyaeddtoV9fX1r7QT9fT0rLjyyitnn3HGGY+ggAKKKCIhISHZDsHwBCURATnkkEfd7bff/obNrogxHmCg7Pnnn79vzZo1tz700EMPPPzww0/cdNNNj9vspJNOGj9t2rTxhx122OFNTU3H77XXXq9C9FeyLHvyzjvvnP2mN73pTvSigCKKSMiUJCMUbFtQEhCRQw551D/88MP/Y9q0aV9GvT5SSptWr179H+edd94Vmz2FZHBBSfjgBz+4/2c+85nTJk2a9PchhFH66+no6DjrsMMO+x56UEARRWRISpIRyNm2gICAHHKoQ91tt932xqOPPvoK1OvjqaeeumXBggVnvPvd7/7Jfffd9zwyJCQkJCUJyRYrVqzovuSSS37+/PPP33DMMcc0jhkz5qXKcgcccMAJLS0td1155ZVrlSQlyXbK2bqgJCIihzrULV68eMq73vWu74YQ9lGWVq5ceclBBx302TvvvPNZZCgiISEpSfpLSErSnXfe+dxFF130k/e///2F/fff/7UISnKTJk1668SJE5feeOONzypJyhKCEQi2LiAgIoc86seNGzdqzZo1P6mvr3+lsvTzn//8nDe84Q1LkaGITFm46667Zk6bNu2kMWPGvLS+vv6lWZZt2LRp0yPPPPPMrz/72c9eftlllz2FgICAeMcdd/ztG9/4xosRbNHT07PioIMOOvGJJ57YhB4UUESGhGSYcoYWlERE5JBH3b333vveCRMmnKaPlStXXjJ9+vRvo4ACisiQPve5zx34gx/8YFFzc/PHR48e/fJ8Pj8xhDAqxrhXXV3dS/bZZ5+jTjrppPe+5z3vWf/Vr371N0hINrviiit+94EPfCDbb7/9XmeLXC438R3veMfqr3zlKw8gISEpSQiGKdq6gICIHPLHHntswyGHHHKuPv70pz/dfOihhy5GAQUUUER25pln7vvJT37y2n322edE/fXqI4Qw9mUve9nnb7755mNQRAEFFA899NDFf/rTn27WxyGHHHLuscce24A8cogICEYg2rqAgIgcclddddUHc7ncQbZIKW26+OKLP4cCetGLAopICxYsOCeXy02xxeOPP/6/v/CFLxw/evTol7/vfe979e9///uLUFCSmzFjxiIkZCiigMLChQvPTyltskUulzvoqquu+iByyCEiIBiBaHBBWURERG7ixInv0sfatWu/df75569FAQUUkSG99rWvrXvxi1/8Pls8/fTTN06YMOFfPvWpTz26adMmV1999dOHHHJIa2dn5zdtUVdXN+nCCy+ciAxFFFC44IIL1m72LX1MnDjxncghIiIqC4YhGlpAQEBE7vzzz28cNWrUK5VlF1xwwddQQAEFFJEhXXzxxUeGEBpscc8993wbGTJkSDa7++67/48+WlpaXo6EIoooonDBBRd8DZktRo0aNf0zn/nMgcghIiAgGKZo6wICIuIpp5zyNwi26O7uvnfx4sVPoogCiigiQxo/fvwEfdx9991/QBFFZMiQNmzY0KOPlFKGhAxFFFFcvHjxk93d3fcqC+973/v+BhERAcEIREMLCAiIiOPGjXuNPjo7O/8TRRRRRBEZMmSbNm162hZZlj25aNGiNSgiQxEJ6dhjj23Rx/333/8IEjIUUUSGYmdn5636GDdu3GsREREQEAxTtHUBEQGxrq5uoj5Wrlx5PzJkyJAhQ4bsiCOOWL5mzZqzn3vuuasffPDBjz311FMFFJEhIV133XVHHnTQQf9oi56ent+ceeaZq5AhQ4YiishWrlz5a33U1dVNRERARDACeUMLSgICQl1d3Xh9rFy5ch0yZMiQISHYYtKkSd/CVQgICEpCW1vb69/ylrd8LYQwSkl27733fqG7u7uIDBmSkgzZypUr1+mjrq5uPAICgpJgmKLhCTbL5/MT9HHTTTd1ISEhISEhQxFFFFBAERmS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gICIgICAiGBwCRkSEhIyJCQkJGXJThJsv6AkICAgICIiIiIiIiAg6C8hISFDhgwZMmRISEhISpKdIBi5oCwgICIiIoccInLz58/f58Mf/vC0CRMmTK6vrx+bz+fHxhjH2izLsmcLhcKzPT09z65bt+6Ryy+/vOOLX/zin1FEhiKKyJAhQ0JSluyAYGSCkoCAgIiIHHLIv/rVr66/+uqrjznooINeWV9f32QEenp6/rhmzZoV733ve395zz339KCAIorIkCEhISlJtlMwfEFJQEBADhF55CdOnJi/5ZZbXnn44YfPjDG+2A7IsuxPDzzwwK0nnHDCiq6urgIKKCBDEQkJSUmyHYLhCwgICMj5/9mDEyg9y8Jg2Nd9P8/7ZrIQWWQNCQkxJBAMsgQjWmUJIAr9EA2LohbrylLliC3VusD/11KtCkVRKSLVYLUIFFRQiCCLIMhSFAghkpAgQhQ0kpBM5n2e+/7mnGfOmQmQZGYI/c5pcl0UKFF+5jOf2frv//7vT2i32zvbiHp6en77T//0T//xmc985o+oUKFGjYyMjGwYgsEJGhEBBQqUaP3whz+ceMQRR7w9xjjG8+VVq1Ytffjhhxfeddddf7j//vufvfHGG1frddBBB43cc889R++3337b7rbbblNGjRo1AcFzpJRWXnvttd858sgjH0UHFWrUyEga2RAFGxY0AiIKFCjRvvvuu2fss88+b0NhbdWjjz565ymnnHLfNddcsxrZCwsa4U1velPXV77ylb0mTpy4P0prq++5557v77vvvr9CDyrUqJGQNbIhKGxYQEBAgQIttK666qpJBx544DtQGGD58uUPfuADH7jyPe95zyMLFy7sQUJGRkbWyMj6LFy4sHPeeec9vnDhwgcOOeSQkV1dXdvqF3fcccfd99lnn8Xf/e53n9HIGtkwFdYvaEREFGih9Q//8A/bfOADHzgphNBlgPnz5984YcKEW+677741SKiRkZE1srVlZI3861//uvPP//zPjxx33HHd22677ST94pQpU6amlB64+eab12hk/TKCIQjWLyAgokCJ9nbbbdd+7LHH3t9ut3c2wHXXXfdfhx9++EIk1Ej6heuvv37Xfffdd9ro0aNf3m63t00p9fR6utfvTjnllLuuuuqq1QgICIg/+clPJh922GFHG6Cnp+e348ePv/D3v/99D3pQoUZC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2RAVBi9oBEREFCjRmjx58ohHHnnks1OmTPmXoijGeb7U09OzZM2aNQtWrlx5b3d39yNYHWNsxRhHeo6iKHbcbbfd3nHyySeP+fnPf37vb3/7W73Ks84661P6hBC2OOuss76AhIyMjGyQSoMTNAICIgoUaH3sYx/b+qyzzrp45MiRr/ccK1asuHnx4sU//vrXvz7vggsueFojawS95syZM/bTn/70UZMnTz6uq6trun7ldtttd/K8efP2feMb3/j+W265pdvzFSiQEBAMQWnwAgIiIgq0Tj/99G3+8R//8ZpWqzXFAKtWrfrlj370o88de+yx9yAhISPrF/S67LLL/nTZZZfNxXcuvfTSPY8++uhPjRo1ah99Ro0a9eprrrnm4sMOO+xkz1eiRoWgEZANQmHDgkZARIESrUmTJo24/PLL544YMWIf/eoFCxb840477fQPl1122eOoUKFCjRoVatRIyMh6XXHFFX+48MIL/2vOnDm22mqrfRH1arfbO73tbW+b2dXVtYMBzjrrrHNRo0aNhIxsEAobFhAQEVGihdYjjzzy2bFjx75Fn5TSiuuvv/6Ds2bNugo1OqhQoUKFCjVqJGQkZI24atWqcN555909bdq0e6ZPn/7GEEKpV1dX1w6e46yzzjoPFWokJGRkgxCtX9AICIgoUN50000HbL311u/Vr77hhhtOPfzww29GBz3oQQ960IMe9KAHHXTQQYUaNRIywgknnHDPj370o08hW7eAYJiiDQsIiChQoth///0/aYAFCxZ89tBDD70ZHXTQgx70oAcdVKhQoYMKFWrUSEj6haOOOupnd95551e8REqDExARUfz6178+squraz99Vq1a9ctp06Z9ExU66KCDCgkJGRlZI+iXkB955JG3TZw48ewY4zYGLyMjIxui0roFjYCAgALF5MmT/9oAP/nJT85BhQoddFChRkJC9nxZnyOOOKK16667/gtGGpqEhGwYSusXEBBQoDj11FO3Gjly5P76rFix4uZjjjnmHtSoUKFCjRoZWSNrBBtBXddPoEZCRtbIBinasICIgHjqqacehlKfpUuXXoMaNWrUSEjIyBrZelx77bWdRx999KMppacNQl3XT9x5551nokZCQkY2BKX1CwgIiIg77LDD6/VLF1544TzUqFGjRkJC1sjWLSMjTZo06T9xJVooUaBAQEBGQo0O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KXWnlP7c3d297Mknn1z8yU9+cv53v/vdVaiRkJCsLeiXkZCQNLIhCIYuaAQEREQUKFCiuPvuu3efPn36rBEjRuyKaHCq1atXz3/ooYd+9aY3vWn+k08+WSMha4T7779/yvTp09+m14IFCy6bNm3afCTUSEjIyAahNDRBIyAiIqJAifLHP/7xLgcddNAb2+32LoauHDly5Cv33nvvVy5ZsuSx73znO1eddNJJv0fWCLvvvvscvEyvqVOnzsE/oUJGNkSlwQsaARERBQqUO+ywQ+v+++8/YptttnmtF5arqnq6qqoVq1evXhFCiF1dXVu12+0tY4yjPUe73R7/V3/1Vycffvjhtx588ME/f+ihh2qEGOPL9NsSJRIiEgKyQSoNTtAICIgoUKB1/PHHj7nkkkuOHTFixG6e49lnn334gQceWHDOOec8euWVV67SyBpBr9e//vUjzj333CnTp09/VbvdHqdf3HHHHV9/7733jp85c+ZV999/f+35ChRICAiGoDR4AQEREQVaxx9//JhLL730fTHG7Q3Q3d396MUXX3zTKaec8iQSEjKyfkGvm2++ud5nn31+jQe+8IUvbHvyyScf0tXVNUGfrq6uSXfcccdbZs6cea3nK1GjQtAIyAYh2LCgERBRoERr++23by9ZsuSdI0aM2E2/fN999/3kVa961X1IqFEjISMjawQEFIgoUIwdO7a46667Zk6ZMuX1CPqsXLly6ZgxYyYYIITw/6Mba9CDCgnJIBQ2LCAgIqJEC60lS5YcscUWW+ytT0qp+/vf//5lhxxyyALU6KBChQoVKtSokZCRkDXimjVr4vnnn7/s5S9/+dL9999/Kgq92u32yzzHWWeddSsq1EhIyMgGIVq/oBEQEFGgvOqqqyZus802r9UvX3755Vcce+yxS9FBD3rQgx70oAc96EEHHXRQoUaNhIxw2mmnPTV37tzrrF9AMEzRhgUERBQoUbzxjW88zAC//vWvf3zssccuQQcd9KAHPehBBxUqVOigQoUaNRKSfuGd73znEzfddNOtXiKlwQmIiChuu+223dvt9i76dHd3Pzpjxoz7UKGDDjqokJCQkZE1gn4J+aGHHtpzypQpR8YYRxu8jIyMbIhK6xY0AgICChT77LPP/gaYO3fujahQoYMOKtRISMieL+vzmte8Jk6dOvUYtAxNQkI2DKX1CwgIKFDMmTNn1IgRI3bV59lnn334fe9735OoUaFChRo1MrJG1gieo67rYIhSSn9GjYSMrJENUrRhAREB8eMf//grEPV54IEHFqBGjRo1EhIyska2HnfeeWe9YMGCK1JKzxqElNKfr7/++h+gRkJCRjYEpfULCAiIiJMmTZqsX/7iF7/4CGrUqFEjISFrZOuWkZGmTZt2Hx5ECyUKFAgIyEio0UEHFWokZENU2rCAgIDQbrdfpk9VVU9/73vfexYJCQkZGVkjW7eMjISEGgEZNQpEBARkJCRUqFAhISMjG4LS+gWNgIjQarXG6lNV1QpkZCQkZGSNbN2yRkZCrZFRo0BAREDQyEhIqFAjIRuG0uAEjVCW5Rb6rF69egUyMjIyMrLBy0gaGQkRFSICIoJGQEZCQkZGRjZEpQ0LGsG6Zf2yRrZuGQFZv4SMhICAiICIiKjXz3/+813a7XaYOXPmI/oFwxANUVVVK/QZOXLkFoYva2QkJCTUqFGjQo2EhPzkk0/+xQEHHPCh/fbb74N/+tOfZiMiaARDFG1Y1sh6dTqdZ/Qpy3ILjaBf0Ag2LOuXkZCQkJCRNQLiNttss48+Y8aM2R0REcEwRIOTNXJ3d/ef9SnLcpt3vetdoxAQEBAQDF5GRkZGRkZGRkBA8dGPfnSLsix31Gf16tVPICIgIBiiaP2yRkZCXtRLv3D66ae/AgEREQFBIxi6oBEQEVGgeMc73vEKAyxevHgJIgKCYYg2LCMjI5999tmLkPSZMmXK7oiIiAgICBrB4AWNgICIAiXKadOm7WOAf//3f38MAcEwReuXkZGRkK6++urVvRbrM3r06N3mzp07DgUKFIiICBrBhgWNgIgCBQoUF1100Y4jR458hT6rV69+5Itf/OJKZGRkZEMUbVhGQkZCuvPOO39pgLe+9a2zUaBAgYiIgKARrFvQCAgIiChQjho1qnz7298+2wA/+9nP7kBGRkY2DNH6ZWRk1KiRDjzwwN90d3cv1aerq2viQw89tB9KlChRoEBE0AgICAgICBoBEQVKlChR3nPPPTNHjhz5Cn2qqlr21re+9REkJCRkZGRDEK1b1sjIyKhRo7788st/aoCpU6e+6ZprrpmMFlooUaBAgQIRAQEBARERBQoUKNFC6+qrr544derUw/TL3/ve965ZvXp1Qo2EjIyskQ1SYf0CAgICAgLCFVdc8ewHP/jB9pgxY8ZrhClTpux2wAEHPDF37tw/awQEjYCAgICAiIgCESVKtND6r//6r4l/+Zd/eSJa+jz++OO3ve51r7sPFSpUqJGQDVFh/YJG0C8gIl588cVLTz311J3a7fbWGq3JkyfvdeKJJ646//zzlyEgIiIiIKJAgYgCJUq00Bo9enTrwQcfnHXAAQccg5Y+3d3djx1wwAE/fPrppzvooIMaNTKyISpsWNAIGgFBr+7u7vDLX/5y0QknnPCKGONojbD11lvv9vGPf3zijBkznr7sssueRURERIECBQqUKFGi9e1vf3v8N7/5zaO33377VyPq09PT89s3vvGN37377ru70UGFCjUyskY2BMGGBY2AiAIlWmihfeihh4668sorjx49evQrPMfq1asXLF68+MEvf/nLD3/1q199FhlZIyB86EMfGv3+979/8tSpU2eMHDlyN8/R3d392Fvf+tb/vOaaa55FBz3ooEKNhKyRDUEwOAEBAREFSrTQQmvLLbcs58+ff9AOO+zwGi8sp5SeqqpqRXd394rcq91uj2m1WmPLstzOOjz++OO37rfffrc8+eSTHXTQQQcVaiRkZGRDFAxO0AgIKFCgQAslWigvvvjinU844YSDurq6JngRenp6fnf11VffMGfOnCWoUKGDChVq1MjIGtkQBYMXNAIiIgoUKFGi5f+yBy9QVtaHoeh///+3Z4CBgRkeCltgRgggqWYlgsYXFYvImFpTU5PVNCZFg5iYcyavk3vuTdMsb2t6nycme9VHklqTcxptjI2aJlXjozGinqrYLhrlFcjgY1Seo8AI7Nnfd+ka1pq9ldfeswfQy+9HguQXv/jFe84777w5I0aMOBnRYdq1a1fXQw899OQf/MEf/BYllFBEH/pQQgkpUmT6ZWoQVCfoFxAREZEghxxySJAgdnR0DP/a17427ZRTTjm5qampuaGhYXQul2tG6Ovr29HX17dj586d21atWvXbb3/72xt+/OMf70SKEkroQx/6UEKKFCky/TI1CqoX9AsIiIhIkCCHBAkiIiICAoJKGTJkSJEiRQkl9KGEElKkyJDplxmEoDZBv4CAgIiIBBEJEkREBAQElTJkyJAiRQklpCghRYoMGTL9MoMU1C7oF/SLCIiICEgQEBEQ9Qv6ZfplSJEiQ4oUKVJkSPXL9MvUQTA4wYCAgICAgICI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");

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