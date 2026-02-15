/**
 * @param {string[]} words
 * @param {number} k
 * @return {number}
 */
var prefixConnected = function(words, k) {
    const mp = new Map();

    for(let i of words){
        if(i.length < k) continue;
        mp.set(i.slice(0, k), (mp.get(i.slice(0, k)) || 0) + 1);
    }

    console.log(mp);

    let cnt = 0;
    for(let [k, v] of mp){
        if(v > 1) cnt++;
    }
    return cnt;
};