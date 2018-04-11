/**
 * Created by luo_f on 2017/9/15.
 */
function friend (friends) {
  return friends.reduce((result, item) => {return item.length === 4 ? result.concat(item) : result}, [])
}
console.log(friend(['Love', 'Your', 'Face', '1']))