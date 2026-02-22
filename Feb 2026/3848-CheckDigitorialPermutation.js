/**
 * @param {number} n
 * @return {boolean}
 */
function f(n) {
    if (n === 0) return 1;
    if (n <= 2) return n;
    if (n === 3) return 6;
    if (n === 4) return 24;
    if (n === 5) return 120;
    if (n === 6) return 720;
    if (n === 7) return 5040;
    if (n === 8) return 40320;
    return 362880;
}
var isDigitorialPermutation = function (n) {
    let mp1 = Array(10).fill(0);
    let temp = n;

    while (temp > 0) {
        mp1[Math.floor(temp % 10)]++;
        temp = Math.floor(temp / 10);
    }

    let fact = 0n;
    temp = n;

    while (temp > 0) {
        fact += BigInt(f(temp % 10));
        temp = Math.floor(temp / 10);
    }

    let mp2 = Array(10).fill(0);
    temp = n;

    while (fact > 0n) {
        mp2[Number(fact % 10n)]++;
        fact = fact / 10n;
    }
    // console.log(mp1);
    // console.log(fact);
    // console.log(mp2);

    for (let i = 0; i < 10; i++) {
        if (mp1[i] !== mp2[i]) return false;
    }
    return true;
};
