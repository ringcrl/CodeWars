/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。
 * 例如序列 1,2,3,4,5 是某栈的压入顺序，序列 4,5,3,2,1 是该压栈序列对应的一个弹出序列，
 * 但 4,3,5,1,2 就不可能是该压栈序列的弹出序列。
 */
function IsPopOrder(pushV, popV) {
  if (!pushV.length || !popV.length) {
    return false;
  }
  const temp = [];
  let popIndex = 0;
  const len = pushV.length;
  for (let i = 0; i < len; i++) {
    temp.push(pushV[i]);
    while (temp.length && temp[temp.length - 1] === popV[popIndex]) {
      temp.pop();
      popIndex++;
    }
  }
  return temp.length === 0;
}