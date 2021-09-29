// abcdef, [ab,abc,cd,def,abcd]

const canConstruct = (targetString, wordBank, memo = {}) => {
  if (targetString in memo) {
    return memo[targetString];
  }

  if (targetString.length === 0) {
    return true;
  }

  for (const word of wordBank) {
    const prefix = targetString.slice(0, word.length);
    if (prefix === word) {
      const suffix = targetString.slice(word.length);
      const suffixResult = canConstruct(suffix, wordBank, memo);
      memo[targetString] = suffixResult;
      if (suffixResult) {
        return suffixResult;
      }
    }
  }
  return false;
};

canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['f', 'a', 'd', 'e']);

//m = targetString.length
//n = wordBank.length

//Brute
//time O(n^m * m)
//space(m^2)

//Memoized
//time O(m^2 * n)
//space O(m^2)
