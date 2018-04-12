/**
 * Created by luo_f on 2017/6/27.
 */

//订阅发布模型

var a = {
  'serverA': ['observerA', 'observerB', 'observerC'],
  'serverB': ['observerA', 'observerC']
}

var PubSub = {};//注意不同自动添加;

(function (p) {
  'use strict'
  var topics = {},
    lastUid = -1

  /**
   * 内部私有发布函数
   * @param topic
   * @param data
   * @private
   */
  var _publish = function (topic, data) {
    if (!topics.hasOwnProperty(topic)) {
      return false
    }
    topics[topic].forEach((val, index) => {
      val.func(data)
    })
  }

  /**
   *发布话题，把数据发送给订阅者
   *
   * @param topic  发布的话题
   * @param data  发送的数据
   */
  p.publish = function (topic, data) {
    _publish(topic, data)
  }

  /**
   *订阅者订阅话题
   *
   * @param topic 订阅的话题
   * @param func 回调函数
   * @returns {number} 订阅号，用于解除订阅
   */
  p.subscribe = function (topic, func) {
    if (!topics.hasOwnProperty(topic)) {
      topics[topic] = []
    }
    var token = ++lastUid
    topics[topic].push({token: token, func: func}) //消息中心绑定topic和订阅和函数
    return token
  }

  /**
   * @param token 解绑token
   */

  p.unSubscribe = function (token) {
    for (var key in topics) {
      for (var i = 0; i < topics[key].length; i++) {
        if (topics[key][i].token === token) {
          _remove(topics[key], i)
          --i
        }
      }
    }
  }

  //去除数组特定下标元素
  var _remove = function (arr, index) {
    arr.splice(index, 1)
  }
})(PubSub)

//测试

function subscriberA (data) {
  console.log('subscriberA ' + data)
}

function subscriberB (data) {
  console.log('subscriberB ' + data)
}

var a = PubSub.subscribe('test', subscriberA)
var b = PubSub.subscribe('test', subscriberB)
console.log(a, b)

PubSub.publish('test', 'hello world')

PubSub.unSubscribe(a) //解除订阅

PubSub.publish('test', 'hello react')

