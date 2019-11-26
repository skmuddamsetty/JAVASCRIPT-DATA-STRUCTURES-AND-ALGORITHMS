/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} s
 * @return {boolean}
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
isValid = s => {
  if (s.length === 0) return true;
  let map = new Map();
  let stack = [];
  map.set('}', '{');
  map.set(')', '(');
  map.set(']', '[');
  for (let char of s) {
    if (char === '{' || char === '(' || char === '[') {
      stack.push(char);
    } else {
      if (stack.pop() !== map.get(char)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()[]{}(()'));
