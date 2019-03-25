/**
 * 数组中所有数字都相同，除了一个不同
 */
function findUniq(arr) {
  arr.sort();
  return arr[0] !== arr[1] ?
    arr[0] :
    arr.pop();
}