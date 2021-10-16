// var coinChange = function (coins, amount) {
//   var table = Array(amount + 1).fill(-1);

//   table[0] = 0;

//   for (let i = 0; i < amount + 1; i++) {
//     if (table[i] !== -1) {
//       for (const coin of coins) {
//         if (table[i + coin] === -1) {
//           table[i + coin] = table[i] + 1;
//         } else {
//           table[i + coin] = Math.min(table[i] + 1, table[i + coin]);
//         }
//       }
//     }
//   }
//   return table[amount];
// };

//n = coin length, m = amount
//brute => T: O(n^m) S:O(m^2)
//memo => T:O(m^2 * n) S:O(m^2)
// const coinChange = (coins, amount, memo = {}) => {
//   if (amount in memo) {
//     return memo[amount];
//   }
//   if (amount === 0) {
//     return [];
//   }
//   if (amount < 0) {
//     return -1;
//   }
//   var fewest = -1;

//   for (const coin of coins) {
//     const remainder = amount - coin;
//     const combo = coinChange(coins, remainder, memo);
//     memo[remainder] = combo;
//     if (combo !== -1) {
//       let temp = [coin, ...combo];
//       if (fewest === -1 || temp.length < fewest.length) {
//         fewest = temp;
//       }
//     }
//   }
//   return fewest;
// };

//T:O(m*n), S:O(m)
const coinChange = (coins, amount) => {
  var table = Array(amount + 1).fill(-1);
  table[0] = 0;

  for (let i = 0; i < amount + 1; i++) {
    if (table[i] !== -1) {
      for (const coin of coins) {
        if (table[i + coin] === -1 || table[i] + 1 < table[i + coin]) {
          table[i + coin] = table[i] + 1;
        }
      }
    }
  }
  return table[amount];
};

coinChange([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100);
