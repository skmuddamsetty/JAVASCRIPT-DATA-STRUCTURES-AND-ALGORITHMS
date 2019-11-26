/**
 * @param {number[]} nums
 * @return {number[]}
 *
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 */
var findDuplicates = function(nums) {
  let returnArr = [];
  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    let numInd = nums[num - 1];
    if (numInd < 0) {
      returnArr.push(num);
    } else {
      nums[num - 1] *= -1;
    }
  }
  return returnArr;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
