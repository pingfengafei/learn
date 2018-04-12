/**
 * Created by luo_f on 2017/5/10.
 */

var key = 'aaa';
var obj = {
  aaa : 1,
  'bbbb' : 'bbb', //v76.9.0 不支持简写
  [key] : 'hello world', //会覆盖aaa
  sayAAA(){}
};

console.log(obj);

