// const bestSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) {
//     return memo[targetSum];
//   }

//   if (targetSum < 0) {
//     return null;
//   }
//   if (targetSum === 0) {
//     return [];
//   }

//   var resultArray = null;

//   for (const num of numbers) {
//     const remainder = targetSum - num;

//     const remainderResult = bestSum(remainder, numbers, memo);

//     memo[remainder] = remainderResult;

//     if (remainderResult) {
//       const tempArray = [...remainderResult, num];

//       if (resultArray === null || tempArray.length < resultArray.length) {
//         resultArray = tempArray;
//       }
//     }
//   }

//   return resultArray;
// };

// bestSum(100, [5, 3]);

//7 , [5,4,3]

const bestSum = (targetSum, numbers) => {
  var table = Array(targetSum + 1).fill(null);

  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (const num of numbers) {
        //can be null, undefined, or [..combo]
        const currentCombo = table[i + num];
        const newCombo = [...table[i], num];
        if (!currentCombo || newCombo.length < currentCombo.length) {
          table[i + num] = newCombo;
        }
      }
    }
  }
  return table[targetSum];
};

bestSum(100, [1, 2, 5, 25]);
