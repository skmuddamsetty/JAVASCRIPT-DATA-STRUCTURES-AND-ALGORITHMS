/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 *
 *
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
