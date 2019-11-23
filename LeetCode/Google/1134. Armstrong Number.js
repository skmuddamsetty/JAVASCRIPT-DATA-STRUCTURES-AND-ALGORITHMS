/**
 * @author Santhosh Kumar Muddamsetty
 * @param {number} N
 * @return {boolean}
 *
 * The k-digit number N is an Armstrong number if and only if the k-th * power of each digit sums to N.
 *
 * Given a positive integer N, return true if and only if it is an Armstrong * number.
 * Input: 153
 * Output: true
 * Explanation:
 * 153 is a 3-digit number, and 153 = 1^3 + 5^3 + 3^3.
 *
 * Input: 123
 * Output: false
 * Explanation:
 * 123 is a 3-digit number, and 123 != 1^3 + 2^3 + 3^3 = 36.
 *
 * https://leetcode.com/problems/armstrong-number
 */
isArmstrong = N => {
  let remainder;
  let sum = 0;
  let actualNumber = N;
  let length = Math.ceil(Math.log10(N + 1));
  while (N !== 0) {
    remainder = N % 10;
    sum = sum + Math.pow(remainder, length);
    N = Math.floor(N / 10);
  }
  return sum === actualNumber;
};

console.log(isArmstrong(153));
