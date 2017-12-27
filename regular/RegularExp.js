/**
 * Created by luo_f on 2017/5/10.
 */
var arr = ['abcde', 'pppp', 'pph', 'hp', 'abcdepf'];

arr.forEach((item, index)=>{
  if(/p(?!h)/.test(item)){ //匹配p当且仅当p后面不跟h
    console.log(item);
  }
});