const isFunction = fn => fn && Object.prototype.toString.call(fn) === '[object Function]'
const isObject = obj => obj && Object.prototype.toString.call(obj) === '[object Object]'
const isThenable = thenable => (isFunction(fn) || isObject(obj)) && thenable.then !== undefined
const isPromise = promise => promise instanceof Promise

const PENDING = 'pending'
const FULLFILLED = 'fulfilled'
const REJECTED = 'rejected'




function Promise(f){
  this.state = PENDING
  this.onResolvedCallbacks = []
  this.onRejectedCallbacks = []

  let resolve = value =>{
    if(this.state !== PENDING){
      return
    }

    this.state = FULLFILLED
  }

  let reject = reason =>{

  }

  try{
    f(resolve, reject)
  }catch(e){
    reject(e)
  }
}

Promise.prototype.then =