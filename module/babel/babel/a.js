'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

var _b = require('./b');

// (1)

(0, _b.bar)();
function foo() {
  (0, _b.bar)(); // (2)
}