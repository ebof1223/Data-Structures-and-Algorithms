const combinations = (array) => {
  if (array.length === 0) {
    return [[]];
  }

  const firstEl = array[0];
  const rest = array.slice(1);

  const withoutFirstEl = combinations(rest);
  var withFirstElCombos = [];

  withoutFirstEl.forEach((combo) => {
    const withFirstElCombo = [...combo, firstEl];
    withFirstElCombos.push(withFirstElCombo);
  });
  return [...withFirstElCombos, ...withoutFirstEl];
};

combinations([1, 2, 3]);
