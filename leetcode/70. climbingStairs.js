const climbStairs = (n, node = 0, memo = {}) => {
  var ways = 0;

  if (n === node) {
    return 1;
  }
  if (n < node) {
    return 0;
  }

  if (node in memo) {
    return memo[node];
  } else {
    ways += climbStairs(n, node + 1, memo) + climbStairs(n, node + 2, memo);
    memo[node] = ways;
  }

  return ways;
};

climbStairs(1);
