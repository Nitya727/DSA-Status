/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let s = n.toString(2);
    
    s = '0'.repeat(32 - s.length) + s;

    s = s.split('').reverse().join('');

    return parseInt(s, 2);
};