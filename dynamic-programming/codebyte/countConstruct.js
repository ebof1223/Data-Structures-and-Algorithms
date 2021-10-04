// const countConstruct = (target, wordBank, memo = {}) => {
//   if (target in memo) {
//     return memo[target];
//   }

//   if (target.length === 0) {
//     return 1;
//   }

//   var totalWays = 0;

//   for (const word of wordBank) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length);
//       const suffixCombination = countConstruct(suffix, wordBank);
//       wordBank[suffix] = suffixCombination;
//       totalWays += suffixCombination;
//     }
//   }
//   memo[target] = totalWays;
//   return totalWays;
// };

const countConstruct = (target, wordBank) => {
  var table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (const word of wordBank) {
        const wordLen = word.length;
        const prefix = target.slice(i, i + wordLen);
        if (prefix === word) {
          table[i + wordLen] += table[i];
        }
      }
    }
  }
  return table[target.length];
};
// countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']);
countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'f',
  'a',
  'd',
  'e',
  'eeee',
  'eeeeeeeee',
]);
