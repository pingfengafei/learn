

const isFunction = fn => fn && Object.prototype.toString.call(fn) === '[object Function]'
const isObject = obj => obj && Object.prototype.toString.call(obj) === '[object Object]'
const isThenable = thenable => (isFunction(fn) || isObject(obj)) && thenable.then !== undefined
const isPromise = promise => promise instanceof Promise

const PENDING = Symbol('pending')
const FULFILLED = Symbol('fulfilled')
const REJECTED = Symbol('rejected')

// value expcetion reason

function transition(promise, state, value) {
  // if (promise.state !== PENDING){ return }

  promise.state = state
  promise.value = value

  //通知所有的then注册的函数干事情了

  setTimeout(()=>{
    let {chain} = promise
    console.log(chain)

    notifyAll(chain, state, value)
  })
}

function notifyAll(chain, state, value){
  while (chain.length){
    notify(chain.shift(), state, value)
  }
}

function notify(chain, state, value){
  let {onFulfilled, onRejected, resolve, reject} = chain

  if(state === FULFILLED){

    console.log(111, value, resolve.toString())
    resolve(value)
  }

  if(state === REJECTED){
    reject(value)
  }
}

function Promise(f) {
  this.state = PENDING

  this.chain = []

  // let ignore = false
  //
  // if(ignore){
  //   return
  // }

  let onFulfilled = value => transition(this, FULFILLED, value)
  let onRejected = reason => transition(this, REJECTED, reason)

  let resolve = value => {
    if (this.state !== PENDING){
      return
    }

    processValue(this, value, onFulfilled, onRejected)
  }

  let reject = reason => {
    onRejected(reason)
  }

  f(resolve, reject)
}

function processValue(promise, value, onFulfilled, onRejected) {
  if (promise === value){ //2.3.1
    onRejected(new TypeError('promise === value'))
  }

  if (value instanceof Promise){ //2.3.2
    if (value.state === PENDING){ return }
    if (value.state === FULFILLED){
      onFulfilled(value)
    }
    if (value.state === REJECTED){
      onRejected(value)
    }
  }

  if (!isPromise(value) && (isFunction(value) || isObject(value))){ // 2.3.3
    let then = value.then

    try {
      value.then()
    } catch (reason) {
      onRejected(reason)
    }

    if (isFunction(then)){
      // then.call(value)
      console.log('不会做2.333')
    }

    if (!isFunction(then)){
      onFulfilled(value)
    }
  }

  if (!(isFunction(value) || isObject(value))){
    onFulfilled(value)
  }
}

// this
Promise.prototype.then = function(onFulfilled, onRejected) {
  return new Promise((resolve, reject) => {
    this.chain.push({onFulfilled, onRejected, resolve, reject})
    // console.log('chain in then', this.chain)
  })
}

let promise = new Promise((resolve, reject) => {
  resolve(1000)
})

promise.then((data) => {
  console.log(data)
}, (reason) => {
  console.log(reason)
}).then((data) => {console.log(data)}, (reason) => {console.log(reason)})

// var promise = new Promise((resolve, reject) => resolve(new Promise((resolve, reject) => resolve(100))))

//then 方法是setTimeout 0 执行的