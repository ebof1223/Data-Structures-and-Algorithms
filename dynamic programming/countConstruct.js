const countConstruct = (target, bank, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }

  if (target === '') {
    return 1;
  }

  let count = 0;

  for (let word of bank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const numWays = countConstruct(suffix, bank, memo);
      count += numWays;
    }
  }
  memo[target] = count;
  return count;
};

//where n = length of bank, m = magnitude of target word
//BRUTE, time: O(n^m * m), space: O(m^2)\
//MEMO, time: O(n * m^2)

module.exports = countConstruct;

// 'abcdefg [h,i,j,k,l,m,n,o, p]
