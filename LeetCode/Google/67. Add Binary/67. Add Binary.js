/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} a
 * @param {string} b
 * @return {string}
 * https://leetcode.com/problems/add-binary/
 */
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let sum = 0;
  let result = '';
  let carry = 0;
  while (i >= 0 || j >= 0) {
    sum = carry;
    if (i >= 0) {
      sum = sum + Number(a[i] - '0');
      i--;
    }
    if (j >= 0) {
      sum = sum + Number(b[j] - '0');
      j--;
    }
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  if (carry > 0) {
    result = '1' + result;
  }
  return result;
};

console.log(addBinary('1010', '1011'));
