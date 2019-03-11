/**
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组 {2, 3, 4, 2, 6, 2, 5, 1} 及滑动窗口的大小 3，
 * 那么一共存在 6 个滑动窗口，他们的最大值分别为 {4, 4, 6, 6, 6, 5}。
 */
function maxInWindows(arr, size) {
  if (size > arr.length || size === 0) {
    return [];
  }
  const res = [];
  let maxIndex = -1;
  for (let l = 0, r = size - 1; r < arr.length; l++, r++) {
    if (maxIndex < l) {
      maxIndex = getMaxIndex(arr, l, r);
    }
    if (arr[r] > arr[maxIndex]) {
      maxIndex = r;
    }
    res.push(arr[maxIndex]);
  }
  return res;
}

function getMaxIndex(arr, l, r) {
  let index = l;
  for (let i = l; i <= r; i++) {
    if (arr[i] > arr[index]) {
      index = i;
    }
  }

  return index;
}