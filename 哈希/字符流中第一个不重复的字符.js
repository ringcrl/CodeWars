/**
 * 请实现一个函数用来找出字符流中第一个只出现一次的字符
 * 例如，当从字符流中只读出前两个字符 "go" 时，第一个只出现一次的字符是 "g"
 * 当从该字符流中读出前六个字符“google" 时，第一个只出现一次的字符是 "l"
 */
function FirstAppearingOnce(str) {
  const map = str.split('').reduce((prev, curr) => {
    prev[curr] = prev[curr] ?
      prev[curr] + 1 :
      1;
    return prev;
  }, {});
  for (const key in map) {
    if (map[key] === 1) {
      return key;
    }
  }
}

console.log(FirstAppearingOnce('google'));