function quickSort(list){
  let pivot = list[0] // simple and right
  let leftList = []
  let rightList = []
  let length = list.length

  let i

  if(length < 2){
    return list
  }

  for(i = 1; i < length; i++){
    if(list[i] <= pivot){
      leftList.push(list[i])
    }else{
      rightList.push(list[i])
    }
  }

  return [].concat(quickSort(leftList),pivot, quickSort(rightList))
}

module.exports = quickSort
