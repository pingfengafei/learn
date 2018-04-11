/**
 * Created by luo_f on 2017/9/12.
 */
//计算间隔总和
function sumIntervals (intervals) {
  intervals.sort((a, b) => {return a[0] - b[0]})
  for (var i = 0; i < intervals.length - 1;) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      let newArray = []
      newArray.push(intervals[i][0])
      newArray.push(intervals[i][1] >= intervals[i + 1][1] ? intervals[i][1] : intervals[i + 1][1])
      intervals[i] = newArray
      intervals.splice(i + 1, 1)
    } else {
      i++
    }
  }

  // console.log(intervals.reduce((sum, item) => {return sum += (item[1] - item[0])}, 0))

  return intervals.reduce((sum, item) => {return sum += (item[1] - item[0])}, 0)

}

sumIntervals([
  [1, 4],
  [7, 10],
  [3, 5]
])

sumIntervals(
  [[1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]]
)
