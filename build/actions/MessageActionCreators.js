'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ActorAppDispatcher = require('../dispatcher/ActorAppDispatcher');

var _ActorAppConstants = require('../constants/ActorAppConstants');

var _ActorClient = require('../utils/ActorClient');

var _ActorClient2 = _interopRequireDefault(_ActorClient);

var _EmojiUtils = require('../utils/EmojiUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (C) 2015 Actor LLC. <https://actor.im>
 */

var replaceColons = function replaceColons(text) {
  _EmojiUtils.emoji.change_replace_mode('unified');
  return _EmojiUtils.emoji.replace_colons(text);
};

exports.default = {
  setMessageShown: function setMessageShown(peer, message) {
    _ActorClient2.default.onMessageShown(peer, message);
  },

  sendTextMessage: function sendTextMessage(peer, text) {
    (0, _ActorAppDispatcher.dispatch)(_ActorAppConstants.ActionTypes.MESSAGE_SEND_TEXT, {
      peer: peer, text: text
    });
    _ActorClient2.default.sendTextMessage(peer, replaceColons(text));
  },

  sendFileMessage: function sendFileMessage(peer, file) {
    (0, _ActorAppDispatcher.dispatch)(_ActorAppConstants.ActionTypes.MESSAGE_SEND_FILE, {
      peer: peer, file: file
    });
    _ActorClient2.default.sendFileMessage(peer, file);
  },

  sendPhotoMessage: function sendPhotoMessage(peer, photo) {
    (0, _ActorAppDispatcher.dispatch)(_ActorAppConstants.ActionTypes.MESSAGE_SEND_PHOTO, {
      peer: peer, photo: photo
    });
    _ActorClient2.default.sendPhotoMessage(peer, photo);
  },

  sendClipboardPhotoMessage: function sendClipboardPhotoMessage(peer, photo) {
    _ActorClient2.default.sendClipboardPhotoMessage(peer, photo);
  },

  deleteMessage: function deleteMessage(peer, rid) {
    _ActorClient2.default.deleteMessage(peer, rid);
    (0, _ActorAppDispatcher.dispatch)(_ActorAppConstants.ActionTypes.MESSAGE_DELETE, {
      peer: peer, rid: rid
    });
  },

  addLike: function addLike(peer, rid) {
    _ActorClient2.default.addLike(peer, rid);
  },

  removeLike: function removeLike(peer, rid) {
    _ActorClient2.default.removeLike(peer, rid);
  }
};
//# sourceMappingURL=MessageActionCreators.js.map