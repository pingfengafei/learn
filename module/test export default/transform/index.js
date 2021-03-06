'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _foo = require('./foo');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_foo).default;
  }
});

var _bar = require('./bar');

Object.defineProperty(exports, 'bar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bar).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}