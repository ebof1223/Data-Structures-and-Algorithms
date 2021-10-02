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
//[0,1,2,3,4,5,6,7,8]
const canSum = (targetSum, numbers) => {
  var table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        const idx = i + num;
        table[idx] = true;
      }
    }
  }

  return table[targetSum];
};

canSum(300, [7, 14]);
