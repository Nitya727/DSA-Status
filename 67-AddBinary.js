/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let i = a.length - 1;
    let j = b.length - 1;

    let s = '', carry = 0;

    while (i >= 0 && j >= 0) {
        let sum = (+a[i]) + (+b[j]) + carry;

        //0 0 0
        if (sum === 0) {
            s += '0';
            carry = 0;
        }
        //0 0 1
        else if (sum === 1) {
            s += '1';
            carry = 0;
        }
        //1 1 0
        else if (sum === 2) {
            s += '0';
            carry = 1;
        }
        //1 1 1
        else if (sum === 3) {
            s += '1';
            carry = 1;
        }
        i--;
        j--;

        if(i < 0 && j < 0 && carry > 0) s += carry;
    }

    while (i >= 0) {
        let sum = (+a[i]) + carry;
        //0 0
        if (sum === 0) {
            s += '0';
            carry = 0;
        }
        //0 1
        else if (sum === 1) {
            s += '1';
            carry = 0;
        }
        //1 1
        else if (sum === 2) {
            s += '0';
            carry = 1;
        }
        i--;
        if (i < 0 && carry > 0) s += carry;
    }

    while (j >= 0) {
        let sum = (+b[j]) + carry;
        //0 0
        if (sum === 0) {
            s += '0';
            carry = 0;
        }
        //0 1
        else if (sum === 1) {
            s += '1';
            carry = 0;
        }
        //1 1
        else if (sum === 2) {
            s += '0';
            carry = 1;
        }
        j--;

        if (j < 0 && carry > 0) s += carry;
    }

    return s.split('').reverse().join('');
};