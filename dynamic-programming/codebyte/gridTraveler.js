// const gridTraveler = (length, width, memo = {}) => {
//   const coordinate = length + ',' + width;

//   if (coordinate in memo) {
//     return memo[coordinate];
//   }

//   if (!length || !width) {
//     return 0;
//   }

//   if (length === 1 && width === 1) {
//     return 1;
//   }

//   var totalWays = 0;

//   const moveDown = gridTraveler(length - 1, width, memo);

//   const moveRight = gridTraveler(length, width - 1, memo);

//   memo[coordinate] = moveRight + moveDown;

//   return memo[coordinate];
// };

const gridTraveler = (n, m) => {
  const table = Array(n + 1)
    .fill()
    .map(() => Array(m + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= m; j++) {
      const current = table[i][j];
      if (j + 1 <= m) {
        table[i][j + 1] += current;
      }
      if (i + 1 <= n) {
        table[i + 1][j] += current;
      }
    }
  }
  return table[n][m];
};

//  c
//r[0,0,0]
// [0,1,0]
// [0,0,0]
// [0,0,0]

gridTraveler(3, 3);
