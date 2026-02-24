/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function (s, k) {
    let n = s.length;

    if (k > n) return false;

    let st = new Set();

    let i = 0;

    while (i + k - 1 < n) {
        let str = s.slice(i, i + k);
        st.add(str);
        i++;
    }

    return st.size === Math.pow(2, k);
};