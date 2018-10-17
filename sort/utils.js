function swap(list, firstIndex, secondIndex) {
  let temp = list[firstIndex]
  list[firstIndex] = list[secondIndex]
  list[secondIndex] = temp
}

module.exports = {
  swap
}