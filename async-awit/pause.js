// node原生支持了async await
let sleep = time => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve('hi world')}, time || 1000)
  })
}

var start = async () => {
  let result = await sleep()
  console.log('result', result)
}

start()