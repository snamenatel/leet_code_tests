var sumOddLengthSubarrays = function (arr) {
  let t = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (i === j || (j - i) % 2 === 0) {
        t.push(...arr.slice(i, j + 1));
      }
    }
  }

  return getSum(t);
};

const getSum = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};
