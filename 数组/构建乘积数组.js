/**
 * 给定一个数组 A[0, 1,..., n-1]，请构建一个数组 B[0, 1,..., n-1]
 * 其中 B 中的元素 B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]
 * 要求不能使用除法
 */
function multiply(arr) {
  const res = [];
  let product = 1;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    res[i] = product;
    product *= arr[i];
  }
  product = 1;
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= product;
    product *= arr[i];
  }
  return res;
}

console.log(multiply([1, 2, 3, 4, 5]));