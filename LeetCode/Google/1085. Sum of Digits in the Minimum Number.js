/**
 * @param {number[]} A
 * @return {number}
 *
 * Given an array A of positive integers, let S be the sum of the digits of * the minimal element of A.
 *
 * Return 0 if S is odd, otherwise return 1.
 *
 * https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/
 */
sumOfDigits = A => {
  let min = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    }
  }
  let sum = 0;
  let rem = 0;
  while (min !== 0) {
    rem = min % 10;
    sum = sum + rem;
    min = Math.floor(min / 10);
  }
  return sum % 2 === 0;
};

console.log(sumOfDigits([34, 23, 12, 24, 75, 33, 54, 18]));
