/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let n = nums.length;
    let cnt = 0;

    let i = 0, j = 0;
    let mini = [], maxi = [];
    let minhead = 0, maxhead = 0;

    while (j < n) {
        //expand window
        while (minhead < mini.length && nums[mini[mini.length - 1]] > nums[j])
            mini.pop();

        mini.push(j);

        while (maxhead < maxi.length && nums[maxi[maxi.length - 1]] < nums[j])
            maxi.pop();

        maxi.push(j);


        let cost = (nums[maxi[maxhead]] - nums[mini[minhead]]) * (j - i + 1);

        //shrink
        while (i < n && cost > k) {
            if (mini[minhead] === i) minhead++;
            if (maxi[maxhead] === i) maxhead++;

            i++;
            cost = (nums[maxi[maxhead]] - nums[mini[minhead]]) * (j - i + 1);
        }



        if (cost <= k) cnt += (j - i + 1);

        j++;
    }

    return cnt;
};