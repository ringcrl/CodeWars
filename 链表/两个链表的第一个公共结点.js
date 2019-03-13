/**
 * 输入两个链表，找出它们的第一个公共结点
 */
function FindFirstCommonNode(pHead1, pHead2) {
  if (!pHead1 || !pHead2) {
    return null;
  }

  const len1 = getLength(pHead1);
  const len2 = getLength(pHead2);
  let lenDiff = len1 - len2;

  let curr1 = pHead1;
  let curr2 = pHead2;
  if (len2 > len1) {
    curr1 = pHead2;
    curr2 = pHead1;
    lenDiff = len2 - len1;
  }

  for (let i = 0; i < lenDiff; i++) {
    curr1 = curr1.len1;
  }

  while (curr1 && curr2 && curr1 !== curr2) {
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  return curr1;

  function getLength(node) {
    let len = 0;
    let curr = node;
    while (curr) {
      len++;
      curr = curr.next;
    }
    return len;
  }
}