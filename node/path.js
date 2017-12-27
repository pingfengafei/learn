/**
 * Created by luo_f on 2017/6/26.
 */

var path = require('path')

console.log(path.join('aaa', 'bbb','/ccc'))
console.log(path.resolve('ccc', '/ddd'))

console.log(path.join('../aaa', 'bbb'))

