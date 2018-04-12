/**
 * Created by luo_f on 2017/9/28.
 */
function removeZeros(array) {
  let nonZeroList = [], zeroList = []
  for(var i = 0; i < array.length; i++){
    if(array[i] === 0 || array[i] === '0'){
      zeroList[zeroList.length] = array[i]
    }else{
      nonZeroList[nonZeroList.length] = array[i]
    }
  }

  for(var i = 0; i < zeroList.length; i++){
    nonZeroList[nonZeroList.length] = zeroList[i]
  }

  return nonZeroList
}

removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14])