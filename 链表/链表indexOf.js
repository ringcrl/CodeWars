/**
    function Node(data, next = null) {
      this.data = data;
      this.next = next;
    }

    给定链表: 1 -> 2 -> 3 -> 3, 和 3
    indexOf(node, value) 返回 2
 */

function indexOf(node, value) {
  let i = 0;
  let curr = node;
  while (curr !== null) {
    if (curr.data === value) { return i; }
    curr = curr.next;
    i++;
  }
  return -1;
}