/**
 * Created by luo_f on 2017/9/15.
 */
function XO(str) {
 let arr = str.split('').reduce((arr, item)=>{
   if(item.toLowerCase() === 'x'){
     arr[0].push('x')
   }else if(item.toLowerCase() === 'o'){
     arr[1].push('0')
   }
   return arr
 },[[],[]])

  return arr[0].length === arr[1].length

}

XO("xxOo")