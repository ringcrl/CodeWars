/**
 * 
    const array = [
      { id: 3, value: '1-1', parent_id: 1 },
      { id: 1, value: '1', parent_id: null },
      { id: 4, value: '1-2', parent_id: 1 },
      { id: 6, value: '2-2', parent_id: 2 },
      { id: 2, value: '2', parent_id: null },
      { id: 5, value: '2-1', parent_id: 2 },
    ];
    ```

    变成

    ```js
    [
      {
        id: 1,
        value: '1',
        children: [
          {id:3, value: '1-1', children: null},
          {id:4, value: '1-2', children: null},
        ]
      },
      {
        id: 2,
        value: '2',
        children: [
          {id: 5, value: '2-1', children: null},
          {id: 5, value: '2-2', children: null},
        ]
      },
    ]
 * 
 */
function convert(array) {
  array.sort((a, b) => {
    const aId = a.parent_id === null ? 0 : a.parent_id;
    const bId = b.parent_id === null ? 0 : b.parent_id;
    return aId - bId;
  });

  return array.reduce((prev, curr) => {
    if (curr.parent_id === null) {
      return prev.concat({
        id: curr.id,
        value: curr.value,
        children: [],
      });
    }

    const parent = prev.find((item) => item.id === curr.parent_id);
    parent.children.push({
      id: curr.id,
      value: curr.value,
      children: [],
    });

    return prev;
  }, []);
}
