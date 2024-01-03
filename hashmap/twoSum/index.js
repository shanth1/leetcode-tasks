/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//! O(n^2)
var twoSumSlow = function (nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};

//! O(n)
const twoSum = (nums, target) => {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i];
        }
        hashMap.set(nums[i], i);
    }
    return null;
};
