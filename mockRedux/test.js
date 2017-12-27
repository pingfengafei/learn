/**
 * Created by luo_f on 2017/12/19.
 */

//test driver for mock-redux

//import createStore from './src/createStore'
let createStore = require('./src/createStore')

//这里要解决箭头函数的坑
let myActions = {
  INCREASE: function (state, num = 1) {
    let {value} = state
    value += num
    return {
      value
    }
  },

  DECREASE: function (state, num = 1) {
    let {value} = state
    value -= num

    return {
      value
    }
  },

  MAGIC: function (state) {
    let {value} = state
    value *= 10

    return this.DECREASE({
      value
    })
  },

  ADD_ASYNC: async function (state, num) { //返回一个promise
    await delay(1000)
    return this.INCREASE(state, num)
  },

  MINUS_BY_FN: function (state, num) { //返回一个function
    let that = this
    return () => {
      console.log('go here 1')
      return ()=>{
        console.log('go here 2')
        return ()=>{
          console.log('go her3')
          return that.DECREASE(state, num)
        }
      }
    }
  }
}

function delay(timer = 1000){
  return new Promise(resolve =>{
    setTimeout(()=>{
      resolve()
    }, timer)
  })
}



let initialState = {
  value: 111
}

let store = createStore(initialState, myActions)

let {DECREASE, INCREASE, MAGIC, ADD_ASYNC, MINUS_BY_FN} = store.actions

function render (props) {
  console.log(props)
}

store.subscribe(render)

INCREASE(100)
DECREASE(50)
MAGIC()
ADD_ASYNC()
INCREASE(100)

MINUS_BY_FN(100)

