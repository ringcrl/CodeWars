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