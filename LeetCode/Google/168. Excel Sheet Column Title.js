/**
 * @author Santhosh Kumar Muddamsetty
 * @param {number} n
 * @return {string}
 * Given a positive integer, return its corresponding column
 * title as appear in an Excel sheet.
 * https://leetcode.com/problems/excel-sheet-column-title/
 */
var convertToTitle = function(n) {
  let result = '';
  let char;
  while (n !== 0) {
    n--;
    char = String.fromCharCode((n % 26) + 65);
    result = char + result;
    n = Math.floor(n / 26);
  }
  return result;
};

console.log(convertToTitle(2000));
