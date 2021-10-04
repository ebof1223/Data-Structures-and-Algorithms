const maxSubsetSumNoAdjacent = (array) => {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  var table = Array(array.length);
  table[0] = array[0];
  table[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    const currentMax = table[i - 1];
    const twoBehind = table[i - 2];
    table[i] = Math.max(currentMax, array[i] + twoBehind);
  }
  return table[table.length - 1];
};

//time O(n)
//space O(n)
