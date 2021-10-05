var singleNumber = function (nums) {
  var container = new Object();

  for (const n of nums) {
    n in container ? (container[n] = container[n] + 1) : (container[n] = 1);
    container;
  }
  const indexOfSingle = Object.values(container).indexOf(1);
  const arrayOfN = Object.keys(container);

  return arrayOfN[indexOfSingle];
};
