/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let dist = -1, maxi = 0, prev = -1;
    while (n > 0) {
        if (n & 1) {
            //first 1 encountered
            maxi = Math.max(maxi, dist);
            dist = 1;
            prev = 1;
        }
        else {
            if (prev === 1) dist++;
        }
        n = n >> 1;
    }
    return maxi;
};