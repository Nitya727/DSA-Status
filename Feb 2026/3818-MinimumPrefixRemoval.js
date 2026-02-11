/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPrefixLength = function (nums) {
    if (nums.length === 1) return 0;

    for (let i = nums.length - 2; i >= 0; i--) {
        if(nums[i] >= nums[i + 1]) return i + 1;
    }
    return 0;
};