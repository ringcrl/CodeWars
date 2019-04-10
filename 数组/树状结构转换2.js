/**
  - 约10W量级
  - id<20W,
  - 父子节点通过id-pid进行关联，父节点id小于子节点
  - 没有重复的id
  - 树的层级不确定有多少级，但不会太大
  - 整理好的数据，children中节点需要按照id从小到大排序

[
  {id : 25, pid : 10, name : 'apple'}, 
  {id : 100,  pid :1, name : 'tree'}, 
  {id : 10, pid : 1, name : 'fruit'}, 
  {id : 35, pid : 10, name : 'grape'}, 
  {id : 1,  pid :0, name : 'plant'}, 
  {id : 123,  pid :100, name : 'pine tree'}, 
  {id : 155,  pid :100, name : 'elm'}, 
]

 {
  id: 1,
  pid: 0,
  name: 'plant',
  children: [
    {
      id: 10,
      pid: 1,
      name: 'fruit',
      children: [{
        id: 25,
        pid: 10,
        name: 'apple'
      }, {
        id: 35,
        pid: 10,
        name: 'grape'
      }],
    },
    {
      id : 100,
      pid : 1,
      name: 'tree',
      children: [{
        id : 123,
        pid : 100,
        name: 'pine tree'
      }, {
        id : 155,
        pid : 100,
        name: 'elm'
      }],
    }
  ]
}
 */
module.exports = function toTree(list) {
  list = list.sort((a, b) => {
    return a.id - b.id;
  });

  return getNode(list, 0)[0];
};

function getNode(list, id) {
  const node = [];
  for (let i = 0; i < list.length; i++) {
    const currNode = list[i];
    if (currNode.pid === id) {
      const children = getNode(list, currNode.id);
      currNode.children = children;
      node.push(currNode);
    }
  }

  if (node.length === 0) {
    return;
  }

  return node;
}
