// const climbStairs = (n, memo = {}) => {
//   if (n in memo) {
//     return memo[n];
//   }
//   if (n === 0) {
//     return 1;
//   }
//   if (n < 0) {
//     return 0;
//   }

//   memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
//   return memo[n];
// };

// const climbStairs = (n) => {
//   const table = Array(n + 1).fill();

//   table[0] = 0;
//   table[1] = 1;

//   for (let i = 2; i <= n + 1; i++) {
//     table[i] = table[i - 1] + table[i - 2];
//   }
//   return table[n + 1];
// };

//O(n), O(1)
const climbStairs = (n) => {
  const table = Array(n + 1).fill();
  table[n + 1] = 0;
  table[n] = 1;

  for (let i = n - 1; i >= 0; i--) {
    table[i] = table[i + 1] + table[i + 2];
    table.pop();
  }
  return table[0];
};

climbStairs(22);
