// 7, [2,3]

// const canSum = (targetSum, numbers, memo = {}) => {
//   if (targetSum in memo) {
//     return memo[targetSum];
//   }

//   if (targetSum < 0) {
//     return false;
//   }

//   if (targetSum === 0) {
//     return true;
//   }

//   for (const num of numbers) {
//     const remainder = targetSum - num;
//     const remainderCall = canSum(remainder, numbers, memo);
//     memo[remainder] = remainderCall;
//     if (remainderCall) {
//       return remainderCall;
//     }
//   }

//   return false;
// };

// const canSum = (targetSum, numbers) => {

// }

//8, [4,3,2,1]

// canSum(300, [7, 14]);
