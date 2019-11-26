/**
 * @author Santhosh Kumar Muddamsetty
 * @param {number} n
 * @return {string}
 */
convertToTitle = n => {
  let result = '';
  let char;
  while (n !== 0) {
    n--;
    char = String.fromCharCode((n % 26) + 65);
    result = char + result;
    n = Math.floor(n / 26);
  }
  return result;
};

console.log(convertToTitle(701));
