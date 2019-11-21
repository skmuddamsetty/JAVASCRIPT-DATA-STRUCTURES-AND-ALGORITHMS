/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack,* or -1 if needle is not part of haystack.
 *
 * https://leetcode.com/problems/implement-strstr/
 */
strStr = (haystack, needle) => {
  if (needle.length === 0) return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let substr = haystack.substring(i, needle.length + i);
      if (substr === needle) return i;
    }
  }
  return -1;
};

console.log(strStr('helo', ''));
