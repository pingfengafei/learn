/**
 * Created by luo_f on 2017/12/20.
 */

function isPlainObject (target) {
  if (Object.prototype.toString.call(target) !== '[object Object]') return false

  let proto = target
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(target) === proto
}

function isFn (target) {
  return Object.prototype.toString.call(target) === '[object Function]'
}

function isPromise (target) {
  return typeof  target.then === 'function'
}

module.exports = {
  isPlainObject,
  isFn,
  isPromise
}