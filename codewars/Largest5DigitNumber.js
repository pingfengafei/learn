/**
 * Created by luo_f on 2017/9/7.
 */
//在一串字符串中取最大的5个数字

/**
 *  思路： 循环一下就ok了
 */

function solution (digits) {
  if (digits.length === 5) {
    return parseInt(digits)
  } else {
    let bigestNum = -1, i
    for (i = 0; i < digits.length; i++) {
      let num = parseInt(digits.substr(i, 5))
      num > bigestNum ? bigestNum = num : true
    }
    return bigestNum
  }
}

//最佳答案
function solution(digits){
  if (digits.length <= 5) return Number(digits);
  return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}

console.log(solution('1234567890'))
