/**
 * Created by luo_f on 2017/9/8.
 */
// https://www.codewars.com/kata/54d512e62a5e54c96200019e/train/javascript

function humanReadable (seconds) {

  var h = Math.floor(seconds / 3600)
  var m = Math.floor((seconds - h * 3600) / 60)

  var s = seconds - h * 3600 - 60 * m

  h >= 10 ? h = h + ':' : h = ('0' + h + ':')
  m >= 10 ? m = m + ':' : m = ('0' + m + ':')
  s >= 10 ? s = s + ':' : s = ('0' + s)

  return h + m + s

}

console.log(humanReadable(5))
console.log(humanReadable(86399))