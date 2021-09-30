// recursive
// const fib = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n === 1) return 1;
//   if (n === 0) return 0;

//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// };

const fib = (n) => {
  const table = new Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i < n + 1; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table[n];
};
fib(9);
