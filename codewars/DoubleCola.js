/**
 * Created by luo_f on 2017/9/7.
 */
//这个场景设计的不合理
//五个人排队买可乐，一人买一瓶，喝完人会double，且放到队列后面
//继续排队

//不能简单的数组shift push，明显爆内存
//需要从数学规律上看
// 2^n * 5 + index === m

function whoIsNext (names, r) {
  var length = names.length
  let index = Math.floor(Math.log2((r + length) / length))
  return names[Math.ceil((r + length - length * Math.pow(2, index)) / Math.pow(2, index)) - 1]
}

names = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

console.log(whoIsNext(names, 1))
console.log(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 52))
console.log(whoIsNext(['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard'], 7230702951))