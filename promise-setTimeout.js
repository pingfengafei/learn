// setTimeout(()=>{
//   console.log('setTimeout 1')
// }, 0);
//
// (function(){
//   Promise.resolve().then(()=>{
//     console.log('promise')
//   })
// })()
//
// setImmediate(()=>{
//   console.log('setImmediate')
// })
//
// setTimeout(()=>{
//   console.log('setTimeout 2')
// }, 0);
//
// process.nextTick(()=>{
//   console.log('nextTick')
// }, 0);

setTimeout(function() {console.log(4)}, 0)
new Promise(function(resolve) {
  console.log(1)
  for (var i = 0; i < 10000; i++) { i == 9999 && resolve() }
  console.log(2)
}).then(function() { console.log(5) })
console.log(3)


1 2 3 5 4

only one event loop but multi-task deque

