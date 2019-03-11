/**
 * 返回数组最小的 K 个数
 * 
 * 1. 使用堆，需要构建堆这个数据结构
 * 2. 直接快排
 */
function findKthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
}