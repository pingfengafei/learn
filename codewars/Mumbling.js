/**
 * Created by luo_f on 2017/9/4.
 */

function accum(s) {

  function repeat(char, index){
    let out = ''
    char = char.toLowerCase()
    for(let i = 0; i < index; i++){
      out += char
    }
      return out
  }


  return s.split('').reduce((sum, char, index)=>{
    index !== s.length - 1
      ? sum += char.toUpperCase() + repeat(char, index) + '-'
      : sum += char.toUpperCase() + repeat(char, index)
    return sum
  }, '')
}

console.log(accum('ZpglnRxqenU'))