const bestSum = (targetSum, numbers) => {
  if (targetSum < 0) {
    return null;
  }
  if (targetSum === 0) {
    return [];
  }

  var resultArray = null;

  for (const num of numbers) {
    const remainder = targetSum - num;

    const remainderResult = bestSum(remainder, numbers);

    if (remainderResult) {
      const tempArray = [...remainderResult, num];

      if (resultArray === null || tempArray.length < resultArray.length) {
        resultArray = tempArray;
      }
    }
  }

  return resultArray;
};

bestSum(4, [3, 3]);
