const countConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }

  if (target.length === 0) {
    return 1;
  }

  var totalWays = 0;

  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixCombination = countConstruct(suffix, wordBank);
      wordBank[suffix] = suffixCombination;
      totalWays += suffixCombination;
    }
  }
  memo[target] = totalWays;
  return totalWays;
};

countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'f',
  'a',
  'd',
  'e',
  'eeee',
  'eeeeeeeee',
]);
