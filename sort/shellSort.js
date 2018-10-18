// function shellSort(list) {
//   var gap, i, j;
//   var temp;
//   for (gap = list.length >> 1; gap > 0; gap >>= 1)  // n / 2
//     for (i = gap; i < list.length; i++) {
//       temp = list[i];
//       for (j = i - gap; j >= 0 && list[j] > temp; j -= gap)
//         list[j + gap] = list[j];
//       list[j + gap] = temp;
//     }
// }
//
// module.exports = shellSort