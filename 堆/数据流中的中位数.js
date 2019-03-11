/**
 * 如何得到一个数据流中的中位数？
 * 如果从数据流中读出奇数个数值，
 * 那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值
 * 
 * 使用 5、6 来区分中位数
 */
function getMedian(arr) {
  arr.sort((a, b) => a - b);
  if (arr.lenth % 2 === 0) {
    const left = Math.floor(arr.lenth / 2);
    const right = left + 1;
    return (arr[left] + arr[right]) / 2;
  } else {
    const mid = Math.ceil(arr.lenth / 2);
    return arr[mid];
  }
}