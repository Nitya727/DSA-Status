/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let s = '';
    for (let i of words) {
        let wt = 0;
        for (let j of i) {
            wt += weights[j.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        wt = wt % 26;

        // console.log(wt);

        console.log((25 - wt).toString());

        s += String.fromCharCode(25 - wt + 97);
    }
    return s;
};