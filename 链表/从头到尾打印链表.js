/**
 * 输入一个链表，从尾到头打印链表每个节点的值
 */
function printListFromTailToHead(head) {
  if (!head) {
    return 0;
  } else {
    const arr = [];
    let curr = head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr.reverse();
  }
}