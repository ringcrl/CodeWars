本文件构建启发自 30-seconds-of-code，由 JS 文件打包生成 MD 文件

# CodeWars

- 非常好的刷题平台，面向测试用例编程，`cmd + s` 即可跑测试用例
- 题目有趣味且实用，习得的编码技巧很容易用到日常工作中
- 利用筛选条件例如【正则相关 + 好评度 + 难度】，能较为全面的掌握一个方向的知识
- 完成后发现更好的答案，重写一遍，有利于自己的编码习惯国际化

另一个刷题战场：[LeetCode](https://github.com/ringcrl/LeetCode)

docsify 阅读：[https://static.chenng.cn](https://static.chenng.cn/#/%E7%AE%97%E6%B3%95/CodeWars)

# 个人主页

实时分数：

![](https://static.chenng.cn/api/dynamic_image/codewars)

https://www.codewars.com/users/ringcrl

# 刷题参数

- Sort By: Positive Feedback，>= 90%
- Language：JavaScript
- Status：Approved
- Progress：Kata I hava not completed
- Diffculty：To 6 kyu

[每日刷题](https://www.codewars.com/kata/search/my-languages?q=&xids=completed&beta=false&order_by=satisfaction_percent+desc%2Ctotal_completed+desc)

# 已刷题目

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [位运算](#%E4%BD%8D%E8%BF%90%E7%AE%97)
  - [不用加减乘除做加法.js](#%E4%B8%8D%E7%94%A8%E5%8A%A0%E5%87%8F%E4%B9%98%E9%99%A4%E5%81%9A%E5%8A%A0%E6%B3%95js)
  - [二进制中1的个数.js](#%E4%BA%8C%E8%BF%9B%E5%88%B6%E4%B8%AD1%E7%9A%84%E4%B8%AA%E6%95%B0js)
  - [数组中只出现一次的数字.js](#%E6%95%B0%E7%BB%84%E4%B8%AD%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E6%95%B0%E5%AD%97js)
- [动态规划](#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92)
  - [丑数.js](#%E4%B8%91%E6%95%B0js)
  - [变态跳台阶.js](#%E5%8F%98%E6%80%81%E8%B7%B3%E5%8F%B0%E9%98%B6js)
  - [斐波那契数列.js](#%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0%E5%88%97js)
  - [跳台阶.js](#%E8%B7%B3%E5%8F%B0%E9%98%B6js)
- [哈希](#%E5%93%88%E5%B8%8C)
  - [字符流中第一个不重复的字符.js](#%E5%AD%97%E7%AC%A6%E6%B5%81%E4%B8%AD%E7%AC%AC%E4%B8%80%E4%B8%AA%E4%B8%8D%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%97%E7%AC%A6js)
  - [第一个只出现一次的字符位置.js](#%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%8F%AA%E5%87%BA%E7%8E%B0%E4%B8%80%E6%AC%A1%E7%9A%84%E5%AD%97%E7%AC%A6%E4%BD%8D%E7%BD%AEjs)
- [回溯](#%E5%9B%9E%E6%BA%AF)
  - [字符串的排列.js](#%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%8E%92%E5%88%97js)
  - [把数组排成最小的数.js](#%E6%8A%8A%E6%95%B0%E7%BB%84%E6%8E%92%E6%88%90%E6%9C%80%E5%B0%8F%E7%9A%84%E6%95%B0js)
- [堆](#%E5%A0%86)
  - [数据流中的中位数.js](#%E6%95%B0%E6%8D%AE%E6%B5%81%E4%B8%AD%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0js)
  - [最小的K个数.js](#%E6%9C%80%E5%B0%8F%E7%9A%84k%E4%B8%AA%E6%95%B0js)
  - [滑动窗口的最大值.js](#%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E7%9A%84%E6%9C%80%E5%A4%A7%E5%80%BCjs)
- [数组](#%E6%95%B0%E7%BB%84)
  - [二维数组的查找.js](#%E4%BA%8C%E7%BB%B4%E6%95%B0%E7%BB%84%E7%9A%84%E6%9F%A5%E6%89%BEjs)
  - [把数组排成最小的数.js](#%E6%8A%8A%E6%95%B0%E7%BB%84%E6%8E%92%E6%88%90%E6%9C%80%E5%B0%8F%E7%9A%84%E6%95%B0js-1)
  - [数组中重复的数字.js](#%E6%95%B0%E7%BB%84%E4%B8%AD%E9%87%8D%E5%A4%8D%E7%9A%84%E6%95%B0%E5%AD%97js)
  - [构建乘积数组.js](#%E6%9E%84%E5%BB%BA%E4%B9%98%E7%A7%AF%E6%95%B0%E7%BB%84js)
  - [调整数组顺序使奇数位于偶数前面.js](#%E8%B0%83%E6%95%B4%E6%95%B0%E7%BB%84%E9%A1%BA%E5%BA%8F%E4%BD%BF%E5%A5%87%E6%95%B0%E4%BD%8D%E4%BA%8E%E5%81%B6%E6%95%B0%E5%89%8D%E9%9D%A2js)
  - [连续子数组的最大和.js](#%E8%BF%9E%E7%BB%AD%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%92%8Cjs)
  - [逻辑运算.js](#%E9%80%BB%E8%BE%91%E8%BF%90%E7%AE%97js)
  - [顺时针打印矩阵.js](#%E9%A1%BA%E6%97%B6%E9%92%88%E6%89%93%E5%8D%B0%E7%9F%A9%E9%98%B5js)
- [查找](#%E6%9F%A5%E6%89%BE)
  - [数字在排序数组中出现的次数.js](#%E6%95%B0%E5%AD%97%E5%9C%A8%E6%8E%92%E5%BA%8F%E6%95%B0%E7%BB%84%E4%B8%AD%E5%87%BA%E7%8E%B0%E7%9A%84%E6%AC%A1%E6%95%B0js)
  - [旋转数组的最小数字.js](#%E6%97%8B%E8%BD%AC%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%B0%8F%E6%95%B0%E5%AD%97js)
- [栈](#%E6%A0%88)
  - [包含min函数的栈.js](#%E5%8C%85%E5%90%ABmin%E5%87%BD%E6%95%B0%E7%9A%84%E6%A0%88js)
  - [栈的压入弹出序列.js](#%E6%A0%88%E7%9A%84%E5%8E%8B%E5%85%A5%E5%BC%B9%E5%87%BA%E5%BA%8F%E5%88%97js)
  - [用两个栈实现队列.js](#%E7%94%A8%E4%B8%A4%E4%B8%AA%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97js)
- [树](#%E6%A0%91)
  - [二叉搜索树与双向链表.js](#%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%8E%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8js)
  - [二叉搜索树的后序遍历序列.js](#%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E5%BA%8F%E5%88%97js)
  - [二叉搜索树的第K个结点.js](#%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E7%9A%84%E7%AC%ACk%E4%B8%AA%E7%BB%93%E7%82%B9js)
  - [二叉树中和为某一值的路径.js](#%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E5%92%8C%E4%B8%BA%E6%9F%90%E4%B8%80%E5%80%BC%E7%9A%84%E8%B7%AF%E5%BE%84js)
  - [二叉树的下一个结点.js](#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E4%B8%8B%E4%B8%80%E4%B8%AA%E7%BB%93%E7%82%B9js)
  - [二叉树的深度.js](#%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%B7%B1%E5%BA%A6js)
  - [从上往下打印二叉树.js](#%E4%BB%8E%E4%B8%8A%E5%BE%80%E4%B8%8B%E6%89%93%E5%8D%B0%E4%BA%8C%E5%8F%89%E6%A0%91js)
  - [对称的二叉树.js](#%E5%AF%B9%E7%A7%B0%E7%9A%84%E4%BA%8C%E5%8F%89%E6%A0%91js)
  - [平衡二叉树.js](#%E5%B9%B3%E8%A1%A1%E4%BA%8C%E5%8F%89%E6%A0%91js)
  - [序列化二叉树.js](#%E5%BA%8F%E5%88%97%E5%8C%96%E4%BA%8C%E5%8F%89%E6%A0%91js)
  - [把二叉树打印成多行.js](#%E6%8A%8A%E4%BA%8C%E5%8F%89%E6%A0%91%E6%89%93%E5%8D%B0%E6%88%90%E5%A4%9A%E8%A1%8Cjs)
  - [按之字形顺序打印二叉树.js](#%E6%8C%89%E4%B9%8B%E5%AD%97%E5%BD%A2%E9%A1%BA%E5%BA%8F%E6%89%93%E5%8D%B0%E4%BA%8C%E5%8F%89%E6%A0%91js)
  - [数据流中的中位数.js](#%E6%95%B0%E6%8D%AE%E6%B5%81%E4%B8%AD%E7%9A%84%E4%B8%AD%E4%BD%8D%E6%95%B0js-1)
  - [树的子结构.js](#%E6%A0%91%E7%9A%84%E5%AD%90%E7%BB%93%E6%9E%84js)
  - [重建二叉树.js](#%E9%87%8D%E5%BB%BA%E4%BA%8C%E5%8F%89%E6%A0%91js)
- [正则](#%E6%AD%A3%E5%88%99)
  - [表示数值的字符串.js](#%E8%A1%A8%E7%A4%BA%E6%95%B0%E5%80%BC%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2js)
- [深度优先](#%E6%B7%B1%E5%BA%A6%E4%BC%98%E5%85%88)
  - [机器人的运动范围.js](#%E6%9C%BA%E5%99%A8%E4%BA%BA%E7%9A%84%E8%BF%90%E5%8A%A8%E8%8C%83%E5%9B%B4js)
- [贪心](#%E8%B4%AA%E5%BF%83)
  - [连续子数组的最大和.js](#%E8%BF%9E%E7%BB%AD%E5%AD%90%E6%95%B0%E7%BB%84%E7%9A%84%E6%9C%80%E5%A4%A7%E5%92%8Cjs-1)
- [递归](#%E9%80%92%E5%BD%92)
  - [最大长度单词分词.js](#%E6%9C%80%E5%A4%A7%E9%95%BF%E5%BA%A6%E5%8D%95%E8%AF%8D%E5%88%86%E8%AF%8Djs)
- [链表](#%E9%93%BE%E8%A1%A8)
  - [两个链表的第一个公共结点.js](#%E4%B8%A4%E4%B8%AA%E9%93%BE%E8%A1%A8%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%85%AC%E5%85%B1%E7%BB%93%E7%82%B9js)
  - [二叉搜索树与双向链表.js](#%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91%E4%B8%8E%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8js-1)
  - [从头到尾打印链表.js](#%E4%BB%8E%E5%A4%B4%E5%88%B0%E5%B0%BE%E6%89%93%E5%8D%B0%E9%93%BE%E8%A1%A8js)
  - [删除链表中重复的结点.js](#%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E4%B8%AD%E9%87%8D%E5%A4%8D%E7%9A%84%E7%BB%93%E7%82%B9js)
  - [反转链表.js](#%E5%8F%8D%E8%BD%AC%E9%93%BE%E8%A1%A8js)
  - [合并两个排序的链表.js](#%E5%90%88%E5%B9%B6%E4%B8%A4%E4%B8%AA%E6%8E%92%E5%BA%8F%E7%9A%84%E9%93%BE%E8%A1%A8js)
  - [把字符串转换成整数.js](#%E6%8A%8A%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BD%AC%E6%8D%A2%E6%88%90%E6%95%B4%E6%95%B0js)
  - [链表中倒数第K个结点.js](#%E9%93%BE%E8%A1%A8%E4%B8%AD%E5%80%92%E6%95%B0%E7%AC%ACk%E4%B8%AA%E7%BB%93%E7%82%B9js)
  - [链表中环的入口结点.js](#%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%8E%AF%E7%9A%84%E5%85%A5%E5%8F%A3%E7%BB%93%E7%82%B9js)
- [队列](#%E9%98%9F%E5%88%97)
  - [用两个栈实现队列.js](#%E7%94%A8%E4%B8%A4%E4%B8%AA%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97js-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# 位运算

## 不用加减乘除做加法.js

```js
/**
 * 写一个函数，求两个整数之和，要求不得使用 +、-、*、/ 四则运算符号
 * 
 * a ^ b 表示没有考虑进位的情况下两数的和，(a & b) << 1 就是进位
 * 递归会终止的原因是 (a & b) << 1 最右边会多一个 0
 * 那么继续递归，进位最右边的 0 会慢慢增多，最后进位会变为 0，递归终止
 */
function Add(a, b) {
  return b == 0 ? a : Add(a ^ b, (a & b) << 1);
}

console.log(Add(2, 3));
```

## 二进制中1的个数.js

```js
/**
 * 输入一个整数，输出该数二进制表示中 1 的个数
 */
function numberOf1(n) {
  let cnt = 0;
  while (n !== 0) {
    cnt++;
    n &= (n - 1);
  }
  return cnt;
}

console.log(numberOf1(10));
// (10).toString(2) 1010
```

## 数组中只出现一次的数字.js

```js
/**
 * 一个整型数组里除了一个数字之外，其他的数字都出现了两次，找出这两个数
 * 
 * 1. 两个相同的数字 ^ 结果是 0
 * 2. 0 ^ n 结果是 n
 * 3. n ^ m ^ n 结果是 m
 */
const singleNumber = function (nums) {
  let diff = nums.reduce((prev, curr) => {
    return prev ^= curr;
  });
  return diff;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
```

# 动态规划

## 丑数.js

```js
/**
 * 把只包含因子 2、3 和 5 的数称作丑数（Ugly Number）。
 * 例如 6、8 都是丑数，但 14 不是，因为它包含因子 7。
 * 习惯上我们把 1 当做是第一个丑数。
 * 求按从小到大的顺序的第 N 个丑数
 */
function getNUglyNumber(n) {
  if (n <= 6) {
    return n;
  }

  let i2 = 0;
  let i3 = 0;
  let i5 = 0;
  const dp = new Array(n).fill(0);
  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    const next2 = dp[i2] * 2;
    const next3 = dp[i3] * 3;
    const next5 = dp[i5] * 5;
    dp[i] = Math.min(
      next2,
      Math.min(next3, next5),
    );
    if (dp[i] === next2) {
      i2++;
    }
    if (dp[i] === next3) {
      i3++;
    }
    if (dp[i] === next5) {
      i5++;
    }
  }
  return dp[n - 1];
}

console.log(getNUglyNumber(10));
```

## 变态跳台阶.js

```js
/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级
 * 它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法
 * 
 * 1. 跳上 n-1 级台阶，可以从 n-2 级跳 1 级上去，也可以从 n-3 级跳 2 级上去
 *    f(n-1) = f(n-2) + f(n-3) + ... + f(0)
 * 2. 跳上 n 级台阶，可以从 n-1 级跳 1 级上去，也可以从 n-2 级跳 2 级上去.
 *    f(n) = f(n-1) + f(n-2) + ... + f(0)
 * 3. f(n) - f(n-1) = f(n-1) => f(n) = 2*f(n-1)
 */

function JumpFloorII(target) {
  const dp = new Array(target).fill(1);
  for (let i = 1; i < target; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j];
    }
  }
  return dp[target - 1];
}
```

## 斐波那契数列.js

```js
/**
 * 求斐波那契数列的第 n 项，n <= 39
 * 
 * 递归是将一个问题划分成多个子问题求解，动态规划也是如此，
 * 但是动态规划会把子问题的解缓存起来，从而避免重复求解子问题
 */
function fibonacci(n) {
  if (n <= 1) { return n; }
  const fib = [];
  fib[0] = 0;
  fib[1] = 1;
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}
```

## 跳台阶.js

```js
/**
 * 一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级
 * 求该青蛙跳上一个 n 级的台阶总共有多少种跳法
 */
function JumpFloor(n) {
  if (n <= 2) {
    return n;
  }
  let total;
  let pre2 = 1;
  let pre1 = 2;
  for (let i = 2; i < n; i++) {
    total = pre2 + pre1;
    pre2 = pre1;
    pre1 = total;
  }
  return total;
}
```

# 哈希

## 字符流中第一个不重复的字符.js

```js
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
```

## 第一个只出现一次的字符位置.js

```js
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
```

# 回溯

## 字符串的排列.js

```js
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
```

## 把数组排成最小的数.js

```js
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
```

# 堆

## 数据流中的中位数.js

```js
/**
 * 如何得到一个数据流中的中位数？
 * 如果从数据流中读出奇数个数值，
 * 那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值
 * 
 * 使用 5、6 来区分中位数
 */
function getMedian(arr) {
  arr.sort((a, b) => a - b);
  if (arr.lenth % 2 === 0) {
    const left = Math.floor(arr.lenth / 2);
    const right = left + 1;
    return (arr[left] + arr[right]) / 2;
  } else {
    const mid = Math.ceil(arr.lenth / 2);
    return arr[mid];
  }
}
```

## 最小的K个数.js

```js
/**
 * 返回数组最小的 K 个数
 * 
 * 1. 使用堆，需要构建堆这个数据结构
 * 2. 直接快排
 */
function findKthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
}
```

## 滑动窗口的最大值.js

```js
/**
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组 {2, 3, 4, 2, 6, 2, 5, 1} 及滑动窗口的大小 3，
 * 那么一共存在 6 个滑动窗口，他们的最大值分别为 {4, 4, 6, 6, 6, 5}。
 */
function maxInWindows(arr, size) {
  if (size > arr.length || size === 0) {
    return [];
  }
  const res = [];
  let maxIndex = -1;
  for (let l = 0, r = size - 1; r < arr.length; l++, r++) {
    if (maxIndex < l) {
      maxIndex = getMaxIndex(arr, l, r);
    }
    if (arr[r] > arr[maxIndex]) {
      maxIndex = r;
    }
    res.push(arr[maxIndex]);
  }
  return res;
}

function getMaxIndex(arr, l, r) {
  let index = l;
  for (let i = l; i <= r; i++) {
    if (arr[i] > arr[index]) {
      index = i;
    }
  }

  return index;
}
```

# 数组

## 二维数组的查找.js

```js
/**
 * 给定一个二维数组，其每一行从左到右递增排序，从上到下也是递增排序。
 * 给定一个数，判断这个数是否在该二维数组中。
 * 
 * Consider the following matrix:
 * [
 *  [1,   4,  7, 11, 15],
 *  [2,   5,  8, 12, 19],
 *  [3,   6,  9, 16, 22],
 *  [10, 13, 14, 17, 24],
 *  [18, 21, 23, 26, 30]
 * ]
 * 
 * Given target = 5, return true.
 * Given target = 20, return false.
 */
function matrixFind(target, matrix) {
  if (
    matrix === null ||
    matrix.length === 0 ||
    matrix[0].length === 0
  ) {
    return false;
  }

  let rows = matrix.length;
  let cols = matrix[0].length;
  let row = 0;
  let col = cols - 1;
  while (row <= rows - 1 && col >= 0) {
    if (target === matrix[row][col]) {
      return true;
    } else if (target > matrix[row][col]) {
      row++;
    } else {
      col--;
    }
  }
  return false;
}

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]

console.log(matrixFind(5, matrix));
```

## 把数组排成最小的数.js

```js
/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组 {3，32，321}，则打印出这三个数字能排成的最小数字为 321323
 * 
 * 可以看成是一个排序问题，在比较两个字符串 S1 和 S2 的大小时
 * 应该比较的是 S1+S2 和 S2+S1 的大小
 * 如果 S1+S2 < S2+S1，那么应该把 S1 排在前面，否则应该把 S2 排在前面
 */

function printMinNumber(nums) {
  if (nums === null || nums.length === 0) {
    return '';
  }

  for(let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + '';
  }
  nums.sort((s1, s2) => (s1 + s2) - (s2 + s1));
  return nums.reduce((prev, curr) => {
    return prev + curr;
  }, '');
}

console.log(printMinNumber([3, 32, 321]));
```

## 数组中重复的数字.js

```js
/**
 * 在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
 * 
 * Input:
 * {2, 3, 1, 0, 2, 5}
 * 
 * Output:
 * 2
 */

/**
 *
 * @param {Array} nums 
 */
function duplicate(nums) {
  if (nums === null || nums.length === 0) { return false; }

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return nums[i];
    }
    map[nums[i]] = 1;
  }

  return false;
}

console.log(duplicate([2, 3, 1, 0, 2, 5]));
```

## 构建乘积数组.js

```js
/**
 * 给定一个数组 A[0, 1,..., n-1]，请构建一个数组 B[0, 1,..., n-1]
 * 其中 B 中的元素 B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]
 * 要求不能使用除法
 */
function multiply(arr) {
  const res = [];
  let product = 1;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    res[i] = product;
    product *= arr[i];
  }
  product = 1;
  for (let i = len - 1; i >= 0; i--) {
    res[i] *= product;
    product *= arr[i];
  }
  return res;
}

console.log(multiply([1, 2, 3, 4, 5]));
```

## 调整数组顺序使奇数位于偶数前面.js

```js
/**
 * 调整数组顺序使奇数位于偶数前面
 * 需要保证偶数和偶数之间的相对位置不变
 */
function reOrderArray(nums) {
  // 奇数个数
  let oddCount = 0;
  for (const num of nums) {
    if (num % 2 === 1) {
      oddCount++;
    }
  }

  let i = 0;
  let k = 0;
  j = oddCount;
  const res = [];
  while (k < nums.length) {
    const num = nums[k];
    if (num % 2 === 1) {
      res[i++] = num;
    } else {
      res[j++] = num;
    }
    k++;
  }

  return res;
}

console.log(reOrderArray([1, 2, 3, 4, 5]));
```

## 连续子数组的最大和.js

```js
/**
 * {6, -3, -2, 7, -15, 1, 2, 2}
 * 连续子数组的最大和为 8（从第 0 个开始，到第 3 个为止）
 */
function FindGreatestSumOfSubArray(nums) {
  if (nums === null || nums.length === 0) {
    return 0;
  }

  let greatestSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  for (const num of nums) {
    sum = sum <= 0 ? num : num + sum;
    greatestSum = Math.max(greatestSum, sum);
  }

  return greatestSum;
}

console.log(FindGreatestSumOfSubArray([6, -3, -2, 7, -15, 1, 2, 2]));
```

## 逻辑运算.js

```js
/**
 * https://www.codewars.com/kata/logical-calculator/train/javascript
 * 
 * 逻辑运算
 * - 有点像 Ramda 模式
 * 
 * @param {array} array 
 * @param {'AND'|'OR'|'XOR'} op 
 */
function logicalCalc(array, op){
  const ops = {
    'AND': function (a, b) { return a && b; },
    'OR': function (a, b) { return a || b; },
    'XOR': function (a, b) { return a !== b; },
  }
  
  return array.reduce(ops[op]);
}
```

## 顺时针打印矩阵.js

```js
/**
 * 
 * [
 * [1, 2, 3, 4],
 * [5, 6, 7, 8],
 * [9, 10, 11, 12],
 * [13, 14, 15, 16],
 * ]
 * 
 * 矩阵顺时针打印结果为
 * 1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10
 */

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]

function printMatrix(matrix) {
  const res = [];
  let r1 = 0;
  let r2 = matrix.length - 1;
  let c1 = 0;
  let c2 = matrix[0].length - 1;
  while (r1 <= r2 && c1 <= c2) {
    for (let i = c1; i <= c2; i++) {
      res.push(matrix[r1][c2]);
    }
    for (let i = r1 + 1; i <= r2; i++) {
      res.push(matrix[i][c2]);
    }
    if (r1 !== r2) {
      for (let i = c2 - 1; i >= c1; i--) {
        res.push(matrix[r2][i]);
      }
    }
    if (c1 !== c2) {
      for (let i = r2 - 1; i > r1; i--) {
        res.push(matrix[i][c1]);
      }
    }
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return res;
}

console.log(printMatrix(matrix));
```

# 查找

## 数字在排序数组中出现的次数.js

```js
/**
 * Input:
 * nums = 1, 2, 3, 3, 3, 3, 4, 6
 * K = 3
 * 
 * Output:
 * 4
 */
function GetNumberOfK() {
  
}
```

## 旋转数组的最小数字.js

```js
/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
 * 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
 * 
 * 例如数组 {3, 4, 5, 1, 2} 为 {1, 2, 3, 4, 5} 的一个旋转，该数组的最小值为 1。
 */
function minNumberInRotateArray() {
  
}
```

# 栈

## 包含min函数的栈.js

```js
/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈最小元素的 min 函数。
 */
class Stack {
  constructor() {
    this.stack = [];
  }
  push(node) {
    this.stack.push(node);
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  min() {
    // return Math.min.apply(null, this.stack);
    return Math.min(...this.stack);
  }
}
```

## 栈的压入弹出序列.js

```js
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
```

## 用两个栈实现队列.js

```js
/**
 * 用两个栈来实现一个队列，完成队列的 Push 和 Pop 操作。
 */

 class stackToQueue {
   constructor() {
    this.stack1 = [];
    this.stack2 = [];
   }

   push(node) {
     this.stack1.push(node);
   }

   pop() {
     let temp = this.stack1.pop();
     while (temp) {
       this.stack2.push(temp);
       temp = this.stack1.pop();
     }
     const result = this.stack2.pop();
     temp = this.stack2.pop();
     while (temp) {
       this.stack1.push(temp);
       temp = this.stack2.pop();
     }
     return result;
   }
 }
```

# 树

## 二叉搜索树与双向链表.js

```js
/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。、
 * 
 * 1. 将左子树构成双向链表，返回的是左子树的尾结点，将其连接到 root 的左边
 * 2. 将右子树构成双向链表，将其追加到 root 结点之后，并返回尾结点
 * 3. 向左遍历返回的链表至头结点处，即为所求双向链表的首结点
 */
function convert(root) {
  if (!root) { return null; }
  let lastNode = null;
  lastNode = convertNode(root);
  let head = lastNode;
  while (head && head.left) {
    head = head.left;
  }
  return head;

  function convertNode(node) {
    if (!node) {
      return;
    }

    if (node.left) {
      lastNode = convertNode(node.left);
    }
    node.left = lastNode;

    if (lastNode) {
      lastNode.right = node;
    }
    lastNode = node;

    if (node.right) {
      lastNode = convertNode(node.right);
    }

    return lastNode;
  }
}
```

## 二叉搜索树的后序遍历序列.js

```js
/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 假设输入的数组的任意两个数字都互不相同。
 */
function verifySquenceOfBST(sequence) {

}
```

## 二叉搜索树的第K个结点.js

```js
/**
 * 利用二叉查找树中序遍历有序的特点
 */
function KthNode(root, k) {}
```

## 二叉树中和为某一值的路径.js

```js
/**
 * 输入一颗二叉树和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 */
function FindPath(root, target) {}
```

## 二叉树的下一个结点.js

```js
/**
 * 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。
 * 注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。
 */

```

## 二叉树的深度.js

```js

```

## 从上往下打印二叉树.js

```js

```

## 对称的二叉树.js

```js

```

## 平衡二叉树.js

```js

```

## 序列化二叉树.js

```js

```

## 把二叉树打印成多行.js

```js

```

## 按之字形顺序打印二叉树.js

```js

```

## 数据流中的中位数.js

```js

```

## 树的子结构.js

```js

```

## 重建二叉树.js

```js

```

# 正则

## 表示数值的字符串.js

```js
/**
 * true
 * "+100"
 * "5e2"
 * "-123"
 * "3.1416"
 * "-1E-16"
 * 
 * false
 * "12e"
 * "1a3.14"
 * "1.2.3"
 * "+-5"
 * "12e+4.3"
 * 
 * 使用正则表达式进行匹配
 */
function isNumeric(str) {
  if (str === null || str === '') {
    return false;
  }
  return /[+-]?\\d*(\\.\\d+)?([eE][+-]?\\d+)?/.test(str);
}
```

# 深度优先

## 机器人的运动范围.js

```js

```

# 贪心

## 连续子数组的最大和.js

```js

```

# 递归

## 最大长度单词分词.js

```js
/**
 * https://www.codewars.com/kata/word-segmentation-maxmatch/train/javascript
 * 
 * MaxMatch 句子分词
 * - 找到最大长度单词进行分词
 * 
 * @param {string} sentence 
 */
function maxMatch(sentence){
  for (let i = sentence.length; i > 0; i--) {
    const word = sentence.slice(0, i);
    if (
      i === 1 ||
      VALID_WORDS.has(word)
    ) {
      return [word].concat(maxMatch(sentence.slice(i)));
    }
  }  
  
  return [];
}
```

# 链表

## 两个链表的第一个公共结点.js

```js

```

## 二叉搜索树与双向链表.js

```js

```

## 从头到尾打印链表.js

```js

```

## 删除链表中重复的结点.js

```js

```

## 反转链表.js

```js

```

## 合并两个排序的链表.js

```js

```

## 把字符串转换成整数.js

```js

```

## 链表中倒数第K个结点.js

```js

```

## 链表中环的入口结点.js

```js

```

# 队列

## 用两个栈实现队列.js

```js

```

