const minNumberOfCoinsForChange = (n, denoms) => {
  var table = Array(n + 1).fill(-1);
  table[0] = 0;

  for (let i = 0; i <= n; i++) {
    for (const coin of denoms) {
      if (i + coin <= n && table[i] !== -1) {
        if (table[i + coin] === -1) {
          table[i + coin] = table[i] + 1;
        } else if (table[i] + 1 <= table[i + coin]) {
          table[i + coin] = table[i] + 1;
        }
      }
    }
  }
  return table[n];
};
