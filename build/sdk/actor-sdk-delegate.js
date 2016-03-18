"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Copyright (C) 2015-2016 Actor LLC. <https://actor.im>
 */

/**
 * Class representing a delegate for overriding default app behaviour.
 *
 * @param {object} components - Object contains custom react components.
 * @param {object} actions - Object contains custom actions.
 * @param {object} l18n - Object contains custom translations.
 */

var ActorSDKDelegate = function ActorSDKDelegate() {
  var components = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var actions = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var l18n = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
  (0, _classCallCheck3.default)(this, ActorSDKDelegate);

  this.components = {
    login: components.login || null,
    install: components.install || null,
    deactivated: components.deactivated || null,
    join: components.join || null,
    archive: components.archive || null,
    empty: components.empty || null,

    sidebar: components.sidebar || null,
    dialog: components.dialog || null
  };

  this.actions = {
    setLoggedIn: actions.setLoggedIn || null,
    setLoggedOut: actions.setLoggedOut || null
  };

  this.l18n = l18n;
};

exports.default = ActorSDKDelegate;
//# sourceMappingURL=actor-sdk-delegate.js.map