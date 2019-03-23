/**
 * 如果一个月的第一天是周五
 * 大多数时候这个月有 5 个周五、周六、周天
 * 给定一个年份区间，找出所有的情况，返回格式
   solve(2016,2020) = ['Jan','May',5]
 */

function solve(begin, end) {
  const month = ['Jan', 'Mar', 'May', 'Jul', 'Aug', 'Oct', 'Dec'];
  let count = 0;
  const res = [];
  for (let i = begin; i <= end; i++) {
    for (const m of month) {
      const date = `${m} 1, ${i}`;
      if (new Date(date).getDay() === 5) {
        res.push(m);
        count++;
      }
    }
  }
  return [res[0], res[res.length - 1], count];
}