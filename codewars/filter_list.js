function filter_list(l) {
  return l.reduce((arr, item)=>{typeof item === 'number' ? arr.push(item) : ''; return arr}, [])
}