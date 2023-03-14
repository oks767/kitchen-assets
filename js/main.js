/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/js/components/component.js':
      /*!****************************************!*\
  !*** ./src/js/components/component.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Component,
          /* harmony export */
        });
        /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! jquery */ './node_modules/jquery/dist/jquery.js'
          );
        /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            jquery__WEBPACK_IMPORTED_MODULE_0__
          );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, 'prototype', { writable: false });
          return Constructor;
        }

        //export default class Component extends Emitter {

        var Component = /*#__PURE__*/ (function () {
          function Component() {
            _classCallCheck(this, Component);

            //super();
            if (arguments.length === 2) {
              this.root = arguments.length <= 0 ? undefined : arguments[0];
              this.options = Object.assign(
                {},
                this._defaultOptions,
                arguments.length <= 1 ? undefined : arguments[1]
              );
            } else if (arguments.length === 1) {
              if (
                Component.isjQuery(
                  arguments.length <= 0 ? undefined : arguments[0]
                )
              ) {
                this.root = arguments.length <= 0 ? undefined : arguments[0];
              } else {
                this.options = Object.assign(
                  {},
                  this._defaultOptions,
                  arguments.length <= 0 ? undefined : arguments[0]
                );
              }
            }
          }

          _createClass(
            Component,
            [
              {
                key: 'initialize',
                value: function initialize() {
                  this._cacheNodes();

                  this._bindEvents();

                  this._ready();
                },
              },
              {
                key: '_cacheNodes',
                value: function _cacheNodes() {},
              },
              {
                key: '_bindEvents',
                value: function _bindEvents() {},
              },
              {
                key: '_ready',
                value: function _ready() {},
              },
            ],
            [
              {
                key: 'isjQuery',
                value: function isjQuery(object) {
                  return (
                    object instanceof
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()
                  );
                },
              },
            ]
          );

          return Component;
        })();

        /***/
      },

    /***/ './src/js/components/lightbox.js':
      /*!***************************************!*\
  !*** ./src/js/components/lightbox.js ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Lightbox,
          /* harmony export */
        });
        /* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! @fancyapps/fancybox */ './node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js'
          );
        /* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./component */ './src/js/components/component.js'
          );
        /* provided dependency */ var $ = __webpack_require__(
          /*! jquery */ './node_modules/jquery/dist/jquery.js'
        );
        function _typeof(obj) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      'function' == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? 'symbol'
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, 'prototype', { writable: false });
          return Constructor;
        }

        function _get() {
          if (typeof Reflect !== 'undefined' && Reflect.get) {
            _get = Reflect.get.bind();
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                return desc.get.call(arguments.length < 3 ? target : receiver);
              }
              return desc.value;
            };
          }
          return _get.apply(this, arguments);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }
          return object;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          Object.defineProperty(subClass, 'prototype', { writable: false });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
          return _setPrototypeOf(o, p);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === 'object' || typeof call === 'function')
          ) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError(
              'Derived constructors may only return object or undefined'
            );
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === 'function') return true;
          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        var Lightbox = /*#__PURE__*/ (function (_Component) {
          _inherits(Lightbox, _Component);

          var _super = _createSuper(Lightbox);

          function Lightbox(root, options) {
            var _this;

            _classCallCheck(this, Lightbox);

            _this = _super.call(this, root, options);

            _this.initialize();

            return _this;
          }

          _createClass(Lightbox, [
            {
              key: '_defaultOptions',
              get: function get() {
                return {
                  defaults: {
                    lang: 'ru',
                    transitionEffect: 'slide',
                    backFocus: false,
                    buttons: ['close'],
                    i18n: {
                      ru: {
                        CLOSE: 'Закрыть',
                        NEXT: 'Дальше',
                        PREV: 'Назад',
                        ERROR:
                          'Не удается загрузить. <br/> Попробуйте позднее.',
                        PLAY_START: 'Начать слайдшоу',
                        PLAY_STOP: 'Остановить слайдшоу',
                        FULL_SCREEN: 'На весь экран',
                        THUMBS: 'Превью',
                        DOWNLOAD: 'Скачать',
                        SHARE: 'Поделиться',
                        ZOOM: 'Увеличить',
                      },
                    },
                  },
                };
              },
            },
            {
              key: 'initialize',
              value: function initialize() {
                _get(
                  _getPrototypeOf(Lightbox.prototype),
                  'initialize',
                  this
                ).call(this);
              },
            },
            {
              key: '_cacheNodes',
              value: function _cacheNodes() {
                this.nodes = {
                  link: $('.js-link-modal'),
                };
              },
            },
            {
              key: '_bindEvents',
              value: function _bindEvents() {
                this.nodes.link.on('click', function (event) {
                  event.preventDefault();
                  var $link = $(event.currentTarget);
                  $.fancybox.open({
                    src: $link.data('src'),
                    type: 'inline',
                    opts: {
                      touch: false,
                      autoFocus: false,
                      closeExisting: true,
                      animationEffect: false,
                      beforeLoad: function beforeLoad(event) {
                        event.current.$slide.addClass('fancybox-modal');
                      },
                    },
                  });
                });
              },
            },
            {
              key: '_ready',
              value: function _ready() {
                $.fancybox.defaults.i18n.ru = this.options.defaults.i18n.ru;
                $.fancybox.defaults.lang = this.options.defaults.lang;
                $.fancybox.defaults.buttons = this.options.defaults.buttons;
                $.fancybox.defaults.transitionEffect =
                  this.options.defaults.transitionEffect;
                $.fancybox.defaults.backFocus = this.options.defaults.backFocus;
              },
            },
          ]);

          return Lightbox;
        })(_component__WEBPACK_IMPORTED_MODULE_1__['default']);

        /***/
      },

    /***/ './src/js/components/scrolltotop-btn.js':
      /*!**********************************************!*\
  !*** ./src/js/components/scrolltotop-btn.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ ScrollToTopBtn,
          /* harmony export */
        });
        /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./component */ './src/js/components/component.js'
          );
        /* provided dependency */ var $ = __webpack_require__(
          /*! jquery */ './node_modules/jquery/dist/jquery.js'
        );
        function _typeof(obj) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      'function' == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? 'symbol'
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, 'prototype', { writable: false });
          return Constructor;
        }

        function _get() {
          if (typeof Reflect !== 'undefined' && Reflect.get) {
            _get = Reflect.get.bind();
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                return desc.get.call(arguments.length < 3 ? target : receiver);
              }
              return desc.value;
            };
          }
          return _get.apply(this, arguments);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }
          return object;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          Object.defineProperty(subClass, 'prototype', { writable: false });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
          return _setPrototypeOf(o, p);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === 'object' || typeof call === 'function')
          ) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError(
              'Derived constructors may only return object or undefined'
            );
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === 'function') return true;
          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        // кнопка наверх

        var ScrollToTopBtn = /*#__PURE__*/ (function (_Component) {
          _inherits(ScrollToTopBtn, _Component);

          var _super = _createSuper(ScrollToTopBtn);

          function ScrollToTopBtn(root, options) {
            var _this;

            _classCallCheck(this, ScrollToTopBtn);

            _this = _super.call(this, root, options);

            _this.initialize();

            return _this;
          }

          _createClass(ScrollToTopBtn, [
            {
              key: 'initialize',
              value: function initialize() {
                _get(
                  _getPrototypeOf(ScrollToTopBtn.prototype),
                  'initialize',
                  this
                ).call(this);

                this.setToTopButton();
              },
            },
            {
              key: 'setToTopButton',
              value: function setToTopButton() {
                var $scrollTopBtn = $(
                  '<a rel="nofollow" href="#" id="scroll-top" class="scrolltotop-btn"><i></i></a>'
                ).appendTo('body');
                $scrollTopBtn.on('click', function () {
                  $('html:not(:animated),body:not(:animated)').animate(
                    {
                      scrollTop: 0,
                    },
                    300
                  );
                  return false;
                });
                $(window).scroll(function () {
                  if ($(window).scrollTop() > 100) {
                    $scrollTopBtn.addClass('top-btn-show');
                  } else {
                    $scrollTopBtn.removeClass('top-btn-show');
                  }
                });

                if ($scrollTopBtn.hasClass('top-btn-show')) {
                  $scrollTopBtn.removeClass('top-btn-show');
                }
              },
            },
          ]);

          return ScrollToTopBtn;
        })(_component__WEBPACK_IMPORTED_MODULE_0__['default']);

        /***/
      },

    /***/ './src/js/components/slider.js':
      /*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ Slider,
          /* harmony export */
        });
        /* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! slick-carousel */ './node_modules/slick-carousel/slick/slick.js'
          );
        /* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            slick_carousel__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./component */ './src/js/components/component.js'
          );
        /* provided dependency */ var $ = __webpack_require__(
          /*! jquery */ './node_modules/jquery/dist/jquery.js'
        );
        function _typeof(obj) {
          '@babel/helpers - typeof';
          return (
            (_typeof =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (obj) {
                    return typeof obj;
                  }
                : function (obj) {
                    return obj &&
                      'function' == typeof Symbol &&
                      obj.constructor === Symbol &&
                      obj !== Symbol.prototype
                      ? 'symbol'
                      : typeof obj;
                  }),
            _typeof(obj)
          );
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, 'prototype', { writable: false });
          return Constructor;
        }

        function _get() {
          if (typeof Reflect !== 'undefined' && Reflect.get) {
            _get = Reflect.get.bind();
          } else {
            _get = function _get(target, property, receiver) {
              var base = _superPropBase(target, property);
              if (!base) return;
              var desc = Object.getOwnPropertyDescriptor(base, property);
              if (desc.get) {
                return desc.get.call(arguments.length < 3 ? target : receiver);
              }
              return desc.value;
            };
          }
          return _get.apply(this, arguments);
        }

        function _superPropBase(object, property) {
          while (!Object.prototype.hasOwnProperty.call(object, property)) {
            object = _getPrototypeOf(object);
            if (object === null) break;
          }
          return object;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true,
              },
            }
          );
          Object.defineProperty(subClass, 'prototype', { writable: false });
          if (superClass) _setPrototypeOf(subClass, superClass);
        }

        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
          return _setPrototypeOf(o, p);
        }

        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }

        function _possibleConstructorReturn(self, call) {
          if (
            call &&
            (_typeof(call) === 'object' || typeof call === 'function')
          ) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError(
              'Derived constructors may only return object or undefined'
            );
          }
          return _assertThisInitialized(self);
        }

        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return self;
        }

        function _isNativeReflectConstruct() {
          if (typeof Reflect === 'undefined' || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === 'function') return true;
          try {
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }

        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function _getPrototypeOf(o) {
                return o.__proto__ || Object.getPrototypeOf(o);
              };
          return _getPrototypeOf(o);
        }

        var Slider = /*#__PURE__*/ (function (_Component) {
          _inherits(Slider, _Component);

          var _super = _createSuper(Slider);

          function Slider(root, options) {
            var _this;

            _classCallCheck(this, Slider);

            _this = _super.call(this, root, options);

            _this.initialize();

            return _this;
          }

          _createClass(Slider, [
            {
              key: '_defaultOptions',
              get: function get() {
                return {
                  rows: 0,
                  counter: false,
                  prevArrow:
                    '<button class="slider-prev"><span class="icon-left"></span></button>',
                  nextArrow:
                    '<button class="slider-next"><span class="icon-right"></span></button>',
                };
              },
            },
            {
              key: 'initialize',
              value: function initialize() {
                _get(
                  _getPrototypeOf(Slider.prototype),
                  'initialize',
                  this
                ).call(this);
              },
            },
            {
              key: '_cacheNodes',
              value: function _cacheNodes() {
                this.nodes = {};
              },
            },
            {
              key: '_bindEvents',
              value: function _bindEvents() {
                this.root.on('init', this.addCounter);
                this.root.on('beforeChange', this.changeCounter);
                this.root.on('breakpoint', this.addCounter);
              },
            },
            {
              key: '_ready',
              value: function _ready() {
                this.root.slick(this.options);
              },
            },
            {
              key: 'addCounter',
              value: function addCounter(event, slick) {
                if (
                  slick.options.counter === true &&
                  slick.slideCount > slick.options.slidesToShow
                ) {
                  var $counter = $(
                    '<div class="slick-counter slick-cloned"><div class="slick-counter__inner">' +
                      '<span class="slick-counter__current">' +
                      (slick.currentSlide + 1) +
                      '</span>' +
                      '<span role="separator" class="slick-counter__divider"></span>' +
                      '<span class="slick-counter__count">' +
                      (slick.getDotCount() + 1) +
                      '</span></div></div>'
                  );
                  $counter.appendTo(slick.$slider);
                }
              },
            },
            {
              key: 'changeCounter',
              value: function changeCounter(
                event,
                slick,
                currentSlide,
                nextSlide
              ) {
                slick.$slider
                  .find('.slick-counter__current')
                  .html(
                    Math.floor(nextSlide / slick.options.slidesToScroll) + 1
                  );
              },
            },
          ]);

          return Slider;
        })(_component__WEBPACK_IMPORTED_MODULE_1__['default']);

        /***/
      },

    /***/ './src/js/main.js':
      /*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ./components/slider */ './src/js/components/slider.js'
          );
        /* harmony import */ var _components_lightbox__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ./components/lightbox */ './src/js/components/lightbox.js'
          );
        /* harmony import */ var _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ./components/scrolltotop-btn */ './src/js/components/scrolltotop-btn.js'
          );
        /* provided dependency */ var $ = __webpack_require__(
          /*! jquery */ './node_modules/jquery/dist/jquery.js'
        );
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
          }
        }

        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, 'prototype', { writable: false });
          return Constructor;
        }

        var Application = /*#__PURE__*/ (function () {
          function Application() {
            _classCallCheck(this, Application);

            this.initCommon();
            this.initSliders();
            this.initMobileViewPortHeight();
          } // Инициализации

          _createClass(Application, [
            {
              key: 'initCommon',
              value: function initCommon() {
                new _components_lightbox__WEBPACK_IMPORTED_MODULE_1__[
                  'default'
                ]();
                new _components_scrolltotop_btn__WEBPACK_IMPORTED_MODULE_2__[
                  'default'
                ](); // // Плавная прокрутка при переходе по якорю
                // const $root = $('html, body');
                // $('#main-menu a').click(function() {
                //     var href = $.attr(this, 'href');
                //     href = href.substring(1, href.length);
                //     //console.log(href);
                //     $root.animate({
                //         scrollTop: $(href).offset().top
                //     }, 1500, function () {
                //         window.location.hash = href;
                //     });
                //     return false;
                // });

                $('.nav-burger').click(function () {
                  $('.nav').addClass('nav--active');
                  $('.nav-burger').addClass('nav-burger-disactive');
                  $('.nav-close').removeClass('nav-close--disactive');
                });
                $('.nav-close').click(function () {
                  $('.nav').removeClass('nav--active');
                  $('.nav-burger').removeClass('nav-burger-disactive');
                  $('.nav-close').addClass('nav-close--disactive');
                }); // TIMER

                function countdown(dateEnd) {
                  var timer, days, hours, minutes, seconds;
                  dateEnd = new Date(dateEnd);
                  dateEnd = dateEnd.getTime();

                  if (isNaN(dateEnd)) {
                    return;
                  }

                  timer = setInterval(calculate, 1000);

                  function calculate() {
                    var dateStart = new Date();
                    var dateStart = new Date(
                      dateStart.getUTCFullYear(),
                      dateStart.getUTCMonth(),
                      dateStart.getUTCDate(),
                      dateStart.getUTCHours(),
                      dateStart.getUTCMinutes(),
                      dateStart.getUTCSeconds()
                    );
                    var timeRemaining = parseInt(
                      (dateEnd - dateStart.getTime()) / 1000
                    );

                    if (timeRemaining >= 0) {
                      days = parseInt(timeRemaining / 86400);
                      timeRemaining = timeRemaining % 86400;
                      hours = parseInt(timeRemaining / 3600);
                      timeRemaining = timeRemaining % 3600;
                      minutes = parseInt(timeRemaining / 60);
                      timeRemaining = timeRemaining % 60;
                      seconds = parseInt(timeRemaining);
                      document.getElementById('days').innerHTML = parseInt(
                        days,
                        10
                      );
                      document.getElementById('hours').innerHTML = (
                        '0' + hours
                      ).slice(-2);
                      document.getElementById('minutes').innerHTML = (
                        '0' + minutes
                      ).slice(-2);
                      document.getElementById('seconds').innerHTML = (
                        '0' + seconds
                      ).slice(-2);
                    } else {
                      return;
                    }
                  }

                  function display(days, hours, minutes, seconds) {}
                }

                countdown('09/22/2019 02:00:00 AM');
              }, // Инициализация всех слайдеров
            },
            {
              key: 'initSliders',
              value: function initSliders() {
                // Slider in content
                var $slider = $('.home-slider');

                if ($slider.length !== 0) {
                  new _components_slider__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]($slider, {
                    counter: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2000,
                  });
                } // Carousel in content

                var $carousel = $('.carousel');

                if ($carousel.length !== 0) {
                  new _components_slider__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]($carousel, {
                    counter: false,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow:
                      '<button class="carousel-prev"><span class="icon-left"></span></button>',
                    nextArrow:
                      '<button class="carousel-next"><span class="icon-right"></span></button>',
                    adaptiveHeight: true,
                    responsive: [
                      {
                        breakpoint: 767,
                        settings: {
                          slidesToShow: 2,
                          arrows: false,
                        },
                      },
                    ],
                  });
                }
              }, // 100vh для мобильников
            },
            {
              key: 'initMobileViewPortHeight',
              value: function initMobileViewPortHeight() {
                // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

                /*
      Прмиер как использовать эту фичу в стилях
      .module {
          height: 100vh; //Use vh as a fallback for browsers that do not support Custom Properties
          height: calc(var(--vh, 1vh) * 100);
          margin: 0 auto;
          max-width: 30%;
      }
      */
                // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
                var vh = window.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

                document.documentElement.style.setProperty(
                  '--vh',
                  ''.concat(vh, 'px')
                );
                var document_width = window.innerWidth; // We listen to the resize event (а ресайз в мобилках срабатывает и при скроле, когда исчезает строка ввода адреса в браузере)

                window.addEventListener('resize', function () {
                  // We execute the same script as before
                  if (document_width != window.innerWidth) {
                    document_width = window.innerWidth;

                    var _vh = window.innerHeight * 0.01;

                    document.documentElement.style.setProperty(
                      '--vh',
                      ''.concat(_vh, 'px')
                    );
                  }
                });
              },
            },
          ]);

          return Application;
        })(); // запуск приложения

        $(function () {
          new Application();
        });

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/chunk loaded */
  /******/ (() => {
    /******/ var deferred = [];
    /******/ __webpack_require__.O = (result, chunkIds, fn, priority) => {
      /******/ if (chunkIds) {
        /******/ priority = priority || 0;
        /******/ for (
          var i = deferred.length;
          i > 0 && deferred[i - 1][2] > priority;
          i--
        )
          deferred[i] = deferred[i - 1];
        /******/ deferred[i] = [chunkIds, fn, priority];
        /******/ return;
        /******/
      }
      /******/ var notFulfilled = Infinity;
      /******/ for (var i = 0; i < deferred.length; i++) {
        /******/ var [chunkIds, fn, priority] = deferred[i];
        /******/ var fulfilled = true;
        /******/ for (var j = 0; j < chunkIds.length; j++) {
          /******/ if (
            (priority & (1 === 0) || notFulfilled >= priority) &&
            Object.keys(__webpack_require__.O).every((key) =>
              __webpack_require__.O[key](chunkIds[j])
            )
          ) {
            /******/ chunkIds.splice(j--, 1);
            /******/
          } else {
            /******/ fulfilled = false;
            /******/ if (priority < notFulfilled) notFulfilled = priority;
            /******/
          }
          /******/
        }
        /******/ if (fulfilled) {
          /******/ deferred.splice(i--, 1);
          /******/ var r = fn();
          /******/ if (r !== undefined) result = r;
          /******/
        }
        /******/
      }
      /******/ return result;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ __webpack_require__.O.j = (chunkId) =>
      installedChunks[chunkId] === 0;
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/ var [chunkIds, moreModules, runtime] = data;
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/ var moduleId,
        chunkId,
        i = 0;
      /******/ if (chunkIds.some((id) => installedChunks[id] !== 0)) {
        /******/ for (moduleId in moreModules) {
          /******/ if (__webpack_require__.o(moreModules, moduleId)) {
            /******/ __webpack_require__.m[moduleId] = moreModules[moduleId];
            /******/
          }
          /******/
        }
        /******/ if (runtime) var result = runtime(__webpack_require__);
        /******/
      }
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i];
        /******/ if (
          __webpack_require__.o(installedChunks, chunkId) &&
          installedChunks[chunkId]
        ) {
          /******/ installedChunks[chunkId][0]();
          /******/
        }
        /******/ installedChunks[chunkId] = 0;
        /******/
      }
      /******/ return __webpack_require__.O(result);
      /******/
    };
    /******/
    /******/ var chunkLoadingGlobal = (self['webpackChunkhtml_start'] =
      self['webpackChunkhtml_start'] || []);
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    );
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module depends on other loaded chunks and execution need to be delayed
  /******/ var __webpack_exports__ = __webpack_require__.O(
    undefined,
    ['vendors'],
    () => __webpack_require__('./src/js/main.js')
  );
  /******/ __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
  /******/
  /******/
})();
function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
function initialClock(id, endtime) {
  let t = getTimeRemaining(endtime);
  let clock = document.getElementById(id);
  let daysSpan = document.querySelector('.timer__days');
  let hoursSpan = document.querySelector('.timer__hours');
  let minutesSpan = document.querySelector('.timer__minutes');
  let secondsSpan = document.querySelector('.timer__seconds');
  function updateClock() {
    let t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initialClock('countdown', deadline);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvY29tcG9uZW50LmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9saWdodGJveC5qcyIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0Ly4vc3JjL2pzL2NvbXBvbmVudHMvc2Nyb2xsdG90b3AtYnRuLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvLi9zcmMvanMvY29tcG9uZW50cy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaHRtbC1zdGFydC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2h0bWwtc3RhcnQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9odG1sLXN0YXJ0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcblxuLy9leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBFbWl0dGVyIHtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICAvL3N1cGVyKCk7XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLnJvb3QgPSBhcmdzWzBdO1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fZGVmYXVsdE9wdGlvbnMsIGFyZ3NbMV0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGlmIChDb21wb25lbnQuaXNqUXVlcnkoYXJnc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBhcmdzWzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9kZWZhdWx0T3B0aW9ucywgYXJnc1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaXNqUXVlcnkob2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgaW5zdGFuY2VvZiBqUXVlcnk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVOb2RlcygpO1xuICAgICAgICB0aGlzLl9iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuX3JlYWR5KCk7XG4gICAgfVxuXG4gICAgX2NhY2hlTm9kZXMoKSB7fVxuXG4gICAgX2JpbmRFdmVudHMoKSB7fVxuXG4gICAgX3JlYWR5KCkge31cbn0iLCJpbXBvcnQgXCJAZmFuY3lhcHBzL2ZhbmN5Ym94XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWdodGJveCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgZ2V0IF9kZWZhdWx0T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgbGFuZzogJ3J1JyxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRWZmZWN0OiAnc2xpZGUnLFxuICAgICAgICAgICAgICAgIGJhY2tGb2N1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xuICAgICAgICAgICAgICAgICAgICAnY2xvc2UnXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICAgICAgICAgIHJ1OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBDTE9TRTogJ9CX0LDQutGA0YvRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5FWFQ6ICfQlNCw0LvRjNGI0LUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgUFJFVjogJ9Cd0LDQt9Cw0LQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgRVJST1I6ICfQndC1INGD0LTQsNC10YLRgdGPINC30LDQs9GA0YPQt9C40YLRjC4gPGJyLz4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0L/QvtC30LTQvdC10LUuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFBMQVlfU1RBUlQ6ICfQndCw0YfQsNGC0Ywg0YHQu9Cw0LnQtNGI0L7RgycsXG4gICAgICAgICAgICAgICAgICAgICAgICBQTEFZX1NUT1A6ICfQntGB0YLQsNC90L7QstC40YLRjCDRgdC70LDQudC00YjQvtGDJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIEZVTExfU0NSRUVOOiAn0J3QsCDQstC10YHRjCDRjdC60YDQsNC9JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRIVU1CUzogJ9Cf0YDQtdCy0YzRjicsXG4gICAgICAgICAgICAgICAgICAgICAgICBET1dOTE9BRDogJ9Ch0LrQsNGH0LDRgtGMJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFNIQVJFOiAn0J/QvtC00LXQu9C40YLRjNGB0Y8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgWk9PTTogJ9Cj0LLQtdC70LjRh9C40YLRjCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIocm9vdCwgb3B0aW9ucyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIF9jYWNoZU5vZGVzKCkge1xuICAgICAgICB0aGlzLm5vZGVzID0ge1xuICAgICAgICAgICAgbGluazogJCgnLmpzLWxpbmstbW9kYWwnKVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLm5vZGVzLmxpbmsub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbGV0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKHtcbiAgICAgICAgICAgICAgICBzcmM6ICRsaW5rLmRhdGEoJ3NyYycpLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdpbmxpbmUnLFxuICAgICAgICAgICAgICAgIG9wdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgdG91Y2g6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zZUV4aXN0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25FZmZlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVMb2FkOiBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50LiRzbGlkZS5hZGRDbGFzcygnZmFuY3lib3gtbW9kYWwnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcmVhZHkoKSB7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMuaTE4bi5ydSA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5pMThuLnJ1O1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmxhbmcgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdHMubGFuZztcbiAgICAgICAgJC5mYW5jeWJveC5kZWZhdWx0cy5idXR0b25zID0gdGhpcy5vcHRpb25zLmRlZmF1bHRzLmJ1dHRvbnM7XG4gICAgICAgICQuZmFuY3lib3guZGVmYXVsdHMudHJhbnNpdGlvbkVmZmVjdCA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy50cmFuc2l0aW9uRWZmZWN0O1xuICAgICAgICAkLmZhbmN5Ym94LmRlZmF1bHRzLmJhY2tGb2N1cyA9IHRoaXMub3B0aW9ucy5kZWZhdWx0cy5iYWNrRm9jdXM7XG4gICAgfVxufSIsIi8vINC60L3QvtC/0LrQsCDQvdCw0LLQtdGA0YVcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4vY29tcG9uZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvVG9wQnRuIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBcbiAgICBjb25zdHJ1Y3Rvcihyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHJvb3QsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuc2V0VG9Ub3BCdXR0b24oKTtcbiAgICB9XG5cbiAgICBzZXRUb1RvcEJ1dHRvbigpIHtcblxuICAgICAgICB2YXIgJHNjcm9sbFRvcEJ0biA9ICQoJzxhIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cIiNcIiBpZD1cInNjcm9sbC10b3BcIiBjbGFzcz1cInNjcm9sbHRvdG9wLWJ0blwiPjxpPjwvaT48L2E+JykuYXBwZW5kVG8oJ2JvZHknKTtcblxuICAgICAgICAkc2Nyb2xsVG9wQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnaHRtbDpub3QoOmFuaW1hdGVkKSxib2R5Om5vdCg6YW5pbWF0ZWQpJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMH0sIDMwMCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAxMDApIHtcbiAgICAgICAgICAgICRzY3JvbGxUb3BCdG4uYWRkQ2xhc3MoJ3RvcC1idG4tc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHNjcm9sbFRvcEJ0bi5yZW1vdmVDbGFzcygndG9wLWJ0bi1zaG93Jyk7XG4gICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCRzY3JvbGxUb3BCdG4uaGFzQ2xhc3MoJ3RvcC1idG4tc2hvdycpKSB7XG4gICAgICAgICAgICAkc2Nyb2xsVG9wQnRuLnJlbW92ZUNsYXNzKCd0b3AtYnRuLXNob3cnKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgXCJzbGljay1jYXJvdXNlbFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXQgX2RlZmF1bHRPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcm93czogMCxcbiAgICAgICAgICAgIGNvdW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInNsaWRlci1wcmV2XCI+PHNwYW4gY2xhc3M9XCJpY29uLWxlZnRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGlkZXItbmV4dFwiPjxzcGFuIGNsYXNzPVwiaWNvbi1yaWdodFwiPjwvc3Bhbj48L2J1dHRvbj4nXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihyb290LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHJvb3QsIG9wdGlvbnMpO1xuXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG5cbiAgICBfY2FjaGVOb2RlcygpIHtcbiAgICAgICAgdGhpcy5ub2RlcyA9IHt9O1xuICAgIH1cblxuICAgIF9iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLnJvb3Qub24oJ2luaXQnLCB0aGlzLmFkZENvdW50ZXIpO1xuICAgICAgICB0aGlzLnJvb3Qub24oJ2JlZm9yZUNoYW5nZScsIHRoaXMuY2hhbmdlQ291bnRlcik7XG4gICAgICAgIHRoaXMucm9vdC5vbignYnJlYWtwb2ludCcsIHRoaXMuYWRkQ291bnRlcik7XG4gICAgfVxuXG4gICAgX3JlYWR5KCkge1xuICAgICAgICB0aGlzLnJvb3Quc2xpY2sodGhpcy5vcHRpb25zKTtcbiAgICB9XG5cbiAgICBhZGRDb3VudGVyKGV2ZW50LCBzbGljaykge1xuICAgICAgICBpZiAoc2xpY2sub3B0aW9ucy5jb3VudGVyID09PSB0cnVlICYmIHNsaWNrLnNsaWRlQ291bnQgPiBzbGljay5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xuICAgICAgICAgICAgbGV0ICRjb3VudGVyID0gJCgnPGRpdiBjbGFzcz1cInNsaWNrLWNvdW50ZXIgc2xpY2stY2xvbmVkXCI+PGRpdiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2lubmVyXCI+JyArXG4gICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwic2xpY2stY291bnRlcl9fY3VycmVudFwiPicgKyAoc2xpY2suY3VycmVudFNsaWRlICsgMSkgKyAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJzbGljay1jb3VudGVyX19kaXZpZGVyXCI+PC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cInNsaWNrLWNvdW50ZXJfX2NvdW50XCI+JyArIChzbGljay5nZXREb3RDb3VudCgpICsgMSkgKyAnPC9zcGFuPjwvZGl2PjwvZGl2PicpO1xuXG4gICAgICAgICAgICAkY291bnRlci5hcHBlbmRUbyhzbGljay4kc2xpZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNoYW5nZUNvdW50ZXIoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xuICAgICAgICBzbGljay4kc2xpZGVyLmZpbmQoJy5zbGljay1jb3VudGVyX19jdXJyZW50JykuaHRtbChNYXRoLmZsb29yKG5leHRTbGlkZSAvIHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICsgMSk7XG4gICAgfVxufSIsImltcG9ydCBTbGlkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9zbGlkZXJcIjtcbmltcG9ydCBMaWdodGJveCBmcm9tIFwiLi9jb21wb25lbnRzL2xpZ2h0Ym94XCI7XG5pbXBvcnQgU2Nyb2xsVG9Ub3BCdG4gZnJvbSBcIi4vY29tcG9uZW50cy9zY3JvbGx0b3RvcC1idG5cIjtcblxuY2xhc3MgQXBwbGljYXRpb24ge1xuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbml0Q29tbW9uKCk7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlcnMoKTtcbiAgICAgICAgdGhpcy5pbml0TW9iaWxlVmlld1BvcnRIZWlnaHQoKTtcbiAgICB9XG5cblxuICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4XG4gICAgaW5pdENvbW1vbigpIHtcblxuICAgICAgICBuZXcgTGlnaHRib3goKTtcblxuICAgICAgICBuZXcgU2Nyb2xsVG9Ub3BCdG4oKTtcblxuICAgICAgICAvLyAvLyDQn9C70LDQstC90LDRjyDQv9GA0L7QutGA0YPRgtC60LAg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L/QviDRj9C60L7RgNGOXG4gICAgICAgIC8vIGNvbnN0ICRyb290ID0gJCgnaHRtbCwgYm9keScpO1xuICAgICAgICAvLyAkKCcjbWFpbi1tZW51IGEnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gICAgIHZhciBocmVmID0gJC5hdHRyKHRoaXMsICdocmVmJyk7XG4gICAgICAgIC8vICAgICBocmVmID0gaHJlZi5zdWJzdHJpbmcoMSwgaHJlZi5sZW5ndGgpO1xuICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhocmVmKTtcbiAgICAgICAgLy8gICAgICRyb290LmFuaW1hdGUoe1xuICAgICAgICAvLyAgICAgICAgIHNjcm9sbFRvcDogJChocmVmKS5vZmZzZXQoKS50b3BcbiAgICAgICAgLy8gICAgIH0sIDE1MDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWY7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgJCgnLm5hdi1idXJnZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcubmF2JykuYWRkQ2xhc3MoJ25hdi0tYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcubmF2LWJ1cmdlcicpLmFkZENsYXNzKCduYXYtYnVyZ2VyLWRpc2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLm5hdi1jbG9zZScpLnJlbW92ZUNsYXNzKCduYXYtY2xvc2UtLWRpc2FjdGl2ZScpO1xuICAgICAgICB9KVxuXG4gICAgICAgICQoJy5uYXYtY2xvc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcubmF2JykucmVtb3ZlQ2xhc3MoJ25hdi0tYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcubmF2LWJ1cmdlcicpLnJlbW92ZUNsYXNzKCduYXYtYnVyZ2VyLWRpc2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLm5hdi1jbG9zZScpLmFkZENsYXNzKCduYXYtY2xvc2UtLWRpc2FjdGl2ZScpO1xuICAgICAgICB9KVxuXG5cbiAgICAgICAgLy8gVElNRVJcbiAgICAgICAgZnVuY3Rpb24gY291bnRkb3duKGRhdGVFbmQpIHtcbiAgICAgICAgICAgIHZhciB0aW1lciwgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHM7XG4gICAgICAgICAgXG4gICAgICAgICAgICBkYXRlRW5kID0gbmV3IERhdGUoZGF0ZUVuZCk7XG4gICAgICAgICAgICBkYXRlRW5kID0gZGF0ZUVuZC5nZXRUaW1lKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgICBpZiAoaXNOYU4oZGF0ZUVuZCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgdGltZXIgPSBzZXRJbnRlcnZhbChjYWxjdWxhdGUsIDEwMDApO1xuICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gY2FsY3VsYXRlKCkge1xuICAgICAgICAgICAgICB2YXIgZGF0ZVN0YXJ0ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgdmFyIGRhdGVTdGFydCA9IG5ldyBEYXRlKGRhdGVTdGFydC5nZXRVVENGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgIGRhdGVTdGFydC5nZXRVVENNb250aCgpLFxuICAgICAgICAgICAgICAgIGRhdGVTdGFydC5nZXRVVENEYXRlKCksXG4gICAgICAgICAgICAgICAgZGF0ZVN0YXJ0LmdldFVUQ0hvdXJzKCksXG4gICAgICAgICAgICAgICAgZGF0ZVN0YXJ0LmdldFVUQ01pbnV0ZXMoKSxcbiAgICAgICAgICAgICAgICBkYXRlU3RhcnQuZ2V0VVRDU2Vjb25kcygpKTtcbiAgICAgICAgICAgICAgdmFyIHRpbWVSZW1haW5pbmcgPSBwYXJzZUludCgoZGF0ZUVuZCAtIGRhdGVTdGFydC5nZXRUaW1lKCkpIC8gMTAwMClcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKHRpbWVSZW1haW5pbmcgPj0gMCkge1xuICAgICAgICAgICAgICAgIGRheXMgPSBwYXJzZUludCh0aW1lUmVtYWluaW5nIC8gODY0MDApO1xuICAgICAgICAgICAgICAgIHRpbWVSZW1haW5pbmcgPSAodGltZVJlbWFpbmluZyAlIDg2NDAwKTtcbiAgICAgICAgICAgICAgICBob3VycyA9IHBhcnNlSW50KHRpbWVSZW1haW5pbmcgLyAzNjAwKTtcbiAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nID0gKHRpbWVSZW1haW5pbmcgJSAzNjAwKTtcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gcGFyc2VJbnQodGltZVJlbWFpbmluZyAvIDYwKTtcbiAgICAgICAgICAgICAgICB0aW1lUmVtYWluaW5nID0gKHRpbWVSZW1haW5pbmcgJSA2MCk7XG4gICAgICAgICAgICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVSZW1haW5pbmcpO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5c1wiKS5pbm5lckhUTUwgPSBwYXJzZUludChkYXlzLCAxMCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob3Vyc1wiKS5pbm5lckhUTUwgPSAoXCIwXCIgKyBob3Vycykuc2xpY2UoLTIpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludXRlc1wiKS5pbm5lckhUTUwgPSAoXCIwXCIgKyBtaW51dGVzKS5zbGljZSgtMik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWNvbmRzXCIpLmlubmVySFRNTCA9IChcIjBcIiArIHNlY29uZHMpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BsYXkoZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpIHt9XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgIGNvdW50ZG93biAoJzA5LzIyLzIwMTkgMDI6MDA6MDAgQU0nKTtcblxuICAgIH1cblxuXG4gICAgLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LLRgdC10YUg0YHQu9Cw0LnQtNC10YDQvtCyXG4gICAgaW5pdFNsaWRlcnMoKSB7XG5cbiAgICAgICAgLy8gU2xpZGVyIGluIGNvbnRlbnRcbiAgICAgICAgbGV0ICRzbGlkZXIgPSAkKCcuaG9tZS1zbGlkZXInKTtcbiAgICAgICAgaWYgKCRzbGlkZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICBuZXcgU2xpZGVyKCRzbGlkZXIsIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAyMDAwLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYXJvdXNlbCBpbiBjb250ZW50XG4gICAgICAgIGxldCAkY2Fyb3VzZWwgPSAkKCcuY2Fyb3VzZWwnKTtcbiAgICAgICAgaWYgKCRjYXJvdXNlbC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIG5ldyBTbGlkZXIoJGNhcm91c2VsLCB7XG4gICAgICAgICAgICAgICAgY291bnRlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWwtcHJldlwiPjxzcGFuIGNsYXNzPVwiaWNvbi1sZWZ0XCI+PC9zcGFuPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cImNhcm91c2VsLW5leHRcIj48c3BhbiBjbGFzcz1cImljb24tcmlnaHRcIj48L3NwYW4+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcblxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH1cblxuXG4gICAgLy8gMTAwdmgg0LTQu9GPINC80L7QsdC40LvRjNC90LjQutC+0LJcbiAgICBpbml0TW9iaWxlVmlld1BvcnRIZWlnaHQoKSB7XG5cbiAgICAgICAgLy8gaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xuICAgICAgICAvKlxuICAgICAgICDQn9GA0LzQuNC10YAg0LrQsNC6INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCDRjdGC0YMg0YTQuNGH0YMg0LIg0YHRgtC40LvRj9GFXG4gICAgICAgIC5tb2R1bGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDsgLy9Vc2UgdmggYXMgYSBmYWxsYmFjayBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBDdXN0b20gUHJvcGVydGllc1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXZoLCAxdmgpICogMTAwKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgICAgIH1cbiAgICAgICAgKi9cblxuICAgICAgICAvLyBGaXJzdCB3ZSBnZXQgdGhlIHZpZXdwb3J0IGhlaWdodCBhbmQgd2UgbXVsdGlwbGUgaXQgYnkgMSUgdG8gZ2V0IGEgdmFsdWUgZm9yIGEgdmggdW5pdFxuICAgICAgICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxO1xuICAgICAgICAvLyBUaGVuIHdlIHNldCB0aGUgdmFsdWUgaW4gdGhlIC0tdmggY3VzdG9tIHByb3BlcnR5IHRvIHRoZSByb290IG9mIHRoZSBkb2N1bWVudFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApO1xuICAgICAgICBsZXQgZG9jdW1lbnRfd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgLy8gV2UgbGlzdGVuIHRvIHRoZSByZXNpemUgZXZlbnQgKNCwINGA0LXRgdCw0LnQtyDQsiDQvNC+0LHQuNC70LrQsNGFINGB0YDQsNCx0LDRgtGL0LLQsNC10YIg0Lgg0L/RgNC4INGB0LrRgNC+0LvQtSwg0LrQvtCz0LTQsCDQuNGB0YfQtdC30LDQtdGCINGB0YLRgNC+0LrQsCDQstCy0L7QtNCwINCw0LTRgNC10YHQsCDQsiDQsdGA0LDRg9C30LXRgNC1KVxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gV2UgZXhlY3V0ZSB0aGUgc2FtZSBzY3JpcHQgYXMgYmVmb3JlXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRfd2lkdGggIT0gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudF93aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICAgICAgICAgIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDE7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuLy8g0LfQsNC/0YPRgdC6INC/0YDQuNC70L7QttC10L3QuNGPXG4kKCgpID0+IHtcbiAgICBuZXcgQXBwbGljYXRpb24oKTtcbn0pOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtodG1sX3N0YXJ0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua2h0bWxfc3RhcnRcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvanMvbWFpbi5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImpRdWVyeSIsIkNvbXBvbmVudCIsImxlbmd0aCIsInJvb3QiLCJvcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwiX2RlZmF1bHRPcHRpb25zIiwiaXNqUXVlcnkiLCJfY2FjaGVOb2RlcyIsIl9iaW5kRXZlbnRzIiwiX3JlYWR5Iiwib2JqZWN0IiwiTGlnaHRib3giLCJpbml0aWFsaXplIiwiZGVmYXVsdHMiLCJsYW5nIiwidHJhbnNpdGlvbkVmZmVjdCIsImJhY2tGb2N1cyIsImJ1dHRvbnMiLCJpMThuIiwicnUiLCJDTE9TRSIsIk5FWFQiLCJQUkVWIiwiRVJST1IiLCJQTEFZX1NUQVJUIiwiUExBWV9TVE9QIiwiRlVMTF9TQ1JFRU4iLCJUSFVNQlMiLCJET1dOTE9BRCIsIlNIQVJFIiwiWk9PTSIsIm5vZGVzIiwibGluayIsIiQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkbGluayIsImN1cnJlbnRUYXJnZXQiLCJmYW5jeWJveCIsIm9wZW4iLCJzcmMiLCJkYXRhIiwidHlwZSIsIm9wdHMiLCJ0b3VjaCIsImF1dG9Gb2N1cyIsImNsb3NlRXhpc3RpbmciLCJhbmltYXRpb25FZmZlY3QiLCJiZWZvcmVMb2FkIiwiY3VycmVudCIsIiRzbGlkZSIsImFkZENsYXNzIiwiU2Nyb2xsVG9Ub3BCdG4iLCJzZXRUb1RvcEJ1dHRvbiIsIiRzY3JvbGxUb3BCdG4iLCJhcHBlbmRUbyIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGwiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwiU2xpZGVyIiwicm93cyIsImNvdW50ZXIiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJhZGRDb3VudGVyIiwiY2hhbmdlQ291bnRlciIsInNsaWNrIiwic2xpZGVDb3VudCIsInNsaWRlc1RvU2hvdyIsIiRjb3VudGVyIiwiY3VycmVudFNsaWRlIiwiZ2V0RG90Q291bnQiLCIkc2xpZGVyIiwibmV4dFNsaWRlIiwiZmluZCIsImh0bWwiLCJNYXRoIiwiZmxvb3IiLCJzbGlkZXNUb1Njcm9sbCIsIkFwcGxpY2F0aW9uIiwiaW5pdENvbW1vbiIsImluaXRTbGlkZXJzIiwiaW5pdE1vYmlsZVZpZXdQb3J0SGVpZ2h0IiwiY2xpY2siLCJjb3VudGRvd24iLCJkYXRlRW5kIiwidGltZXIiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsIkRhdGUiLCJnZXRUaW1lIiwiaXNOYU4iLCJzZXRJbnRlcnZhbCIsImNhbGN1bGF0ZSIsImRhdGVTdGFydCIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsInRpbWVSZW1haW5pbmciLCJwYXJzZUludCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJzbGljZSIsImRpc3BsYXkiLCJpbmZpbml0ZSIsImFkYXB0aXZlSGVpZ2h0IiwiYXJyb3dzIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwiJGNhcm91c2VsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZoIiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZG9jdW1lbnRfd2lkdGgiLCJpbm5lcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=
