/**
 * Created by luo_f on 2017/9/12.
 */

//有空学学位运算
//http://www.jianshu.com/p/a3202bc3f7a4

Math.round = function (number) {
  return number - ~~number >=0.5 ?  1 + ~~number : ~~number
}

Math.floor = function (number) {
  return ~~number
}

Math.ceil = function (number) {
  return number - ~~number > 0 ?  1 + ~~number : ~~number
}