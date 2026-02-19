/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let n = s.length;
    let prev = -1, cnt = 0;
    let groups = [];

    for (let i of s) {
        if (prev === -1 || +i === prev)
            cnt++;
        else {
            groups.push(cnt);
            cnt = 1;
        }
        prev = +i;
    }
    groups.push(cnt);


    console.log(groups)

    let ans = 0;
    for (let i = 1; i < groups.length; i++) {
        ans += Math.min(groups[i], groups[i - 1]);
    }

    return ans;
};