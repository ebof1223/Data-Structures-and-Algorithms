//7, [5,3,4,7] => [7], [3,4]

const howSum = (targetSum, numbers) => {
  if (targetSum === 0) {
    return [];
  }

  if (targetSum < 0) {
    return null;
  }
  var combinations = new Array();

  for (const num of numbers) {
    const remainder = targetSum - num;

    const remainderResult = howSum(remainder, numbers);

    if (remainderResult) {
      combinations = [...remainderResult, num];
    }
  }

  return combinations;
};

howSum(8, [2, 3, 5]);
