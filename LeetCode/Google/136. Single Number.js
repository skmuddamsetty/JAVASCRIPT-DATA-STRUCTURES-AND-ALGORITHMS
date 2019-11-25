/**Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4

*/

/**
 * @author Santhosh Kumar Muddamsetty
 * @param {number[]} nums
 * @return {number}
 *
 * https://leetcode.com/problems/single-number/
 */
singleNumber = (arr = []) => {
  let result = 0;
  for (let num of arr) {
    result = result ^ num;
  }
  return result;
};

console.log(singleNumberUsingHashTable([2, 2, 1]));
