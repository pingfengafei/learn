/**
 * Created by luo_f on 2017/9/11.
 */

//war3 打多了吧 who is yourdaddy?


function score (dice) {
  var objDice = {}, totalScore = 0
  dice.forEach((val) => {
    objDice[val] ? ++objDice[val] : objDice[val] = 1
  })
  let key
  for (key in objDice) {
    switch (key) {
      case '1': {
        totalScore += 1000 * Math.floor(objDice['1'] / 3) + 100 * (objDice['1'] % 3)
        break
      }
      case '2': {
        totalScore += 200 * Math.floor(objDice['2'] / 3)
        break
      }
      case '3': {
        totalScore += 300 * Math.floor(objDice['3'] / 3)
        break
      }
      case '4': {
        totalScore += 400 * Math.floor(objDice['4'] / 3)
        break
      }
      case '5': {
        totalScore += 500 * Math.floor(objDice['5'] / 3) + 50 * (objDice['5'] % 3)
        break
      }
      case '6': {
        totalScore += 600 * Math.floor(objDice['6'] / 3)
        break
      }
      default:
        return
    }
  }
  return totalScore
}

score([2, 3, 4, 6, 2])
score([4, 4, 4, 3, 3])
score([2, 4, 4, 5, 4])
score([ 5, 1, 3, 4, 1])