// 对于给定的字符串，写一个函数combinations(str)，
// 求所有可能的组合。（结果不考虑顺序）
// 字符串长度不大于12
// 字符串遵循字典顺序

/**
 * @param {string} str 
 */
function combinations(string) {
  const res = [];
  
  for (let i = 0; i < string.length; i++) {
    helper(0, i, '');
  }

  return [...new Set(res)];

  /**
   * @param {number} start
   * @param {number} depth 0 ~ 11
   * @param {string} prefix 
   */
  function helper(start, depth, prefix) {
    for (let i = start; i < string.length; i++) {
      const next = prefix + string[i];
      if (depth === 0) {
        res.push(next);
        continue;
      }
      helper(i + 1, depth - 1, next);
    }
  }
}

console.log(combinations('abc')); // ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc']
console.log(combinations('aac')); // ['a', 'c', 'aa', 'ac',  'aac']