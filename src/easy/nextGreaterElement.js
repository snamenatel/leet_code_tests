const nextGreaterElement = function (nums1, nums2) {
  ge = getGreaterElList(nums2);
  return nums1.map(element => {
      return ge[nums2.indexOf(element)];
  });
};

function getGreaterElList(list)
{
    const result = [];
    for (let i = list.length - 1; i >= 0; i--) {
      let nextGreater = -1;
      for (let j = i + 1; j < list.length; j++) {
        if (list[j] > list[i]) {
            nextGreater = list[j];
          break;
        }
      }
      result.unshift(nextGreater);
    }
    return result
}

