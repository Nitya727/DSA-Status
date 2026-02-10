/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function (nums) {
    let n = nums.length;

    let sum = nums[n - 1], cnt = 1, ans = 0;

    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] > sum / cnt) ans++;
        sum += nums[i];
        cnt++;
    }

    return ans;
};