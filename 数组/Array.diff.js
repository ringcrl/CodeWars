/**
 * 实现一个 diff 方法
 * 从数组 a 中移除所有 数组 b 的元素
   array_diff([1,2,2,2,3],[2]) == [1,3]
 */
function array_diff(a, b) {
  return a.filter(item => {
    return !b.includes(item);
  });
}