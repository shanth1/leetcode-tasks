/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

//! My solution
const merge = (nums1, m, nums2, n) => {
    let a = m - 1;
    let b = n - 1;
    for (let c = m + n - 1; c >= 0; c--) {
        if (nums1[a] >= nums2[b]) {
            if (a >= 0) {
                nums1[c] = nums1[a--];
            }
        } else {
            if (b >= 0) {
                nums1[c] = nums2[b--];
            }
        }
    }
};

//! Solution from hub
var merge2 = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
};
