// (3,3)

const gridTraveler = (length, width, memo = {}) => {
  const coordinate = `${length},${width}`;

  if (coordinate in memo) {
    return memo[coordinate];
  }

  if (!length || !width) {
    return 0;
  }

  if (length === 1 && width === 1) {
    return 1;
  }

  var totalWays = 0;

  const moveDown = gridTraveler(length - 1, width, memo);

  const moveRight = gridTraveler(length, width - 1, memo);

  totalWays += moveRight + moveDown;

  return totalWays;
};

gridTraveler(3, 3);
