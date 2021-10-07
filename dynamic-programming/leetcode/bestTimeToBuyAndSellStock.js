var maxProfit = function (prices) {
  var table = Array(prices.length).fill(0);
  var buy = 0;
  for (let current = 1; current < table.length; current++) {
    if (prices[current] < prices[buy]) {
      buy = current;
    } else {
      table[current] = prices[current] - prices[buy];
    }
  }
  return Math.max(...table);
};
