/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
      return n
        .toString(2)
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0);
};