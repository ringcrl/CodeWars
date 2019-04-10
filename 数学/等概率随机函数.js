/**
 * 已知函数 oneToFive 可以生成 [1, 5] 的随机数
 * 利用这个 oneToFive 函数生成一个可以产生 [1, 7] 随机数的函数
 */
function oneToFive() {
  return Math.floor(Math.random() * 5 + 1);
}

// 利用 oneToFive()函数生成 1-25 之间的数字
// 然后将其中的 1-21 映射成 1-7，丢弃 22-25
// 例如生成 (1，1)，(1，2)，(1，3)，则看成 oneToSeven()中的 1，如果出现剩下的 4 种，则丢弃重新生成
// 此题中 N 为5，因此可以使用rand5()*5+rand5()来产生 2 位的 5 进制数，范围就是 1 到 25
// 再去掉 22~25，剩余的除 3，以此作为 oneToSeven()的产生器。
function oneToSeven() {
  let result = 0;
  do {
    result = 5 * (oneToFive() - 1) + oneToFive();
  } while (result > 21);

  return 1 + result % 7;
}

const result = {};
for (let i = 0; i < 100000; i++) {
  const num = oneToSeven();
  if (!result[String(num)]) {
    result[String(num)] = 1;
  }
  result[String(num)] += 1;
}

console.log(result);
