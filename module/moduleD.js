const moduleA = require('./moduleA')
exports.aa = 1
exports.bb = 2

//智能得到发生循环引用前的部分
// console.log('模块部分被加载', moduleA)