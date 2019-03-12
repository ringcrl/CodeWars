/**
 * 输入一个字符串，按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串 abc，则打印出由字符 a, b, c 所能排列出来的所有字符串
 * abc, acb, bac, bca, cab 和 cba
 */
function Permutation(str) {
  if (!str || str.length === 0) {
    return [];
  }
  let result = [];
  const arr = str.split('');
  let temp = '';
  ordering(arr);
  result = result.filter(function (item, index) {  //去重
    return result.indexOf(item) === index;
  });
  return result;

  function ordering(tempArr) {
    if (tempArr.length === 0) {
      result.push(temp);
      return;
    }
    for (let i = 0; i < tempArr.length; i++) {
      temp += tempArr[i];
      const insideArr = tempArr.concat();
      insideArr.splice(i, 1);
      ordering(insideArr);
      temp = temp.substring(0, temp.length - 1);   //回溯
    }
  }
}