/*
 * This file is part of the Symfony package.
 *
 * (c) Fabien Potencier <fabien@symfony.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stimulus = require("stimulus");

var _swup = _interopRequireDefault(require("swup"));

var _debugPlugin = _interopRequireDefault(require("@swup/debug-plugin"));

var _formsPlugin = _interopRequireDefault(require("@swup/forms-plugin"));

var _fadeTheme = _interopRequireDefault(require("@swup/fade-theme"));

var _slideTheme = _interopRequireDefault(require("@swup/slide-theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      var _this$element$getAttr;

      var dataContainers = ((_this$element$getAttr = this.element.getAttribute('data-containers')) === null || _this$element$getAttr === void 0 ? void 0 : _this$element$getAttr.split(' ')) || [];
      var mainElement = this.element.getAttribute('data-main-element') || dataContainers[0] || '#swup';
      var allElements = [mainElement].concat(dataContainers);
      var containersList = allElements.filter(function (item, index) {
        return allElements.indexOf(item) === index;
      });
      var options = {
        containers: containersList,
        cache: this.element.hasAttribute('data-cache'),
        animateHistoryBrowsing: this.element.hasAttribute('data-animate-history-browsing'),
        plugins: ['slide' === this.element.getAttribute('data-theme') ? new _slideTheme["default"]({
          mainElement: mainElement
        }) : new _fadeTheme["default"]({
          mainElement: mainElement
        }), new _formsPlugin["default"]()]
      };

      if (this.element.getAttribute('data-link-selector')) {
        options.linkSelector = this.element.getAttribute('data-link-selector');
      }

      if (this.element.getAttribute('data-animation-selector')) {
        options.animationSelector = this.element.getAttribute('data-animation-selector');
      }

      if (this.element.hasAttribute('data-debug')) {
        options.plugins.push(new _debugPlugin["default"]());
      }

      var swup = new _swup["default"](options);

      this._dispatchEvent('swup:connect', {
        swup: swup,
        options: options
      });
    }
  }, {
    key: "_dispatchEvent",
    value: function _dispatchEvent(name) {
      var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var canBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var userEvent = document.createEvent('CustomEvent');
      userEvent.initCustomEvent(name, canBubble, cancelable, payload);
      this.element.dispatchEvent(userEvent);
    }
  }]);

  return _default;
}(_stimulus.Controller);

exports["default"] = _default;