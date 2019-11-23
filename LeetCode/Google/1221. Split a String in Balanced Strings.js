/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} s
 * @return {number}
 * Balanced strings are those who have equal quantity of 'L' and 'R'        * characters.
 *
 * Given a balanced string s split it in the maximum amount of balanced     * strings.
 *
 * Return the maximum amount of splitted balanced strings.
 *
 * https://leetcode.com/problems/split-a-string-in-balanced-strings/
 */
balancedStringSplit = s => {
  let resultCount = 0;
  let count = 0;
  for (let char of s) {
    if (char === 'R') {
      count++;
    }
    if (char === 'L') {
      count--;
    }
    if (count === 0) {
      resultCount++;
    }
  }
  return resultCount;
};

console.log(balancedStringSplit('RLLLLRRRLR'));
