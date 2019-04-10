/**
 * 并归排
 * 1. 归并排序使用了分治的思想，而这个过程需要使用递归来实现
 * @param {Array} arr 
 */
function mergeSort(arr) {
  // 如果分解到只剩下一个数，返回该数
  if (arr.length === 1) { return arr; }

  // 将数组分成左右两半
  const mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  // 对两半分别进行排序
  left = mergeSort(left);
  right = mergeSort(right);

  // 合并排序后的两半
  return merge(left, right);
}

function merge(a, b) {
  const merged = [];
  let mi = 0;
  let ai = 0;
  let bi = 0;

  // 轮流从两个数组中取出较小的值，放入合并后的数组
  while (ai < a.length && bi < b.length) {
    if (a[ai] <= b[bi]) {
      merged[mi++] = a[ai++];
    } else {
      merged[mi++] = b[bi++];
    }
  }

  // 将某个数组内剩余的数字合并后放入数组中
  if (ai < a.length) {
    for (let i = ai; i < a.length; i++) {
      merged[mi++] = a[i];
    }
  } else {
    for (let i = bi; i < b.length; i++) {
      merged[mi++] = b[i];
    }
  }

  return merged;
}

console.log(mergeSort([2, 3, 4, 1, 7, 4, 3, 6, 9, 7]));