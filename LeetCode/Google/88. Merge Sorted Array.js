/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * The number of elements initialized in nums1 and nums2 are m and n respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 *
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * Output: [1,2,2,3,5,6]
 *
 * https://leetcode.com/problems/merge-sorted-array/
 *
 * https://www.youtube.com/watch?v=zp4huR7LN6M
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
