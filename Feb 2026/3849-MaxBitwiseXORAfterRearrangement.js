/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var maximumXor = function(s, t) {
    let zero = one = 0;

    for(let i of t){
        if(i === '0') zero++;
        else one++;
    }

    let xr = '';
    for(let i of s){
        if(i === '0'){
            if(one > 0){
                xr += '1';
                one--;
            }
            else {
                xr += '0';
                zero--;
            }
        }
        //1
        else{
            if(zero > 0){
                xr += '1';
                zero--;
            }
            else{
                xr += '0';
                one--;
            }
        }
    }
    return xr;
};