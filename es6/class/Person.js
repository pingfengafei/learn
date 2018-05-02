
/**
 * Created by luo_f on 2018/4/26.
 */

// var Person = function Person(){
//   // this 指向当前对象
//   console.log(this instanceof  Person)
// }

// var person = new Person()
//
// function Foo(){}  //变量会提升
// class Bar{} //变量不会提升


// declaration vs expression

//class  declaration and expression has the same hoisting issues
//so what is the strict mode

// declaration expression

class Foo{
  constructor (name ,age){
    this.name = name
    this.age = age
  }

  getName(){
    return this.name
  }

  getAge(){
    return this.age
  }
}

class Person extends Foo{
  constructor(name, age, sex){
    super(name, age) // call the constructor of the super class but super what???
    this.sex = sex
  }

  static warning(){
    console.log('human need eat')
  }

  get greeting(){
    return `good morning ${this.name}`
  }

}

let person = new Person('pingfengafei', 27, 'male')

console.log(person.greeting)
console.log(person.getName())

Person.warning()