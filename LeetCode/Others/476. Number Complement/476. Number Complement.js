/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let binaryStr = Number(num).toString(2);
  let complementStr = '';
  for (let char of binaryStr) {
    if (char === '0') {
      complementStr += '1';
    } else {
      complementStr += '0';
    }
  }
  return parseInt(complementStr, 2);
};

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let result = '';
  const binary = num.toString(2);
  for (let i = 0; i < binary.length; i++) {
    result += binary[i] ^ 1;
  }
  return parseInt(result, 2);
};

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  return parseInt(
    num
      .toString(2)
      .split('')
      .map(n => (n === '0' ? '1' : '0'))
      .join(''),
    2
  );
};

/**
 * @param {number} num
 * @return {number}
 * Bitwise and Math
 */
var findComplement = function(num) {
  let bit = 1;
  let result = 0;
  while (bit <= num) {
    if ((num & bit) === 0) {
      result += bit;
    }
    bit *= 2;
  }
  return result;
};

console.log(findComplement(5));
