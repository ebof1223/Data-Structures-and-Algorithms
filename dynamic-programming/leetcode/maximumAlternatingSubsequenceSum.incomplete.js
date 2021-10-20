//even - odd

//BRUTE T:O(m^m), S: O(m^2)
//MEMO T:O(m^3)? S: O(m^3)
const maxAlternatingSum = (nums) => {
  return maxAlternatingSumHelper(
    nums,
    (maxSum = nums.reduce(
      (prev, curr, idx) => (idx % 2 === 0 ? prev + curr : prev - curr),
      0
    )),
    (memo = {})
  );
};

const maxAlternatingSumHelper = function (nums) {
  if (JSON.stringify(nums) in memo) {
    return memo[JSON.stringify(nums)];
  }
  for (const [idx] of nums.entries()) {
    var copy = [...nums];
    copy.splice(idx, 1);
    memo[JSON.stringify(nums)] = copy.reduce(
      (prev, curr, idx) => (idx % 2 === 0 ? prev + curr : prev - curr),
      0
    );
    maxSum = Math.max(maxSum, memo[JSON.stringify(nums)]);
    maxAlternatingSumHelper(copy, maxSum, memo);
  }
  return maxSum;
};
maxAlternatingSum([5,6,7,8]);
