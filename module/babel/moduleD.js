'use strict';


const  c = require('./moduleC');
exports.aa = 1;
exports.bb = 2;
console.log(c)

// console.log(c)
//智能得到发生循环引用前的部分
// console.log('模块部分被加载', moduleA)


//搞定循环引用