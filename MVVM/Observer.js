function Observer(data) {
  this.data = data;
  this.walk(data); //?
}

Observer.prototype = {
  walk: function(data) {
    var me = this;
    Object.keys(data).forEach(key => {
      me.convert(key, data[key]); //key value
    });
  },

  convert: function(key, value) {
    //辣么为什么要用convert转换一次呢？
    this.defineReactive(this.data, key, value);
  },

  defineReactive: function(data, key, value) {
    let pub = new Pub();

    Object.defineProperty(data, key, {
      configurable: false,
      enumerable: true,
      get: () => {
        return value;
      },
      set: newVal => {
        if (value === newVal) {
          return;
        }
        value = newVal;
        let childObj = observe(value); //递归子对象
        pub.notify(); //发布订阅
      }
    });
  }
};

//Pub-Sub模式 发布-订阅模式
let uid = 0;

function Pub() {
  this.id = ++uid; //从1开始
  this.subs = []; //订阅者列表
}

Pub.prototype = {
  addSub: function(sub) {
    //添加订阅
    this.subs.push(sub);
  },
  removeSub: function(sub) {
    //退订
    let index = this.subs.index(sub);
    if (index !== -1) {
      this.subs.splice(index, 1); //删除sub，但是splice效率不高
    }
  },

  notify: function() {
    this.subs.forEach(sub => {
      sub.update(); //update其实就是统一的回调函数
    });
  }
};

//观察data
function observe(data, vm) {
  //there are noting with vm ???
  //vm -> this -> vm
  if (!data || typeof data !== "object") {
    return;
  }
  return new Observer(data);
}

module.exports = observe;
