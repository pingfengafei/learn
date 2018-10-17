/**
 * 插入排序
 * 第一个元素作为基准
 */

function insertionSort(list) {
  for (let i = 1; i < list.length; i++) { //从第二个元素开始
    let target = list[i] //取出下个元素

    /**
     * 这里有个理解逻辑：
     * 对于按照已经升序好的数组，target如果从左往右比较，只要小于某个元素，直接放在元素前
     * 从又往左扫，如果大于某个数，直接放到元素后
     * 因为已经排序好了
     */
    for (let j = 0; j < i; j++) { //已排序的数组中从前往后扫描
        if(target <= list[j]){ //小于某个元素直接[插入]元素左边（即占用该元素的位置，该元素后移一位）
          list.splice(j, 0, target) //插入target
          list.splice(i + 1, 1) // 将target从原先的位置上删除, +1 是因为此时i被往后移动了1位置

          break
        }
    }
  }

  return list
}

module.exports = insertionSort


