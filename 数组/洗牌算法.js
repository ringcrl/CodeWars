/**
 * 概率随机的洗牌算法
 */
function random_shuffle(A) {
  for (let i = 0; i < A.length; i++) {
    const j = Math.floor(Math.random() * (A.length - i) + i);
    swap(A, i, j);
  }
  return A;
}

function swap(A, i, j) {
  [ A[i], A[j] ] = [ A[j], A[i] ];
}

// 模拟用户数组

const users = [];
for (let i = 0; i < 400; i++) {
  users.push(i);
}

random_shuffle(users);

// 前10个中奖的 - 1等奖
const award1 = users.slice(0, 10);

// 后10个中奖 - 2等奖
const award2 = users.slice(10, 20);

console.log(award1);
console.log(award2);
