/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function (s) {
    let n = s.length, len = 0;

    for (let i = 0; i < n; i++) {
        const freq = Array(26).fill(0);

        for (let j = i; j < n; j++) {

            const ch = s.charCodeAt(j) - 'a'.charCodeAt(0);

            freq[ch]++;
            let f = true;

            for (let i of freq) {
                if (i !== 0 && i !== freq[ch]) {
                    f = false;
                    break;
                }
            }

            if(f) len = Math.max(len, j - i + 1);
        }

    }
    return len;
};