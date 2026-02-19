/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var rotateElements = function(nums, k) {
    let n = nums.length;

    let pos = [];
    for(let i of nums){
        if(i >= 0) pos.push(i);
    }
    console.log(pos)

    k = k % pos.length;

    //rotate 1st k elements
    rotate(0, k - 1);
    rotate(k, pos.length - 1);
    rotate(0, pos.length - 1);

    console.log(pos)


    let ind = 0;
    for(let i = 0; i< n; i++){
        if(nums[i] >= 0){
            nums[i] = pos[ind++];
        }
    }
    return nums;


    function rotate(l, r){
        while(l <= r){
            let temp = pos[l];
            pos[l] = pos[r];
            pos[r] = temp;

            l++;
            r--;
        }
    }
};