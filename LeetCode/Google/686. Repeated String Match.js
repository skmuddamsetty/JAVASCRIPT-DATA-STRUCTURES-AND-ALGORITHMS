/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} A
 * @param {string} B
 * @return {number}
 *
 * Given two strings A and B, find the minimum number of times A * has to be repeated such that B is a substring of it.
 * If no * such solution, return -1.
 *
 * For example, with A = "abcd" and B = "cdabcdab".
 *
 * Return 3, because by repeating A three times (“abcdabcdabcd”), B * is a substring of it; and B is not a substring of A repeated two * times ("abcdabcd").
 *
 * https://leetcode.com/problems/repeated-string-match/submissions/
 *
 * https://www.youtube.com/watch?v=c8cH8jejvBk
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
