function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      // 内循环 - 外循环中已经跑过的轮数，避免内循环不必要的比较
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, i, j) {
  [ arr[i], arr[j] ] = [ arr[j], arr[i] ];
}

console.log(bubbleSort([ 2, 3, 4, 1, 7, 4, 3, 6, 9, 7 ]));
