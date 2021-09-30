// (3,3)

// const gridTraveler = (length, width, memo = {}) => {
//   const coordinate = length + ',' + width;

//   if (coordinate in memo) {
//     return memo[coordinate];
//   }

//   if (!length || !width) {
//     return 0;
//   }

//   if (length === 1 && width === 1) {
//     return 1;
//   }

//   var totalWays = 0;

//   const moveDown = gridTraveler(length - 1, width, memo);

//   const moveRight = gridTraveler(length, width - 1, memo);

//   memo[coordinate] = moveRight + moveDown;

//   return memo[coordinate];
// };

const gridTraveler = (n, m) => {};

//[0,0,0]
//[0,0,0]
//[0,0,0]

gridTraveler(3, 2);
