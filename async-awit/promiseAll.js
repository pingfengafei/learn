/**
 * Created by luo_f on 2017/11/22.
 */
// node原生支持了async await
let successPromise = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve('hi world')}, time || 1000)
  })
}

let errPromise = (time) => {
  return new Promise((resolve, reject) => {
    reject('hi error')
  })
}

var start = async () => {
  let result = await Promise.all([successPromise(1000), errPromise()])
 // console.log(result)
}

start().catch((e)=>{console.log(e)})
