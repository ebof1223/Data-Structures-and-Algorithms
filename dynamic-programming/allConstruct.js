const allConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) {
    return target[memo];
  }
  if (target.length === 0) {
    return [[]];
  }
  var combinations = [];
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixCombinations = allConstruct(suffix, wordBank);
      memo[suffix] = suffixCombinations;
      const targetCombinations = suffixCombinations.map((combo) => [
        word,
        ...combo,
      ]);
      combinations = [...combinations, ...targetCombinations];
    }
  }
  memo[target] = combinations;
  return combinations;
};

allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);
allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']);
//m = target length
//n bank length
//brute
//time O(m *n^m) ->>> O(n^m)
//space O(m*m*m*n^m) ->>> O(m)
//???
