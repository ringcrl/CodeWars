/**
 * 在一个字符串中找到第一个只出现一次的字符，并返回它的位置
 */
function FirstNotRepeatingChar(str) {
  const cnts = Array(str.length).fill(0);
  for (let i = 0; i < str.length; i++) {
    cnts[str[i]]++;
  }
  for (let i = 0; i < str.length; i++) {
    if (cnts[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(FirstNotRepeatingChar([1, 2, 3, 4, 3, 2, 1]));