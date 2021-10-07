const coinChange2 = (amount, coins) => {
  var table = Array(amount + 1).fill(0);
  table[0] = 1;

  for (const coin of coins) {
    for (let i = 1; i <= amount; i++) {
      if (i - coin >= 0) {
        table[i] += table[i - coin];
      }
    }
  }
  return table[amount];
};

coinChange2(5, [1, 2, 5]);
