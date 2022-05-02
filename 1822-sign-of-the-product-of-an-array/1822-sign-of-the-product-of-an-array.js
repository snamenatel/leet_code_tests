/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
      let val = 1;
      for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) return 0;
        val *= nums[i];
      }

      return val > 0 ? 1 : -1;
};