/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} S
 * @return {string}
 * A valid parentheses string is either empty (""), "(" + A + ")", or A + B,* where A and B are valid parentheses strings, and + represents string    * concatenation.  For example, "", "()", "(())()", and "(()(()))" are all * valid parentheses strings.
 *
 * A valid parentheses string S is primitive if it is nonempty, and there does
 * not exist a way to split it into S = A+B, with A and B nonempty valid * parentheses strings.
 *
 * Given a valid parentheses string S, consider its primitive decomposition: S * = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.
 *
 * Return S after removing the outermost parentheses of every primitive string * in the primitive decomposition of S.
 *
 * https://leetcode.com/problems/remove-outermost-parentheses/
 */
removeOuterParentheses = S => {
  let result = '';
  let count = 0;
  let startIndex = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') {
      count++;
    }
    if (S[i] === ')') {
      count--;
    }
    if (count === 0) {
      result = result + S.substring(startIndex + 1, i);
      startIndex = i + 1;
    }
  }
  return result;
};

console.log(removeOuterParentheses('(()())(())(()(()))'));
console.log(removeOuterParentheses('(()())(())'));
console.log(removeOuterParentheses('()()'));
