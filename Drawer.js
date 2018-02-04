'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawer = function (_React$Component) {
    _inherits(Drawer, _React$Component);

    function Drawer(props) {
        _classCallCheck(this, Drawer);

        var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, props));

        _this.state = {
            isOpen: false
        };
        return _this;
    }

    _createClass(Drawer, [{
        key: 'open',
        value: function open() {
            this.setState({
                isOpen: true
            });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            if (this.state.isOpen) {
                this.close();
            } else {
                this.open();
            }
        }
    }, {
        key: 'close',
        value: function close() {
            this.setState({
                isOpen: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var className = 'drawer';
            if (this.state.isOpen) {
                className += ' open';
            }

            return _react2.default.createElement(
                'div',
                { className: className },
                this.props.children
            );
        }
    }]);

    return Drawer;
}(_react2.default.Component);

exports.default = Drawer;