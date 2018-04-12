/**
 * Created by luo_f on 2018/4/8.
 */


function klass(Sub, Sup){
   function Foo(){}
   Foo.prototype =   Sup
   // Sub.constructor = Sub
   Sub.prototype = new Foo()
}

function Sup(){}
Sup.prototype.name = 'hello vue'


function Sub(){
}

Sub.prototype.sayName = function(){
  return this.name
}
Sub.prototype.age = '20'
klass(Sub, Sup)

var subInstance = new Sub()

console.log(subInstance.sayName())

console.log(subInstance instanceof Sub)
console.log(subInstance instanceof Sup)
console.log(subInstance.age)
