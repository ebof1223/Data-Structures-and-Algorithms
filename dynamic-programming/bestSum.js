const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) {
    return memo[targetSum];
  }

  if (targetSum < 0) {
    return null;
  }
  if (targetSum === 0) {
    return [];
  }

  var resultArray = null;

  for (const num of numbers) {
    const remainder = targetSum - num;

    const remainderResult = bestSum(remainder, numbers, memo);

    memo[remainder] = remainderResult;

    if (remainderResult) {
      const tempArray = [...remainderResult, num];

      if (resultArray === null || tempArray.length < resultArray.length) {
        resultArray = tempArray;
      }
    }
  }

  return resultArray;
};

bestSum(100, [5, 3]);
