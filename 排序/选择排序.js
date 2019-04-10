function selectionSort(arr) {
  const len = arr.length;
  let indexMin;
  for (let i = 0; i < len - 1; i++) { // 控制迭代轮次
    indexMin = i; // 假设本轮迭代的 i 值为数组的 indexMin
    for (let j = i; j < len; j++) { // 从当前 i 的值开始到数组结束
      if (arr[indexMin] > arr[j]) { // 比较是否位置 j 的值比当前最小值小
        indexMin = j; // 如果是，则改变 indexMin 为新的 j
      }
    }

    // 内循环结束，得出 indexMin 的值

    if (i !== indexMin) { // 如果该最小值与原最小值不同，则交换其值
      swap(arr, i, indexMin);
    }
  }

  return arr;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(selectionSort([2, 3, 4, 1, 7, 4, 3, 6, 9, 7]));