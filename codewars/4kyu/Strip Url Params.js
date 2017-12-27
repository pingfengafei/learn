/**
 * Created by luo_f on 2017/9/28.
 */
function stripUrlParams (url, paramsToStrip = []) {
  let arr = url.split('?')
  if (!arr[1]) {
    return arr[0]
  } else {
    return arr[0] + '?' + arr[1].split('&').reduce((newArr, val) => {
        if (paramsToStrip.indexOf(val.split('=')[0]) !== -1) { //去除val
        } else {
          let hasKey = false
          newArr.forEach((item) => {
            if (item.split('=')[0] === val.split('=')[0]) {
              hasKey = true
            }
          })
          if (!hasKey) {
            newArr.push(val)
          }
        }
        return newArr
      }, []).join('&')
  }
}

console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']))