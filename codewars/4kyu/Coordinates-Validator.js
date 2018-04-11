/**
 * Created by luo_f on 2017/9/26.
 */

function isValidCoordinates (coordinates) {
  let array = coordinates.split(',')
  if (!array.length || array.length !== 2) {
    return false
  }

  let firstFlag = true, secondFlag = true
  let first = array[0]
  let second = array[1]

  if (isNaN(first) || isNaN(second) || /[a-zA-Z]/.test(first) || /[a-zA-Z]/.test(second)) {
    return false
  }

  first < 0 ? (Math.floor < -90 ? firstFlag = false : firstFlag = true) : (Math.ceil(first) > 90 ? firstFlag = false : firstFlag = true)
  second < 0 ? (Math.floor < -180 ? secondFlag = false : secondFlag = true) : (Math.ceil(second) > 180 ? secondFlag = false : secondFlag = true)

  return firstFlag && secondFlag
}

var ValidCoordinates = [
  '-23, 25',
  '4, -3',
  '24.53525235, 23.45235',
  '04, -23.234235',
  '43.91343345, 143'
]

var InvalidCoordinates = [
  '23.234, - 23.4234',
  '2342.43536, 34.324236',
  'N23.43345, E32.6457',
  '99.234, 12.324',
  '6.325624, 43.34345.345',
  '0, 1,2',
  '0.342q0832, 1.2324',
  '23.245, 1e1'
]

//ValidCoordinates.map(val => isValidCoordinates(val))
InvalidCoordinates.map(val => console.log(isValidCoordinates(val)))