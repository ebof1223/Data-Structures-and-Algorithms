//even - odd

//brute

// const maxAlternatingSum = (nums ) => {
//   if (nums.length === 0) {
//     return [];
//   }
//   var maxSub = [];
//   for (const [idx, num] of nums.entries()) {
//     let numsCopy = [...nums];
// numsCopy.splice(idx, 1);
// const subseqWithoutNum = maxAlternatingSum(numsCopy);
// const subseqWithNum = [...subseqWithoutNum, num];
// const subseqWithNumSum = subseqWithNum.reduce(
//   (prev, acc, idx) => (idx % 2 === 0 ? prev + acc : prev - acc),
//   0
// );
// if (max.maxSum < subseqWithNumSum) {
//   max.maxSum = subseqWithNumSum;
//   maxSubseq = [...subseqWithNum];
// }
// }
// return maxSubseq;
// };

const maxAlternatingSum = (nums) => {
  var table = Array(nums.length).fill();
  table[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const subseq = nums
      .slice(0, i)
      .reduce((prev, curr, idx) => (idx % 2 === 0 ? prev + curr : prev - curr));
    table[i] = Math.max(nums[i], table[i - 1], subseq);
  }
  return table[nums.length - 1];
};
maxAlternatingSum([6, 2, 1, 2, 4, 5]);
