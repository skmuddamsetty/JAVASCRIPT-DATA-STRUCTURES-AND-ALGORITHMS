/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let absNum;
  for (let i = 0; i < nums.length; i++) {
    absNum = Math.abs(nums[i]);
    if (nums[absNum] < 0) {
      break;
    } else {
      nums[absNum] = nums[absNum] * -1;
    }
  }
  return absNum;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
