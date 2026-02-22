/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
function f(n){
    let setBits = 0;
    while(n > 0){
        if(n & 1) setBits++;
        n = n >> 1;
    }
    return setBits;
}
function isPrime(n){
    if(n === 1) return false;
    if(n === 2) return true;
    for(let i = 2; i<n; i++){
        if(n % i === 0) return false;
    }
    return true;
}
var countPrimeSetBits = function (left, right) {
    let cnt = 0;
    for (let n = left; n <= right; n++){
        let setBits = f(n);
        if(isPrime(setBits))
            cnt++;
    }

    return cnt;
};