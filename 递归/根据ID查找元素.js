function findNodeById(root, id) {
  if (id === root.id) {
    return root;
  }

  const children = root.children;
  if (children && children.length > 0) {
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const result = findNodeById(child, id);
      if (result) {
        return result;
      }
    }
  }

  return undefined;
}

const tree = {
  id: '1',
  label: 'first',
  children: [
    { id: '2', label: 'second' },
    {
      id: '3',
      label: 'third',
      children: [
        {
          id: '4',
          label: 'fourth',
        },
        {
          id: '5',
          label: 'fifth',
          children: [
            {
              id: '6',
              label: 'sixth',
            },
            {
              id: '7',
              label: 'seven',
            },
          ],
        },
      ],
    },
  ],
};

console.log(findNodeById(tree, '1'));
console.log(findNodeById(tree, '2'));
console.log(findNodeById(tree, '3'));
console.log(findNodeById(tree, '4'));
console.log(findNodeById(tree, '5'));
console.log(findNodeById(tree, '6'));
console.log(findNodeById(tree, '7'));
console.log(findNodeById(tree, '8'));
