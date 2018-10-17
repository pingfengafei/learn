let bubbleSort = require('./bubbleSort')
let insertionSort = require('./insertionSort')

let list = Array.from({length: 10}).map((item, index) => Math.floor(Math.random() * 100))

// console.log(list)

// {
//   let result = bubbleSort(list)
//   console.log(result)
// }


{
  console.log(list)
  let result = insertionSort(list)
  console.log(result)
}