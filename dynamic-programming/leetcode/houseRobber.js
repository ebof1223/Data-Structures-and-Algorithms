// time O(n), space O(n)
// const rob = (nums) => {
//   var table = Array(nums.length + 1).fill();
//   table[0] = 0;
//   table[1] = nums[0];
//   table[2] = Math.max(nums[1], table[1]);

//   for (let u = 3; u < nums.length + 1; u++) {
//     table[u] = Math.max(nums[u - 1] + table[u - 2], table[u - 1]);
//   }

//   return table[nums.length];
// };

// const rob = (nums) => {
//   const helper = (nums) => {
//     if (nums.length === 0) {
//       return [];
//     }
//     var highestArr = [];
//     for (let i = 0; i < nums.length; i++) {
//       const compatible = nums.slice(i + 2);

//       const withoutFirstCombo = helper(compatible);

//       const withFirstCombo = [nums[i], ...withoutFirstCombo];

//       const highestTot = highestArr.reduce((prev, curr) => prev + curr, 0);
//       const withFirstComboTot = withFirstCombo.reduce(
//         (prev, curr) => prev + curr,
//         0
//       );

//       highestTot < withFirstComboTot
//         ? (highestArr = withFirstCombo)
//         : (highestArr = highestArr);
//     }
//     return highestArr;
//   };
//   return helper(nums).reduce((prev, curr) => prev + curr, 0);
// };
// t: O(m^4) O(m^3)

//t:O(n), s:O(k)
const rob = (nums) => {
  var first = 0;
  var second = nums[0];
  for (let u = 0; u < nums.length; u++) {
    let temp = Math.max(second, first + nums[u]);
    first = second;
    second = temp;
  }
  return second;
};
rob([
  114, 117, 207, 117, 235, 82, 90, 67, 143, 146, 53, 108, 200, 91, 80, 223, 58,
  170, 110, 236, 81, 90, 222, 160, 165, 195, 187, 199, 114, 235, 197, 187, 69,
  129, 64, 214, 228, 78, 188, 67, 205, 94, 205, 169, 241, 202, 144, 240,
]);
