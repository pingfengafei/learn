function getCount(str) {
  return str.split('').reduce((count, char, index)=>{'aeiouAEIOU'.indexOf(char) > -1 ? count++ : count; return count }, 0)
}

console.log(getCount("abracadabra"))