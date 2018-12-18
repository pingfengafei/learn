'use strict';

var _exportModule = require('./exportModule');

var target = _interopRequireWildcard(_exportModule);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

console.log(target.default);
console.log(_exportModule.foo);
console.log(_exportModule.bar);

console.log(target);