/**
 * Created by luo_f on 2017/9/7.
 */
function findUniq(arr) {
  arr.sort()
  return  arr[0] === arr[1] ? arr[arr.length - 1] : arr[0]
}

console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))