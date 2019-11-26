/**
 * @author Santhosh Kumar Muddamsetty
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 *
 * https://leetcode.com/problems/reverse-string/
 */
var reverseString = function(s) {
  let start = 0;
  let end = s.length - 1;
  let temp;
  while (start < end) {
    temp = s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
  return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
