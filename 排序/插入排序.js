function insertionSort(arr) {
  const len = arr.length;
  let j;
  let temp;

  // 认为第一项已经排序了，所以从索引 1 开始
  // 迭代数组来给第 i 项找到正确的位置
  for (let i = 1; i < len; i++) {
    j = i; // 使用 i 来初始化一个辅助变量
    temp = arr[i]; // 将上一步对应的值存储于一个临时变量中，便于之后将其插入到正确的位置上
    // 找到正确的位置来插入项目
    // 只要变量 j 比 0 大（数组的第一个索引为 0）,并且数组中前面的值比待比较的值大
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]; // 把这个值移到当前位置上，并减小 j
      j--;
    }
    arr[j] = temp;
  }

  return arr;
}

console.log(insertionSort([ 2, 3, 4, 1, 7, 4, 3, 6, 9, 7 ]));
