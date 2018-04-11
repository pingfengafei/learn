function findShort(s){
  return  s.split(' ').reduce((length, item, index)=>{return (length >= item.length ? item.length : length)}, 10000000000)
}

