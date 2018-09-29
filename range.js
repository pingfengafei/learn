// const isOver = i => i === 'isOver'
// const range = (start, end) => () => start < end ? ++start : 'isOver'
//
// const map = (f, cb)=>{
//   let i = f()
//   return ()=>{
//     if(!isOver(i)){
//       return cb(i, i = f())
//     }
//     return i
//   }
// }
//
// const forEach = (f, cb)=>{
//   let i = f()
//   if(!isOver(i)){
//     cb(i)
//     forEach(f, cb)
//   }
// }
//
// var a = map(range(1, 10), (i)=>{
//   return i *i
// })
//
// forEach(a, console.log)

