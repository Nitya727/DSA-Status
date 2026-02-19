/**
 * @param {number[]} nums
 * @param {number[]} colors
 * @return {number}
 */
var rob = function (nums, colors) {

    let dp = [];
    let n = nums.length;

    for (let i = 0; i < n + 1; i++) {
        dp.push(Array(2).fill(0));
    }

    for (let i = n - 1; i >= 0; i--) {
        for (let prevPick = 0; prevPick < 2; prevPick++) {

            let pick = 0, notPick = 0;

            if (prevPick === 1 && (colors[i] == colors[i - 1])) {
                pick = 0;
            }

            else {
                pick = nums[i] + dp[i + 1][1]
            }

            notPick = dp[i + 1][0];

            dp[i][prevPick] = Math.max(pick, notPick);
        }
    }

    return dp[0][0];
};