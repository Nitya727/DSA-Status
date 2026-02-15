/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) nums[i] = -1;
    }

    //find length of longest subarray wjhose sum is 0

    let preSum = 0, len = 0;
    //{prefixsum, index}
    let mp = new Map();

    for (let i = 0; i < n; i++) {
        preSum += nums[i];

        if (preSum === 0) len = i + 1;

        else if (mp.get(preSum) !== undefined) {
            len = Math.max(len, i - mp.get(preSum));
        }

        else mp.set(preSum, i);
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] === -1)
            nums[i] = 0;
    }

    return len;
};