let {swap} = require('./utils')


function bubbleSort(list){
  let i
  let j
  let length = list.length
  let target

  for(i = 0; i < length - 1; i++){
    for(j = 0; j < length - 1 - i; j++){
     if(list[j] > list[j + 1]){
       swap(list,  j, j + 1)
     }
    }
  }

  return list
}

module.exports = bubbleSort