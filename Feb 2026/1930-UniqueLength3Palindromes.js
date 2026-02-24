/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {

    let n = s.length, cnt = 0;
    let firstSeen = {};
    let lastSeen = {};

    for (let i = 0; i < n; i++) {
        if (firstSeen[s[i]] === undefined) {
            firstSeen[s[i]] = i;
        }
        lastSeen[s[i]] = i;
    }


    for (let i=0; i<n; i++) {
        if (firstSeen[s[i]] === i && firstSeen[s[i]] < lastSeen[s[i]]) {
            let str = s.slice(firstSeen[s[i]] + 1, lastSeen[s[i]]);

            let uniqueCnt = new Set(str).size;
            cnt += uniqueCnt;
        }
    }

    return cnt;


};