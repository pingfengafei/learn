/**
 * Created by luo_f on 2017/9/15.
 */
function pigIt(str){
  return str.split(' ').map((val, index)=>{
    return val.substring(1) + val.substring(0,1) + 'ay'
}).join(' ')
}

console.log(pigIt('Pig latin is cool'))