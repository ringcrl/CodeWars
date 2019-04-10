/**
 * 快排
 * @param {Array} arr 
 */
function quickSort(arr) {
  if (arr.length === 0) { return arr; }

  const [pivot, ...rest] = arr;
  const smaller = [];
  const bigger = [];
  
  rest.forEach((x) => {
    return x < pivot ? 
      smaller.push(x) :
      bigger.push(x);
  });

  return [...quickSort(smaller), pivot, ...quickSort(bigger)];
}

console.log(quickSort([2, 3, 4, 1, 7, 4, 3, 6, 9, 7]));