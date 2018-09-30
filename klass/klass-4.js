//通用模块的写法

!function(name, context, definition) {
  if (typeof define !== 'undefined'){
    define(definition)
  } else if (typeof module !== 'undefined'){
    module.exports = definition()
  } else {
    context[name] = definition()
  }
}('klass', this, definition)

function definition() {
  let context = this
  let proto = 'prototype'

 //肮脏的实现
 //  let fnTest = /abc/.test(()=>xyz) ? /\bsuper\b/ : /.*/
  let isSuper = /\bsuper\b/

  function klass(){}

  function isFunction(target){
    return typeof target === 'function'
  }

  function extend(o, fromSub){
    function noop(){}
    noop.prototype = this.prototype  // so it bind this

    let super = this // ???





  }


  return klass
}