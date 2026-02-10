/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function (nums) {
    let n = nums.length;
    let len = 0;

    for (let i = 0; i < n; i++) {
        let even = new Set(), odd = new Set();
        for (let j = i; j < n; j++) {
            if (nums[j] % 2 === 0) even.add(nums[j]);
            else odd.add(nums[j]);

            if (odd.size === even.size) len = Math.max(len, j - i + 1);
        }
    }
    return len;
};