/**
 * Created by luo_f on 2017/9/4.
 */

function findOutlier (integers) {
  let N, flag = Math.abs(integers[0]) % 2 + Math.abs(integers[1]) % 2 + Math.abs(integers[2]) % 2
  if (flag === 0 || flag === 1) { //N是奇数
     integers.forEach(val=>{if(val % 2 !==0) N = val})
  }
  else if (flag ===2 || flag === 3) {//N是偶数
     integers.forEach(val=>{if(val % 2 === 0) N = val})
  }
  return N
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))