/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let n = nums.length;

    let len = 0, cnt = 0;
    for(let i = 0; i<n; i++){
        if(nums[i] === 0){
            cnt += len + 1;
            len++;
        }
        else len = 0;
    }

    return cnt;
};