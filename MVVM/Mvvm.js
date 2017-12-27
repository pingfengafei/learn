/**
 * Created by luo_f on 2017/9/22.
 */

/**
 *  Model-view-viewModel
 *  model--> view  view --> model
 * 
 *  属性代理
 */

let observe = require('./Observer')

function Mvvm(options) {
  this.$options = options || {};
  let data = (this._data = this.$options.data); //所以数据必须是 {data:xxxxx}
  let me = this;

  Object.keys(data).forEach(key => {
    me._proxyData(key); //代理数据
  });

  this._initComputed();

  observe(data, this); //观察数据
  this.$compile = new Compile(options.el || document.body, this);
}

Mvvm.prototype = {
  $watch: function(key, cb, options) {
    new Watcher(this, key, cb)
  },

  _proxyData: function(key, setter, getter) {
    //绑定数据到this上，有什么作用呢？
    let me = this;
    setter =
      setter ||
      Object.defineProperty(me, key, {
        configurable: false,
        enumerable: true,
        get: function() {
          return me._data[key];
        },
        set: function(newVal) {
          me._data[key] = newVal;
        }
      });
  },

  _initComputed: function() {
    let me = this;
    let computed = this.$options.computed;

    if (typeof computed === "object") {
      Object.keys(computed).forEach(key => {
        Object.defineProperty(me, key, {
          enumerable: true,
          configurable: false,
          get:
            typeof computed[key] === "function"
              ? computed[key]
              : computed[key].get, // ??
          set: () => {}
        });
      });
    }
  }
};

module.exports = Mvvm;
