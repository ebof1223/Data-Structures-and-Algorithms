var maxSubArray = function (nums) {
  var max = nums[0];
  var currentMax = 0;

  for (const n of nums) {
    if (currentMax < 0) {
      currentMax = 0;
    }
    currentMax += n;
    if (max < currentMax) max = currentMax;
  }
  return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
