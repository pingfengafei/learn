/**
 * Created by luo_f on 2017/5/24.
 */
function Klass(obj) {
  const {constructor, say} = obj;
  return function (name, age) { //这里有个坑，箭头函数没有constructor
    constructor(name, age);
    this.say = function (message) {
      say(message);
    };
  }
}

Klass.extends = function (cls, obj) {
  let {constructor, say} = obj;
  return function (name, age) {
    let classA = new cls(name, age);
    constructor(classA.constructor, name, age);
    this.say = function (message) {
      say(classA.say, message);
    };
  };
};

let ClassA = Klass({
  constructor(name, age){
    this.name = name;
    this.age = age;
  },
  say(message){
    console.log(`${this.name} : ${message}`);
  }
});

let ClassB = Klass.extends(ClassA, {
  constructor($super, name, age) {
    $super(name, age);
    this.name = `subclass_${name}`
  },
  say($super, message) {
    console.log('subclass_say_start');
    $super(message);
    console.log('subclass_say_end');
  }
});

// ClassB.prototype = new ClassA();
// ClassB.prototype.constructor = ClassB;

//驱动测试
let classA = new ClassA('Bill Gates', 50);
let classB = new ClassB('Test Name', 45);

console.log(classA instanceof ClassA);
console.log(classB instanceof ClassB);
console.log(classB instanceof ClassA);

//classA.say('hello world');
classB.say('hello vue');