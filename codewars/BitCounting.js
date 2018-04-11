/**
 * Created by luo_f on 2017/9/5.
 */
var countBits = function(n) {
  let length =  new Number(Math.abs(n)).toString(2).split('').sort().reverse().join('').indexOf('0')
  return length === -1 ? new Number(Math.abs(n)).toString(2).length : length
};

console.log(countBits(-10))

//高手的写法
function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}