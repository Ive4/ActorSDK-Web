'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('flux/utils');

var _PeerUtils = require('../utils/PeerUtils');

var _PeerUtils2 = _interopRequireDefault(_PeerUtils);

var _MessagesSection = require('./dialog/MessagesSection.react');

var _MessagesSection2 = _interopRequireDefault(_MessagesSection);

var _TypingSection = require('./dialog/TypingSection.react');

var _TypingSection2 = _interopRequireDefault(_TypingSection);

var _ComposeSection = require('./dialog/ComposeSection.react');

var _ComposeSection2 = _interopRequireDefault(_ComposeSection);

var _DialogFooter = require('./dialog/DialogFooter.react');

var _DialogFooter2 = _interopRequireDefault(_DialogFooter);

var _Toolbar = require('./Toolbar.react');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Activity = require('./Activity.react');

var _Activity2 = _interopRequireDefault(_Activity);

var _Call = require('./Call.react');

var _Call2 = _interopRequireDefault(_Call);

var _LoggerSection = require('./dev/LoggerSection.react');

var _LoggerSection2 = _interopRequireDefault(_LoggerSection);

var _ConnectionState = require('./common/ConnectionState.react');

var _ConnectionState2 = _interopRequireDefault(_ConnectionState);

var _ActivityStore = require('../stores/ActivityStore');

var _ActivityStore2 = _interopRequireDefault(_ActivityStore);

var _DialogStore = require('../stores/DialogStore');

var _DialogStore2 = _interopRequireDefault(_DialogStore);

var _MessageStore = require('../stores/MessageStore');

var _MessageStore2 = _interopRequireDefault(_MessageStore);

var _DialogActionCreators = require('../actions/DialogActionCreators');

var _DialogActionCreators2 = _interopRequireDefault(_DialogActionCreators);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogSection = function (_Component) {
  (0, _inherits3.default)(DialogSection, _Component);

  DialogSection.getStores = function getStores() {
    return [_ActivityStore2.default, _MessageStore2.default, _DialogStore2.default];
  };

  DialogSection.calculateState = function calculateState() {
    return {
      peer: _DialogStore2.default.getCurrentPeer(),
      isMember: _DialogStore2.default.isMember(),
      messages: _MessageStore2.default.getMessages(),
      overlay: _MessageStore2.default.getOverlay(),
      messagesCount: _MessageStore2.default.getRenderMessagesCount(),
      isActivityOpen: _ActivityStore2.default.isOpen()
    };
  };

  function DialogSection(props) {
    (0, _classCallCheck3.default)(this, DialogSection);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    var peer = _PeerUtils2.default.stringToPeer(props.params.id);
    _DialogActionCreators2.default.selectDialogPeer(peer);

    _this.onLoadMoreMessages = _this.onLoadMoreMessages.bind(_this);
    return _this;
  }

  DialogSection.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var params = nextProps.params;

    if (this.props.params.id === params.id) {
      return;
    }

    var peer = _PeerUtils2.default.stringToPeer(params.id);
    _DialogActionCreators2.default.selectDialogPeer(peer);
  };

  DialogSection.prototype.componentWillUnmount = function componentWillUnmount() {
    // Unbind from current peer
    _DialogActionCreators2.default.selectDialogPeer(null);
  };

  DialogSection.prototype.onLoadMoreMessages = function onLoadMoreMessages() {
    var peer = this.state.peer;

    if (peer) {
      _DialogActionCreators2.default.loadMoreMessages(peer);
    }
  };

  DialogSection.prototype.getComponents = function getComponents() {
    var _context$delegate$com = this.context.delegate.components;
    var dialog = _context$delegate$com.dialog;
    var logger = _context$delegate$com.logger;

    var LoggerSection = logger || _LoggerSection2.default;
    if (dialog && !(0, _lodash.isFunction)(dialog)) {
      var activity = dialog.activity || [_Activity2.default, _Call2.default, LoggerSection];

      return {
        LoggerSection: LoggerSection,
        ToolbarSection: dialog.toolbar || _Toolbar2.default,
        MessagesSection: (0, _lodash.isFunction)(dialog.messages) ? dialog.messages : _MessagesSection2.default,
        TypingSection: dialog.typing || _TypingSection2.default,
        ComposeSection: dialog.compose || _ComposeSection2.default,
        activity: (0, _lodash.map)(activity, function (Activity, index) {
          return _react2.default.createElement(Activity, { key: index });
        })
      };
    }

    return {
      LoggerSection: LoggerSection,
      ToolbarSection: _Toolbar2.default,
      MessagesSection: _MessagesSection2.default,
      TypingSection: _TypingSection2.default,
      ComposeSection: _ComposeSection2.default,
      activity: [_react2.default.createElement(_Activity2.default, { key: 1 }), _react2.default.createElement(_Call2.default, { key: 2 }), _react2.default.createElement(LoggerSection, { key: 3 })]
    };
  };

  DialogSection.prototype.render = function render() {
    var _state = this.state;
    var peer = _state.peer;
    var isMember = _state.isMember;
    var messages = _state.messages;
    var overlay = _state.overlay;
    var messagesCount = _state.messagesCount;

    var _getComponents = this.getComponents();

    var ToolbarSection = _getComponents.ToolbarSection;
    var MessagesSection = _getComponents.MessagesSection;
    var TypingSection = _getComponents.TypingSection;
    var ComposeSection = _getComponents.ComposeSection;
    var activity = _getComponents.activity;


    return _react2.default.createElement(
      'section',
      { className: 'main' },
      _react2.default.createElement(ToolbarSection, null),
      _react2.default.createElement(
        'div',
        { className: 'flexrow' },
        _react2.default.createElement(
          'section',
          { className: 'dialog' },
          _react2.default.createElement(_ConnectionState2.default, null),
          _react2.default.createElement(MessagesSection, {
            peer: peer,
            messages: messages,
            overlay: overlay,
            count: messagesCount,
            isMember: isMember,
            onLoadMore: this.onLoadMoreMessages
          }),
          _react2.default.createElement(_DialogFooter2.default, { isMember: isMember, components: { TypingSection: TypingSection, ComposeSection: ComposeSection } })
        ),
        activity
      )
    );
  };

  return DialogSection;
}(_react.Component); /*
                      * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
                      */

DialogSection.contextTypes = {
  delegate: _react.PropTypes.object
};
DialogSection.propTypes = {
  params: _react.PropTypes.object
};
exports.default = _utils.Container.create(DialogSection);
//# sourceMappingURL=Dialog.react.js.map