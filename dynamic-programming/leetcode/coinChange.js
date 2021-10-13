var coinChange = function (coins, amount) {
  var table = Array(amount + 1).fill(-1);

  table[0] = 0;

  for (let i = 0; i < amount + 1; i++) {
    if (table[i] !== -1) {
      for (const coin of coins) {
        if (table[i + coin] === -1) {
          table[i + coin] = table[i] + 1;
        } else {
          table[i + coin] = Math.min(table[i] + 1, table[i + coin]);
        }
      }
    }
  }
  return table[amount];
};
coinChange([1, 2, 5], 11);
