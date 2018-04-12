/**
 * Created by luo_f on 2018/3/13.
 */

/**
 *  for forEach reduce 性能比较
 *
 */

var arr = []

function arrPushWithMockData(array, number){
  var obj = {}
  while(number){
    obj = {}
    obj.index = number
    obj.data = {aaaa : `hello ${number}`}
    array.push(obj)
    --number
  }
  return array
}

var list = arrPushWithMockData(arr, 20000)

var copyedList = []
var start = +new Date()
for(var i = 0; i < list.length; i++ ){
  copyedList.push(list[i])
}
console.log('for used time :', +new Date() - start)

var aaa = []
var start = +new Date()
list.forEach(function(item,index){
  aaa.push(item)
})
console.log('forEach used time :', +new Date() - start)

var bbb = []
var start = +new Date()
list.reduce(function(arr,item,index){
  bbb.push(item)
},[])
console.log('reduce used time :', +new Date() - start)


