//unfinihsed
const leven = (str1, str2) => {
  const table = Array(str1.length + 1)
    .fill()
    .map(() => Array(str2.length + 1).fill());

  table[0][0] = 0;

  const row1 = table[0];

  for (let i = 0; i < str2.length + 1; i++) {
    row1[i] = i;
  }

  for (let j = 0; j < str1.length + 1; j++) {
    const col1 = table[j];
    col1[0] = j;
  }

  // return table[str1.length][str2.length];
};

leven('abc', 'yabd');
