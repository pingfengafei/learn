/**
 * Created by luo_f on 2017/9/8.
 */
function nextBigger (n) {
  let a = n.toString().split('')
  if (a.length === 1) {return -1}
  else {
    let rest = [-1]
    let node = a.pop()

    while (node >= rest.reduce((a, b) => {return Math.max(a, b)})) {
      rest.push((node))
      node = a.pop()
    }
    rest.push(node)
    rest = rest.sort().slice(1)
    let index

    for(var i = 0; i < rest.length; i++){
      if(node < rest[i]){
        index = i;
        break
      }
    }
    let num = rest[index]

     rest.splice(index, 1)
     return parseInt(a.join('') + num + rest.join('')) ? parseInt(a.join('') + num + rest.join('')) : -1
  }
}

// console.log(nextBigger(2017))
// console.log(nextBigger(531))
// console.log(nextBigger(111))
console.log(nextBigger(59884848483559))
console.log(nextBigger(1234567980))