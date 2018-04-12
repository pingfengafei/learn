/**
 * Created by luo_f on 2017/9/25.
 */

//https://www.codewars.com/kata/parseint-reloaded

let zeroToTwenty = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
}

//哎嘿嘿，想到一个简单的方法

/**
 *  依次index of billion million  thousand hundred
 *  慢慢累加
 *
 */

function noName (arr) { //返回[0-999]
  let total = 0
  if (arr.length) {
    let index = arr.indexOf('hundred')
    if (index > -1) {
      total += 100 * zeroToTwenty[arr[0]]
      arr[2] && arr[2].split('-').forEach((val) => {
        total += zeroToTwenty[val]
      })
    } else {
      arr[0] && arr[0].split('-').forEach((val) => {
        console.log(zeroToTwenty[val])
        total += zeroToTwenty[val]
      })
    }
  }
  return total
}

function parseInt (string) {
  //去除and
  let array = string.split(' ').reduce((arr, val) => {
    if (val !== 'and') {
      arr.push(val)
    }
    return arr
  }, [])

  let total = 0, rest, subArr

  let millionIndex = array.indexOf('million')
  if (millionIndex > -1) { //最大100w
    total += 1000000 //待定
  }

  rest = array.slice(millionIndex ? millionIndex + 1 : 0) //去除了百万
  let thousandIndex = rest.indexOf('thousand')
  if (thousandIndex > -1) {
    subArr = rest.slice(0, thousandIndex)
    total += noName(subArr) * 1000
  }
  subArr = rest.slice(thousandIndex > -1 ? thousandIndex + 1 : 0)
  total += noName(subArr)

  return total
}

// parseInt('one million and eight hundred forty-six thousand five hundred and forty-six')
// parseInt('one')
// parseInt('twenty')
parseInt('one hundred')