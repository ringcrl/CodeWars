/**
 * 1. 数组有序
 * 2. B.length > A.length
 * 3. 有重复
 * 4. A 是否是 B 的子数组
 * @param {*} A 
 * @param {*} B 
 */
function isSubArr(A, B) {
  let ai = 0;
  let bi = 0;
  while (ai <= A.length - 1 && bi <= B.length - 1) {
    if (A[ai] === B[bi]) {
      ai++;
      bi++;
      continue;
    }
    if (A[ai] > B[bi]) {
     bi++;
     continue; 
    }
    if (A[ai] < B[bi]) {
      return false;
    }
  }

  return true;
}

console.log(isSubArr([1, 1, 2], [1, 1, 1, 2, 3, 4])); // true
console.log(isSubArr([1, 1, 3], [1, 1, 1, 2, 4])); // false