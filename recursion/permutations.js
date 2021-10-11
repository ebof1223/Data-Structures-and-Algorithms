const permutation = (array) => {
  if (array.length === 0) {
    return [[]];
  }
  const firstEl = array[0];
  const rest = array.slice(1);

  const withoutFirstPerms = permutation(rest);

  const allPerms = [];
  withoutFirstPerms.forEach((perm) => {
    for (let i = 0; i <= perm.length; i++) {
      allPerms.push([...perm.slice(0, i), ...firstEl, ...perm.slice(i)]);
    }
  });
  return allPerms;
};

permutation(['a', 'b', 'c']);
