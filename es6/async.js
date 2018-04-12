/**
 * Created by luo_f on 2017/5/10.
 */
'use strict';
async function test(){
  console.log('test')
 // await sleep(1000);
  console.log('async')
  return 'aaa';
};

function sleep(timeout = 1000){
  console.log('promise')
  return new Promise(resolve =>{
    setTimeout(resolve, timeout)
  });
}


console.log(test())