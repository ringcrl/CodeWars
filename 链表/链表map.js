/**
 * 实现一个 map 方法处理链表
 * list: 1 -> 2 -> 3, mapping function x => x * 2, map return 2 -> 4 -> 6

  function Node(data, next = null) {
    this.data = data;
    this.next = next;
  }
 */

 function LinkedListMap(head, f) {
   if (!head) { return null; }

   let curr = head;
   let newLinkedList = new Node(-1);
   const dummy = newLinkedList;
   while (curr !== null) {
     newLinkedList.next = new Node(f(curr.data));
     newLinkedList = newLinkedList.next;
     curr = curr.next;
   }

   return dummy.next;
 }