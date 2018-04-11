!function (name, context, definition) {
  if (typeof define === 'function') define(definition) //AMD规范
  else if (typeof module !== 'undefined') module.exports = definition() //commonJS规范
  else context[name] = definition()  // this.Kalss = definition()
}('Klass', this, function () {
  var context = this
    , f = 'function'
    , fnTest = /xyz/.test(function () {xyz}) ? /\bsuper\b/ : /.*/ // ???
    , proto = 'prototype'

  function Klass (o) {
    return extend.call(isFn(o) ? o : function () {}, o, 1)
  }

  function isFn (fn) {
    return Object.prototype.toString.call(a) === '[object Function]'
  }

  //看不懂
  function wrap (k, fn, $super) {
    return function () {
      var tmp = this.$super
      this.$super = $super[proto][k] //super.prototype[k] method
      var undef = {}.fabricatedUndefined //fabricated捏造
      var ret = undef
      try {
        ret = fn.apply(this, arguments)
      } finally {
        this.$super = tmp
      }
      return ret
    }
  }

  function process (what, object, $super) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        what[key] = isFn(object[key]) && isFn($super[proto][key]) &&
        fn.test(object[key]) ? wrap(key, object[key], $super) : object[key]
      }
    }
  }

  function extend (object, fromSub) {
    function Noop () {}

    Noop[proto] = this[proto]
    var sup = this
      , prototype = new Noop() // ???
      , isFunction = isFn(object)
      , _constructor = isFunction ? object : this
      , _methods = isFunction ? {} : object //什么鬼

    function fn () {
      if (this.initialize)
        this.initialize.apply(this, arguments)
      else {
        fromSub || isFunction && sup.apply(this, arguments)
        _constructor.apply(this, arguments)
      }
    }

    fn.methods = function(object){
      process(prototype, )
    }
  }

})

//console.dir(module)
// Module {
//   id: '.',
//     exports: {},
//   parent: null,
//     filename: 'C:\\ctrip-luofei\\learn\\klass\\klass.js',
//     loaded: false,
//     children: [],
//     paths:
//   [ 'C:\\ctrip-luofei\\learn\\klass\\node_modules',
//     'C:\\ctrip-luofei\\learn\\node_modules',
//     'C:\\ctrip-luofei\\node_modules',
//     'C:\\node_modules' ] }