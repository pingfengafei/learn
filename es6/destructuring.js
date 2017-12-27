// /**
//  * Created by luo_f on 2017/5/10.
//  */
// var [a,b] = [1,2,3];
// console.log(a,b);
//
// var [a, ...b] = [1,2,3,4];
// console.log(a,b);
//
// var obj = {a : 'hello world', b : 'hello react', c: 'hello vue' };
//
// var {a, b,c} = obj;
//
// console.log(a,b,c);
//
//
// var obj = {a : 'hello world', b : 'hello react', c: 'hello vue' };
//
// var {a,b} = obj;
//
// console.log(a,b);
//
// var [a = 2] = [];
// console.log(a);
//
// var {obj = {a: 111}} = {obj : {a : 222}}
// console.log(obj);
//
// var obj = {a : 1, b : 2};
// console.log({...obj})


var _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };

var obj = {a: 1, b: 2};
console.log(_extends({}, obj, {b: 3}));