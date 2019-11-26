/**
 * @param {string} s
 * @return {number}
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */
var firstUniqChar = function(s) {
  let map = new Map();
  for (let char of s) {
    if (map.get(char) === undefined) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  let index = 0;
  for (let char of s) {
    if (map.get(char) === 1) {
      return index;
    }
    index++;
  }
  return -1;
};

console.log(firstUniqChar('leetcode'));
