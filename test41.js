var maximumWealth = function (accounts) {
  return accounts
    .map((element) => {
      let sum = 0;
      element.forEach((val) => (sum += val));
      return sum;
    })
    .sort((a, b) => b - a)[0];
};

console.log(
  maximumWealth([
    [2, 4, 1],
    [2, 4, 5, 6, 2],
  ])
);
