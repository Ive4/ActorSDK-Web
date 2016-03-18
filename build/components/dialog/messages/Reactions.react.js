'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _MessageActionCreators = require('../../../actions/MessageActionCreators');

var _MessageActionCreators2 = _interopRequireDefault(_MessageActionCreators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (C) 2015 Actor LLC. <https://actor.im>
 */

var MessageReactions = function (_Component) {
  (0, _inherits3.default)(MessageReactions, _Component);

  function MessageReactions(props) {
    (0, _classCallCheck3.default)(this, MessageReactions);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.handleAddLike = function () {
      _MessageActionCreators2.default.addLike(_this.props.peer, _this.props.message.rid);
      _this.setState({ isThisMyReaction: true });
    };

    _this.handleRemoveLike = function () {
      _MessageActionCreators2.default.removeLike(_this.props.peer, _this.props.message.rid);
      _this.setState({ isThisMyReaction: true });
    };

    _this.state = {
      canAnimateHeart: true
    };
    return _this;
  }

  MessageReactions.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.state.isThisMyReaction) {
      this.setState({
        canAnimateHeart: false,
        isThisMyReaction: false
      });
    } else {
      this.setState({ canAnimateHeart: true });
    }
  };

  MessageReactions.prototype.render = function render() {
    var message = this.props.message;
    var canAnimateHeart = this.state.canAnimateHeart;

    var hasReactions = message.reactions.length > 0;

    var counter = void 0;
    var icon = _react2.default.createElement(
      'i',
      { className: 'icon material-icons', onClick: this.handleAddLike },
      'favorite'
    );
    var reactionsClassName = 'message__actions__like';

    if (hasReactions) {
      var amILikeThat = message.reactions[0].isOwnSet;

      reactionsClassName = (0, _classnames2.default)(reactionsClassName, {
        'message__actions__like--has-reactions': hasReactions,
        'message__actions__like--liked': amILikeThat,
        'message__actions__like--with-animations': canAnimateHeart
      });

      if (amILikeThat) {
        icon = _react2.default.createElement(
          'i',
          { className: 'icon material-icons', onClick: this.handleRemoveLike },
          'favorite'
        );
      }

      if (message.reactions[0].uids.length > 0) {
        counter = _react2.default.createElement(
          'span',
          { className: 'counter', key: 1 },
          message.reactions[0].uids.length
        );
      } else {
        counter = null;
      }
    }

    return _react2.default.createElement(
      'div',
      { className: reactionsClassName },
      _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: 'counter', transitionEnterTimeout: 125, transitionLeaveTimeout: 100 },
        counter
      ),
      icon
    );
  };

  return MessageReactions;
}(_react.Component);

MessageReactions.propTypes = {
  peer: _react.PropTypes.object.isRequired,
  message: _react.PropTypes.object.isRequired
};
exports.default = MessageReactions;
//# sourceMappingURL=Reactions.react.js.map