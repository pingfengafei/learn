function Parent(name){
  this.name = name
  this.hobby = ['bike', 'read']
}

function Child(name,age){
  Parent.call(this, name)

  this.name = name
  this.age = age
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

let child = new Child('pingfenagefei', 26)
