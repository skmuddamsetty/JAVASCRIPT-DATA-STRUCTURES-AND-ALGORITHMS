/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} A
 * @param {string} B
 * @return {number}
 *
 */
repeatedStringMatch = (A, B) => {
  let result = 1;
  let tempStr = A;
  while (tempStr.length < B.length) {
    tempStr = A + tempStr;
    result++;
  }
  if (tempStr.indexOf(B) >= 0) return result;
  tempStr = A + tempStr;
  result++;
  if (tempStr.indexOf(B) >= 0) return result;
  return -1;
};

console.log(repeatedStringMatch('abcd', 'cdabcdab'));
// console.log(repeatedStringMatch('a', 'aa'));
