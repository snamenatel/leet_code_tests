import { hammingWeight } from "./../src/easy/numberOf1Bits";
import { subtractProductAndSum } from "./../src/easy/subtractProductAndSum";
import { isAlienSorted } from "./../src/easy/isAlienSorted";

// const cases = [
//   {
//     arg: [],
//     exp: []
//   }
// ];

const hammingWeightCases = [
  {
    arg: ["00000000000000000000000000001011"],
    exp: 3
  },
  {
    arg: ["00000000000000000000000010000000"],
    exp: 1
  },
  {
    arg: ["11111111111111111111111111111101"],
    exp: 31
  }
];

hammingWeightCases.forEach(({ arg, exp }) => {
  test(`${arg.toString()} expect ${exp.toString()}`, () => {
    expect(hammingWeight(...arg)).toBe(exp);
  });
});

const subtractProductAndSumCases = [
  {
    arg: [234],
    exp: 15
  },
  {
    arg: [4421],
    exp: 21
  },
  {
    arg: [234],
    exp: 15
  }
];

subtractProductAndSumCases.forEach(({ arg, exp }) => {
  test(`${arg.toString()} expect ${exp.toString()}`, () => {
    expect(subtractProductAndSum(...arg)).toBe(exp);
  });
});

const isAlienSortedCases = [
  {
    arg: [["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz"],
    exp: true
  },
  {
    arg: [["word", "world", "row"], "worldabcefghijkmnpqstuvxyz"],
    exp: false
  },
  {
    arg: [["apple", "app"], "abcdefghijklmnopqrstuvwxyz"],
    exp: false
  },
  {
    arg: [["kuvp", "q"], "ngxlkthsjuoqcpavbfdermiywz"],
    exp: true
  }
];

isAlienSortedCases.forEach(({ arg, exp }) => {
  test(`${arg.toString()} expect ${exp.toString()}`, () => {
    expect(isAlienSorted(...arg)).toBe(exp);
  });
});
