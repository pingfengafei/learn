// setInterval(() => {
//   //setImmediate和setTimeout 0 的先后顺序是不确定的，这个测试下，通常是setImmediate比较快
//   setImmediate(() => {
//     console.log('hello world')
//   })
//   setTimeout(() => {console.log('hello vue')}, 0)
//
// }, 2000)
//

//
// setTimeout(()=>{
//   console.log('timer1')
//
//   Promise.resolve().then(function() {
//     console.log('promise1')
//   })
// }, 0)
//
// setTimeout(()=>{
//   console.log('timer2')
//
//   Promise.resolve().then(function() {
//     console.log('promise2')
//   })
// }, 0)
//
// setTimeout(()=>{console.log(1)}, 0)
// (function foo(){return Promise.resolve().then(()=>{console.log('2')})})()


// console.log(1)
// setTimeout(()=>{console.log('宏1')}, 0);
// (function foo(){return Promise.resolve().then(()=>{console.log('微1')})})();
// setTimeout(()=>{console.log('宏2')}, 0);
// (function foo(){return Promise.resolve().then(()=>{console.log('微2')})})();
// console.log(2)


console.log(1)
setTimeout(()=>{console.log('宏1')}, 0);
(function foo(){return Promise.resolve().then(()=>{console.log('微1')})})();
setTimeout(()=>{console.log('宏2')}, 0);
(function foo(){return Promise.resolve().then(()=>{console.log('微2')})})();
console.log(2)






