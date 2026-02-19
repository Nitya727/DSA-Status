/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    
    let s = n.toString(2);
    let prev = s[0];
    for(let i = 1; i<s.length; i++){
        if(prev === s[i]) return false;
        prev = s[i];
    }
    return true;
};