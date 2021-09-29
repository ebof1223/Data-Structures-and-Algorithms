const allConstruct = (target, wordBank) => {
  if (target.length === 0) {
    return [[]];
  }
  var combinations = [];
  for (const word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixCombinations = allConstruct(suffix, wordBank);
      const targetCombinations = suffixCombinations.map((combo) => [
        word,
        ...combo,
      ]);
      combinations = [...combinations, ...targetCombinations];
    }
  }
  return combinations;
};

allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);
allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']);
