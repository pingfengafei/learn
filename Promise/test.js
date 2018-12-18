const Promise = require('./promise-aplus-impl')

new Promise(resolve=> new Promise()
.then()
.then()
.then(function foo(value) {
  console.log(value)
})