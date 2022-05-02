/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
  nums = nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && i + 1 < nums.length) {
      if (checkIfNoNZero(nums[i - 1], nums[i], nums[i + 1])) {
        return sum(nums[i - 1], nums[i], nums[i + 1]);
      }
    }
  }
  return 0;
};

function checkIfNoNZero(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function sum(a, b, c) {
  return a + b + c;
}