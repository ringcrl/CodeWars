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