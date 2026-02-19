/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueFreq = function (nums) {
    let n = nums.length;

    const freq = new Map();

    for (let i of nums) {
        freq.set(i, (freq.get(i) || 0) + 1);
    }

    const mp = new Map([]);
    for (let [k, v] of freq) {
        if (!mp.get(v)) {
            mp.set(v, []);
        }
        mp.get(v).push(k);
    }

    console.log(mp)

    for (let [k, v] of mp) {
        if (v.length === 1)
            return v[0];
    }

    return -1;
};