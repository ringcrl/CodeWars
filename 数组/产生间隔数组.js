/**
  generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
  generateRange(1, 10, 3) // should return array of [1,4,7,10]
 */
function generateRange(min, max, step) {
  const arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}