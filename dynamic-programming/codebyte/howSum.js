//7, [5,3,4,7] => [7], [3,4]

// const howSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) {
//     return memo[targetSum];
//   }
//   if (targetSum === 0) {
//     return [];
//   }

//   if (targetSum < 0) {
//     return null;
//   }

//   for (const num of numbers) {
//     const remainder = targetSum - num;

//     const remainderResult = howSum(remainder, numbers, memo);

//     memo[num] = remainderResult;

//     if (remainderResult) {
//       return [...remainderResult, num];
//     }
//   }

//   return null;
// };

const howSum = (targetSum, numbers) => {
  var table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i < targetSum; i++) {
    if (table[i]) {
      for (const num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }

  return table[targetSum];
};

howSum(7, [5, 3, 4]);
