/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组 {3，32，321}，
 * 则打印出这三个数字能排成的最小数字为 321323。
 */
function PrintMinNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return [];
  }
  let result = [];
  let temp = '';
  ordering(numbers);

  result = result.map(Number).reduce(function (min, a) {  //最小值
    return min < a ? min : a;
  }, Infinity);
  return result;

  function ordering(tempArr) {
    let innerLen = 0;
    if (tempArr.length === 0) {
      result.push(temp);
      return;
    }
    for (let i = 0; i < tempArr.length; i++) {
      innerLen = tempArr[i].toString().length;
      temp += tempArr[i];
      const insideArr = tempArr.concat();
      insideArr.splice(i, 1);
      ordering(insideArr);
      temp = temp.substring(0, temp.length - innerLen);   //回溯
    }
  }
}