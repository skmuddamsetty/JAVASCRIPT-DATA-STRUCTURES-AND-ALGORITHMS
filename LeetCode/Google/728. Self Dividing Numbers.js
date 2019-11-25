/** A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:

Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 */

/**
 * @author Santhosh Kumar Muddamsetty
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
selfDividingNumbers = (left, right) => {
  let results = [];
  while (left <= right) {
    let temp = left;
    if (Math.floor(temp / 10) === 0) {
      results.push(left);
    } else {
      let valid = false;
      while (temp !== 0) {
        let rem = Math.floor(temp % 10);
        if (left % rem !== 0) {
          valid = false;
          break;
        } else {
          valid = true;
        }
        temp = Math.floor(temp / 10);
      }
      if (valid) {
        results.push(left);
      }
    }
    left++;
  }
  return results;
};

console.log(selfDividingNumbers(1, 22));
