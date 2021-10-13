var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return [];
  }
  for (const [idx, num] of nums.entries()) {
    let sequence = [num];
    const remainder = nums.slice(idx + 1);
    const remainderResult = lengthOfLIS(remainder);
  }
};
// lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);
lengthOfLIS([1, 2, 4, 3]);
