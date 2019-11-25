/**Given an array of integers A, return the largest integer that only occurs once.

If no integer occurs once, return -1.

 

Example 1:

Input: [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: 
The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it's the answer.

Example 2:

Input: [9,9,8,8]
Output: -1
Explanation: 
There is no number that occurs only once.

 

Note:

    1 <= A.length <= 2000
    0 <= A[i] <= 1000

 */
/**
 * @author Santhosh Kumar Muddamsetty
 * @param {number[]} A
 * @return {number}
 *
 * https://leetcode.com/problems/largest-unique-number/
 */
largestUniqueNumber = A => {
  let map = new Map();
  let results = [];
  A.forEach(num => {
    if (map.get(num) !== undefined) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  });
  for (let [key, value] of map) {
    if (value === 1) {
      results.push(key);
    }
  }
  return results.length > 0 ? Math.max(...results) : -1;
};

console.log(largestUniqueNumber([9, 9, 8, 8]));
