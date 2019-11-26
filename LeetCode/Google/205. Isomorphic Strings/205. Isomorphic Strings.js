/**
 * @author Santhosh Kumar Muddamsetty
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 *
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 *
 */
isIsomorphic = (s, t) => {
  let map1 = {};
  let map2 = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (map1[s[i]] != map2[t[i]]) return false;
    map1[s[i]] = map2[t[i]] = i + 1;
  }
  return true;
};

console.log(isIsomorphic('ab', 'ab'));
console.log(isIsomorphic('paper', 'title'));
