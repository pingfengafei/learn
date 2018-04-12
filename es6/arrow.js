/**
 * Created by luo_f on 2017/5/10.
 */

const bob = {
  name: 'bob',
  sayName: function() { //不建议在函数作为方法时用箭头函数
    console.log(this.name);
    (function a(){
      console.log('普通函数this指向全局 ： ',this.name);
    })();
    (function b(){
      console.log('通过绑定this获取name ：', this.name);
    })(this);
    (()=>{console.log('箭头函数指向父对象的this ：', this.name)})()
  }
};

bob.sayName(); //这里一定要+;

(function(arguments){
  console.log(arguments);
  (()=> console.log(arguments))();
})([1,2,3]);
