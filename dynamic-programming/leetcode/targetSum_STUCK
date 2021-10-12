const targetSum = (target, nums) => {
  if (target === 0 && nums.length === 0) {
    return 1;
  }
  var ways = 0;
  for (const [idx, num] of nums.entries()) {
    const remainderAdd = target + num;
    const remainderSub = target - num;
    ways +=
      targetSum(remainderSub, nums.slice(idx + 1)) +
      targetSum(remainderAdd, nums.slice(idx + 1));
  }
  return ways;
};
targetSum(3, [1, 1, 1, 1, 1]);
