'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActorAppConstants = require('../../../constants/ActorAppConstants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var State = (function (_Component) {
  _inherits(State, _Component);

  function State(props) {
    _classCallCheck(this, State);

    return _possibleConstructorReturn(this, _Component.call(this, props));
  }

  State.prototype.render = function render() {
    var message = this.props.message;

    if (message.content.content === _ActorAppConstants.MessageContentTypes.SERVICE) {
      return null;
    } else {
      var icon = null;

      switch (message.state) {
        case 'pending':
          icon = _react2.default.createElement(
            'i',
            { className: 'status status--pending material-icons' },
            'access_time'
          );
          break;
        case 'sent':
          icon = _react2.default.createElement(
            'i',
            { className: 'status status--sent material-icons' },
            'done'
          );
          break;
        case 'received':
          icon = _react2.default.createElement(
            'i',
            { className: 'status status--received material-icons' },
            'done_all'
          );
          break;
        case 'read':
          icon = _react2.default.createElement(
            'i',
            { className: 'status status--read material-icons' },
            'done_all'
          );
          break;
        case 'error':
          icon = _react2.default.createElement(
            'i',
            { className: 'status status--error material-icons' },
            'report_problem'
          );
          break;
        default:
      }

      return _react2.default.createElement(
        'div',
        { className: 'message__status' },
        icon
      );
    }
  };

  return State;
})(_react.Component);

State.propTypes = {
  message: _react.PropTypes.object.isRequired
};
exports.default = State;
//# sourceMappingURL=State.react.js.map