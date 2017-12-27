/**
 * Created by luo_f on 2017/9/7.
 */

function digital_root (n) {
  n = Math.abs(n)
  let sum = 0
  while (n > 9) {
    sum += n % 10
    n = Math.floor(n / 10) <= 9
    if(n <= 9){
      sum += n
    }
  }
  return sum > 9 ? digital_root(sum) : sum
}

//这道题有错误，没提及成功
console.log(digital_root(16))
console.log(digital_root(132189))
console.log(digital_root(493193))
console.log(digital_root(10))
console.log(digital_root(992))