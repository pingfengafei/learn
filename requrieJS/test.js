/**
 * Created by luo_f on 2017/5/24.
 */

const Klass = function (method) {
  let Clz = method.constructor;
  for (var key in method) {
    if (method !== 'constructor') {
      Clz.prototype[key] = method[key];
    }
  }
  return Clz;
};

Klass.extends = function (SuperClz, sub) {
  //绑定对应的父类方法
  var Subclz = Klass(sub);
  var subPorto = Subclz.prototype;
  Subclz.prototype = new SuperClz();
  Subclz.prototype.constructor = Subclz;

  //删除父类的方法
  for (let key in Subclz.prototype) {
    if (Subclz.prototype.hasOwnProperty(key)) {
      delete Subclz.prototype[key];
    }
  }
  //添加子类的方法
  for (let key in subPorto) {
    Subclz.prototype[key] = subPorto[key].bind(this, SuperClz.prototype[key]);
  }
  Subclz =  Subclz.bind(this, SuperClz);
  return Subclz;
};


let ClassA = Klass({
  constructor: function (name, age) {
    this.name = name;
    this.age = age;
  },
  say: function (message) {
    console.log(`${this.name} : ${message}`)
  }
});

let ClassB = Klass.extends(ClassA, {
  constructor: function ($super, name, age) {
    $super(name, age);
    this.name = `subclass_${name}`
  },
  say: function ($super, message) {
   console.log('subclass_say_start');
   $super(message);
   console.log('subclass_say_end');
  }
});

//驱动测试
let classA = new ClassA('Bill Gates', 50);
let classB = new ClassB('Test Name', 45);

console.log(classA instanceof ClassA);  //true
console.log(classB instanceof ClassB);  //true
console.log(classB instanceof ClassA);  //true

classA.say('hello world');   //Bill Gates : hello world
classB.say('hello vue'); //subclass_say_start \n Test Name : hello vue \n subclass_say_end