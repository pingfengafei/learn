/**
 * Created by luo_f on 2017/9/11.
 */

function scramble (str1, str2) {
  var i, length = str2.length, index, result = true
  for (i = 0; i < length; i++) {
    index = str1.indexOf(str2[i])
    if (index > -1) {
     // str1 = str1.substring(0, index) + str1.substring(index + 1, str1.length)
      str1 = str1.replace(new RegExp(str2[i]), '')
    } else {
      result = false
      break
    }
  }

  return result

}



//一个不超时的版本 js的算法有时间要求吗？
function scramble(str1, str2) {
  var array1 = str1.split("").sort();
  var array2 = str2.split("").sort();
  var i = 0;
  for(var x = 0; i<array2.length && x<=array1.length; x++) {
    if(array2[i] === array1[x]) {
      i++;
    }
  }
  return (x <= array1.length);
}



console.log(scramble('rkqodlw', 'world'))
console.log(scramble('jscripts', 'javascript'))