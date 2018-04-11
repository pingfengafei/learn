/**
 * Created by luo_f on 2017/9/21.
 */

/**
 *  Watcher 是一个订阅者， 订阅者需要干什么呢？
 *  1. 实例化时，像订阅器注册自己
 *  2. 提供一个update的回调函数（这里只是个回调函数）
 *
 *
 *
 */


// function Watcher (vm, exp, cb) { //vm : this mvvm exp : key名字或表达式  callback
//   this.vm = vm
//   this.exp = exp
//   this.cb = cb
//   this.value = this.get()
// }

// Watcher.prototype = {
//   update: function () {
//     this.run()
//   },
//   run: function () {
//     var value = this.get()
//     var oldVal = this.value

//     if (value !== oldVal) {
//       this.value = value
//       this.cb.call(this.vm, value, oldVal)
//     }
//   },

//   get: function () {
//     Dep.target = this  //当前订阅者指向自己
//     var value = this.vm[exp] //what the fucck ?
//     Dep.target = null //重置
//     return value
//   }

// }


function Watcher(vm, expOrFn, cb){
  this.vm = vm
  this.cb = cb
  this.expOrFn = expOrFn
  this.PubUids = {} //uid

  if(typeof expOrFn === 'function'){
    this.getter = expOrFn
  }else{
    this.getter = this.parseGetter(expOrFn)
  }

  this.value = this.get() 
}

Watcher.prototype = {
  update : ()=>{
    this.run() 
  },

  run : function(){
    let value = this.get() //代码有问题吧
    let oldVal = this.value
    if(value !== oldValue){
      this.value = value
      this.cb.call(this.vm, value, oldVal)
    }
  },

  addDep : function(dep){
    if(this.PubUids.hasOwnProperty(dep.id)){
      dep.addSub(this)
      this.PubUids[dep.id] = dep //what the fucck ?
    }
  },

  get : ()=>{
    Dep.target = this
    var value = this.getter.call(this.vm, this.vm) //???
    Dep.target = null
    return value //what the fucck again ???
  },

  parseGetter : (exp)=>{ //
    if(/[^\w.$]/.test(exp)){
      return
    }

    let exps = exp.split('')

    return function(obj){ //返回一个闭包函数
        if(!obj){
          return 
        }
        exps.forEach((val, index)=>{
          obj = obj[exps[index]]
        })
      return obj //返回最后一个对象的方法？？
    }
  }
}
