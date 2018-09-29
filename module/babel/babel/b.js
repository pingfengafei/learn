'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = bar;

var _a = require('./a');

// (3)

(0, _a.foo)();

function bar() {
  if (Math.random()) {
    (0, _a.foo)(); // (4)
  }
}