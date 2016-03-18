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

var _ActorAppConstants = require('../constants/ActorAppConstants');

var _EmojiUtils = require('../utils/EmojiUtils');

var _VisibilityActionCreators = require('../actions/VisibilityActionCreators');

var _VisibilityActionCreators2 = _interopRequireDefault(_VisibilityActionCreators);

var _QuickSearchActionCreators = require('../actions/QuickSearchActionCreators');

var _QuickSearchActionCreators2 = _interopRequireDefault(_QuickSearchActionCreators);

var _Sidebar = require('./Sidebar.react');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Favicon = require('./common/Favicon.react');

var _Favicon2 = _interopRequireDefault(_Favicon);

var _ModalsWrapper = require('./modals/ModalsWrapper.react');

var _ModalsWrapper2 = _interopRequireDefault(_ModalsWrapper);

var _MenuOverlay = require('./common/MenuOverlay.react');

var _MenuOverlay2 = _interopRequireDefault(_MenuOverlay);

var _InviteUser = require('./modals/InviteUser.react');

var _InviteUser2 = _interopRequireDefault(_InviteUser);

var _InviteByLink = require('./modals/invite-user/InviteByLink.react');

var _InviteByLink2 = _interopRequireDefault(_InviteByLink);

var _EditGroup = require('./modals/EditGroup.react');

var _EditGroup2 = _interopRequireDefault(_EditGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
 */

var Main = function (_Component) {
  (0, _inherits3.default)(Main, _Component);

  function Main(props) {
    (0, _classCallCheck3.default)(this, Main);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.onVisibilityChange = function () {
      if (!document.hidden) {
        _VisibilityActionCreators2.default.createAppVisible();
      } else {
        _VisibilityActionCreators2.default.createAppHidden();
      }
    };

    _this.onKeyDown = function (event) {
      // TODO: Make this hotkey work on windows
      if (event.keyCode === _ActorAppConstants.KeyCodes.K && event.metaKey) {
        event.stopPropagation();
        event.preventDefault();
        _QuickSearchActionCreators2.default.show();
      }
    };

    document.addEventListener('visibilitychange', _this.onVisibilityChange);
    document.addEventListener('keydown', _this.onKeyDown, false);

    // Preload emoji spritesheet
    (0, _EmojiUtils.preloadEmojiSheet)();

    if (!document.hidden) {
      _VisibilityActionCreators2.default.createAppVisible();
    }
    return _this;
  }

  Main.prototype.render = function render() {
    var delegate = this.context.delegate;


    var Sidebar = typeof delegate.components.sidebar == 'function' ? delegate.components.sidebar : _Sidebar2.default;

    return _react2.default.createElement(
      'div',
      { className: 'app' },
      _react2.default.createElement(_Favicon2.default, null),
      _react2.default.createElement(Sidebar, null),
      this.props.children,
      _react2.default.createElement(_ModalsWrapper2.default, null),
      _react2.default.createElement(_MenuOverlay2.default, null),
      _react2.default.createElement(_InviteUser2.default, null),
      _react2.default.createElement(_InviteByLink2.default, null),
      _react2.default.createElement(_EditGroup2.default, null)
    );
  };

  return Main;
}(_react.Component);

Main.propTypes = {
  params: _react.PropTypes.object,
  children: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.node), _react.PropTypes.node])
};
Main.contextTypes = {
  delegate: _react.PropTypes.object
};
exports.default = Main;
//# sourceMappingURL=Main.react.js.map