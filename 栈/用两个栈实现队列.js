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