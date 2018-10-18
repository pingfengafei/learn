let bubbleSort = require('./bubbleSort')
let insertionSort = require('./insertionSort')
let shellSort = require('./shellSort')
// let heapSort = require('./heapSort')
let quickSort = require('./quickSort')

let data = Array.from({length: 100000}).map((item, index) => Math.floor(Math.random() * 100000))

// console.log(list)

{
  let list = [].concat(data)
  let start = + new Date()
  let result = bubbleSort(list)
  let end = + new Date()

  console.log('bubbleSort use time : ' + (end - start))

  //console.log(result)
}
//
// {
//   let list = [].concat(data)
//   let start = + new Date()
//   let result = insertionSort(list)
//   let end = + new Date()
//
//   console.log('insertionSort use time : ' + (end - start))
// }

// {
//   let list = [].concat(data)
//   let start = + new Date()
//   let result = shellSort(list)
//   let end = + new Date()
//
//   console.log('shellSort use time : ' + (end - start))
// }

{
  let list = [].concat(data)
  let start = + new Date()
  let result = list.sort((a,b) => a -b )
  let end = + new Date()

  console.log('js origin sort use time : ' + (end - start))
}

// {
//   let list = [].concat(data)
//   let start = + new Date()
//   let result = heapSort(list)
//   let end = + new Date()
//
//   console.log('heapSort sort use time : ' + (end - start))
// }

{
  let list = [].concat(data)
  let start = +new Date()
  let result = quickSort(list)
  let end = +new Date()

  console.log('quick sort use time : ' + (end - start))
}

