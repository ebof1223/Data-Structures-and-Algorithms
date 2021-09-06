// const canConstruct = (target, bank, memo = {}) => {
//   if (target in memo) {
//     return memo[target];
//   }

//   if (target.length === 0) {
//     return true;
//   }

//   for (let word of bank) {
//     //is word prefix to target
//     const wordLength = word.length;
//     const prefix = target.slice(0, wordLength);
//     if (word === prefix) {
//       const suffix = target.slice(wordLength);
//       memo[suffix] = canConstruct(suffix, bank, memo);
//       if (memo[suffix]) {
//         return true;
//       }
//     }
//   }
//   memo[target] = false;
//   return false;
// };

//BRUTE
//time O(m^n * n), space O(m^2)
//MEMO
//time O()

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

module.exports = countConstruct;
