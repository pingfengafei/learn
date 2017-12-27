/**
 * Created by luo_f on 2017/11/22.
 */

const regeneratorRuntime = require("regenerator-runtime");

'use strict'
function _asyncToGenerator (a) {
  return function () {
    var b = a.apply(this, arguments)
    return new Promise(function (c, d) {
      function e (f, g) {
        try {var h = b[f](g), i = h.value} catch (j) {return void d(j)}
        return h.done ? void c(i) : Promise.resolve(i).then(function (j) {e('next', j)}, function (j) {e('throw', j)})
      }

      return e('next')
    })
  }
}
var sleep = function (a) {return new Promise(function (b) {setTimeout(function () {b('ok')}, a || 1e3)})},
  start = function () {
    var a = _asyncToGenerator(regeneratorRuntime.mark(function b () {
      var c
      return regeneratorRuntime.wrap(function (e) {
        for (; ;)switch (e.prev = e.next) {
          case 0:
            return console.log(sleep()), e.next = 3, sleep()
          case 3:
            c = e.sent, console.log('result', c)
          case 5:
          case'end':
            return e.stop()
        }
      }, b, void 0)
    }))
    return function () {return a.apply(this, arguments)}
  }()

start()