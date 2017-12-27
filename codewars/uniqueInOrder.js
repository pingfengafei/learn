
var uniqueInOrder=function(iterable){
  Array.isArray(iterable) ? iterable : iterable = iterable.split('')
  return iterable.reduce((uniqueArr, item, index)=>{uniqueArr[uniqueArr.length - 1] !== item ? uniqueArr.push(item) : uniqueArr; return uniqueArr }, [])
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))