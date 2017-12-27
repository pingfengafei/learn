/**
 * Created by luo_f on 2017/9/19.
 */
function countOnes(left, right) {
    let count = 0;
    for(var i = left; i <= right; i++){
      count += i.toString(2)
    }
}