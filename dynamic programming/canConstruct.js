const canConstruct = (target, bank, memo = {}) => {
  if (target in memo) {
    return memo[target];
  }

  if (target.length === 0) {
    return true;
  }

  for (let word of bank) {
    //is word prefix to target
    const wordLength = word.length;
    const prefix = target.slice(0, wordLength);
    if (word === prefix) {
      const suffix = target.slice(wordLength);
      memo[suffix] = canConstruct(suffix, bank, memo);
      if (memo[suffix]) {
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

module.exports = canConstruct;

//BRUTE
//time O(m^n * n), space O(m^2)
