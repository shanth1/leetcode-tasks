/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    const answer = [];
    let start = nums[0];
    let target = nums[0];
    if (nums.length === 0) return [];
    for (let i = 1; i < nums.length; i++) {
        const el = nums[i];
        if (el - nums[i - 1] === 1) {
            continue;
        }

        target = nums[i - 1];
        if (start === target) {
            answer.push(String(start));
        } else {
            answer.push(`${start}->${target}`);
        }
        start = nums[i];
    }

    target = nums[nums.length - 1];
    if (start === target) {
        answer.push(String(start));
    } else {
        answer.push(`${start}->${target}`);
    }

    return answer;
};

//? Solution with while
var summaryRanges = function (nums) {
    let ans = [];

    let l = 0;
    while (l < nums.length) {
        if (nums[l] + 1 != nums[l + 1]) {
            if (l == 0) {
                ans.push(nums[l].toString());
            } else {
                ans.push(nums[0] + '->' + nums[l]);
            }
            nums.splice(0, l + 1);
            l = -1;
        }
        l++;
    }
    return ans;
};
