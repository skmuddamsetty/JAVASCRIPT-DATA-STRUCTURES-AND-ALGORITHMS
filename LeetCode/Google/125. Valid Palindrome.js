/** @author Santhosh Kumar Muddamsetty
 * @param {string} s
 * @return {boolean}
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 *
 * https://leetcode.com/problems/valid-palindrome/
 */
validPalindrome = s => {
  if (s && s.trim().length === 0) return true;
  s = s.trim().toLowerCase();
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (isAlphaNumeric(s[start]) && isAlphaNumeric(s[end])) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    } else if (!isAlphaNumeric(s[start])) {
      start++;
    } else if (!isAlphaNumeric(s[end])) {
      end--;
    }
  }
  return true;
};

isAlphaNumeric = str => {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (
      !(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)
    ) {
      // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

console.log(validPalindrome('race a ecar'));
