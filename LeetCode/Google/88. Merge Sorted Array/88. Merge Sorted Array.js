/**
 * @author Santhosh Kumar Muddamsetty
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * Time Complexity: O(m+n) since we are iterating thru the two arrays
 * Space Complexity: O(1) since we are not using any additional space
 */
merge = (nums1, m, nums2, n) => {
  m--;
  n--;
  let currenIdx = nums1.length - 1;
  while (currenIdx >= 0) {
    if (m < 0) {
      nums1[currenIdx] = nums2[n];
      n--;
    } else if (n < 0) {
      nums1[currenIdx] = nums1[m];
      m--;
    } else {
      if (nums1[m] > nums2[n]) {
        nums1[currenIdx] = nums1[m];
        // nums1[m] = 0;
        m--;
      } else {
        nums1[currenIdx] = nums2[n];
        n--;
      }
    }
    currenIdx--;
  }
  return nums1;
};

console.log(merge([1, 2, 7, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([0], 0, [1], 1));
