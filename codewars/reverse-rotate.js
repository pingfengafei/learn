/**
 * Created by luo_f on 2017/9/7.
 */
function revrot (str, sz) {
  if (str && sz) {
    let arr = []
    while (str) {  //切割数组
      arr.push(str.substr(0, sz))
      str = str.substring(sz)
    }
    return arr.map((item, index) => {
      if(item.length < sz)
        return ''

      let value = Array.prototype.reduce.call(item, (count, num, index) => {return count + num * num * num}, 0)
      return (value % 2 ? item.substring(1) + item[0] : item.split('').reverse().join(''))
    }).join('')
  } else {
    return ''
  }
}

console.log('1', revrot('123456987654', 6))
console.log('1', revrot("123456779", 0))
console.log('1', revrot("123456987653", 6))
console.log('1', revrot("563000655734469485", 4))
