export const subtractProductAndSum = function (n) {
  let prod = 1;
  let sum = 0;
  n.toString()
    .split("")
    .forEach((element) => {
      prod *= element;
      sum += Number(element);
    });

  return prod - sum;
};
