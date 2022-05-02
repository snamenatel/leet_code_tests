// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/
export const canMakeArithmeticProgression = (arr) => {
  arr = arr.sort((a, b) => Number(a) - Number(b));
  let diff;
  for (let i = 0; i < arr.length - 1; i++) {
    if (diff === undefined) {
      diff = arr[i] - arr[i + 1];
    } else if (arr[i] - arr[i + 1] !== diff) {
      return false;
    }
  }
  return true;
};
