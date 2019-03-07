/**
 * 
 * [
 * [1, 2, 3, 4],
 * [5, 6, 7, 8],
 * [9, 10, 11, 12],
 * [13, 14, 15, 16],
 * ]
 * 
 * 矩阵顺时针打印结果为
 * 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10
 */

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]

function printMatrix(matrix) {
  const res = [];
  let r1 = 0;
  let r2 = matrix.length - 1;
  let c1 = 0;
  let c2 = matrix[0].length - 1;
  while (r1 <= r2 && c1 <= c2) {
    for (let i = c1; i <= c2; i++) {
      res.push(matrix[r1][c2]);
    }
    for (let i = r1 + 1; i <= r2; i++) {
      res.push(matrix[i][c2]);
    }
    if (r1 !== r2) {
      for (let i = c2 - 1; i >= c1; i--) {
        res.push(matrix[r2][i]);
      }
    }
    if (c1 !== c2) {
      for (let i = r2 - 1; i > r1; i--) {
        res.push(matrix[i][c1]);
      }
    }
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return res;
}

console.log(printMatrix(matrix));