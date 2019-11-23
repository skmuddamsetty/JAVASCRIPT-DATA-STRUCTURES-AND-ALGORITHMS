/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 *
 * There is a special keyboard with all keys in a single row.
 * Given a string keyboard of length 26 indicating the layout of the       * keyboard (indexed from 0 to 25), initially your finger is at index 0. To * type a character, you have to move your finger to the index of the      * desired character. The time taken to move your finger from index i to   * index j is * |i - j|.
 * You want to type a string word. Write a function to calculate how much  * time it takes to type it with one finger.
 *
 * https://leetcode.com/problems/single-row-keyboard/
 *
 * Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
 * Output: 4
 * Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write * 'b' then to 0 again to write 'a'.
 * Total time = 2 + 1 + 1 = 4.
 *
 * Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
 * Output: 73
 */
calculateTime = (keyboard, word) => {
  let keyboardMap = {};
  keyboard.split('').forEach((char, i) => {
    keyboardMap[char] = i;
  });
  let prevVal = keyboardMap[word[0]];
  let currVal;
  let diff;
  let resultSum = keyboardMap[word[0]];
  for (let i = 1; i < word.length; i++) {
    currVal = keyboardMap[word[i]];
    diff = Math.abs(prevVal - currVal);
    resultSum = resultSum + diff;
    prevVal = currVal;
  }
  return resultSum;
};

console.log(calculateTime('pqrstuvwxyzabcdefghijklmno', 'leetcode'));
