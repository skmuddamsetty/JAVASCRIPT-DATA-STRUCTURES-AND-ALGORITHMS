/**
 * @param {character[]} chars
 * @return {number}
 *
 */
compress = chars => {
  let count = 1;
  let result = '';
  let prevChar = '';
  if (chars.length === 1) return chars[0];
  for (let j = 0; j < chars.length; j++) {
    if (chars[j] === prevChar) {
      count++;
      prevChar = chars[j];
    } else {
      if (count > 1) {
        result = result + prevChar + count;
      } else {
        result = result + prevChar;
      }
      count = 1;
      prevChar = chars[j];
    }
  }
  result = result + chars[chars.length - 1] + count;
  return result.length;
};

console.log(
  compress(['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'])
);
