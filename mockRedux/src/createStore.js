/**
 * Created by luo_f on 2017/12/19.
 */

let utils = require('./utils')
let {isPlainObject, isFn, isPromise} = utils

let createStore = (initialState, actions) => {
  let curState = initialState
  let subscribeList = []
  let store = {}

  store.actions = Object.keys(actions).reduce((obj, actionType) => {
    obj[actionType] = (actionPayload) => {
      return dispatch(actionType, actionPayload)
    }
    return obj
  }, {})

  let getState = () => {
    return curState
  }

  let subscribe = (fn) => {
    subscribeList.push(fn)
    let index = subscribeList.length - 1

    return () => {
      subscribeList.splice(index, 1)
    }
  }

  let dispatch = (actionType, actionPayload) => {

    console.log('actionType', actionType)
    let nextState = actions[actionType](curState, actionPayload)

    let updateState = (nextState) => {
      if (isPlainObject(nextState)) {
        curState = nextState
        subscribeList.forEach((fun, index) => {
          fun(curState)
        })
        return curState
      }

      if (isFn(nextState)) {
        return updateState(nextState(curState, actionPayload))
      }
      // if (isPromise(nextState)) {
      //   return nextState.then(updateState)
      // }

      return curState
    }

    return updateState(nextState)
  }

  store = {
    subscribe,
    dispatch,
    getState,
    actions: store.actions
  }

  return store
}

module.exports = createStore
