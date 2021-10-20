//even - odd

//BRUTE T:O(m^m), S: O(m^2)
//MEMO T:O(m^3)? S: O(m^3)
// const maxAlternatingSum = (nums) => {
//   return maxAlternatingSumHelper(
//     nums,
//     (maxSum = nums.reduce(
//       (prev, curr, idx) => (idx % 2 === 0 ? prev + curr : prev - curr),
//       0
//     )),
//     (memo = {})
//   );
// };

// const maxAlternatingSumHelper = function (nums) {
//   if (JSON.stringify(nums) in memo) {
//     return memo[JSON.stringify(nums)];
//   }
//   for (const [idx] of nums.entries()) {
//     var copy = [...nums];
//     copy.splice(idx, 1);
//     memo[JSON.stringify(nums)] = copy.reduce(
//       (prev, curr, idx) => (idx % 2 === 0 ? prev + curr : prev - curr),
//       0
//     );
//     maxSum = Math.max(maxSum, memo[JSON.stringify(nums)]);
//     maxAlternatingSumHelper(copy, maxSum, memo);
//   }
//   return maxSum;
// };
// maxAlternatingSum([5, 6, 7, 8]);

// const maxAlternatingSum = (nums) => {
//   var memo = {};
//   const maxAlternatingSumHelper = (i, even) => {
//     if (i === nums.length) {
//       return 0;
//     }
//     if (`${i}-${even}` in memo) {
//       return memo[`${i}-${even}`];
//     }
//     const total = even ? nums[i] : -1 * nums[i];
//     memo[`${i}-${even}`] = Math.max(
//       total + maxAlternatingSumHelper(i + 1, !even),
//       maxAlternatingSumHelper(i + 1, even)
//     );
//     return memo[`${i}-${even}`];
//   };
//   return maxAlternatingSumHelper(0, true);
// };

// T:O(n), S:O(K)
const maxAlternatingSum = (nums) => {
  var sumEven = 0;
  var sumOdd = 0;

  for (let i = nums.length - 1; 0 <= i; i--) {
    sumEven = Math.max(sumOdd + nums[i], sumEven);
    sumOdd = Math.max(sumEven - nums[i], sumOdd);
  }
  return sumEven;
};
maxAlternatingSum([6, 2, 1, 2, 4, 5]);
