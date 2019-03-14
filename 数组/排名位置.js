// 在一些排名中，人们收集分数。
// 挑战是按 points 排序，并计算每个人的位置。
// 但是请记住，如果两个或两个以上的人有相同的 points，
// 他们应该有相同的位置编号并按姓名排序(姓名是唯一的)。
// 例如:输入结构:
// [
//   {
//     name: "John",
//     points: 100,
//   },
//   {
//     name: "Bob",
//     points: 130,
//   },
//   {
//     name: "Mary",
//     points: 120,
//   },
//   {
//     name: "Kate",
//     points: 120,
//   },
// ]
// 输出为
// [
//   {
//     name: "Bob",
//     points: 130,
//     position: 1,
//   },
//   {
//     name: "Kate",
//     points: 120,
//     position: 2,
//   },
//   {
//     name: "Mary",
//     points: 120,
//     position: 2,
//   },
//   {
//     name: "John",
//     points: 100,
//     position: 4,
//   },
// ]
function ranking(people) {
  people.sort((a, b) => {
    if (a.points === b.points) {
      // 字符串对比使用这个 api
      return a.name.localeCompare(b.name);
    }
    return b.points - a.points;
  });


  const res = [];
  people.forEach((item, index) => {
    const prevItem = res[res.length - 1] || {};
    res.push({
      ...item,
      position: item.points === prevItem.points ?
        prevItem.position :
        index + 1,
    });
  });

  return res;
}