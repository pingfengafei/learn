/**
 * Created by luo_f on 2017/9/8.
 */

function solution (string) {
  return string.replace(/([A-Z])/g, ' $1')
}

//console.log(solution('camelCasingHelloWorldVueeee'))
console.log(solution('camelCasing'))