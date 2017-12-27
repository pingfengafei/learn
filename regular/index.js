/**
 * Created by luo_f on 2017/6/2.
 */


//.

//let reg = /(foo)(bar)\1\2/
//console.log(reg.test('foobarfoobar'))

//匹配环节 \1\2\n
//替换环节 $1$2$n

// let reg = /foo{1,2}/
//
// console.log(reg.test('fo'))

let reg;

reg = /(?:foo){1,2}/ //非捕获括号
console.log(reg.test('foofoo'))

reg = /jack(?=hello|world)/
console.log(reg.test('jackworld'))

reg = /jack(?!hello|world)/
console.log(reg.test('jack121'))

reg = /[abc]/
console.log(reg.test('cdd'))

reg = /[\b]/
console.log(reg.test('\b')) //退格符向左删除一格，del向右删除一格