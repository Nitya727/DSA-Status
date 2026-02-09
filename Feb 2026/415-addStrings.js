/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {

    let n1 = num1.length;
    let n2 = num2.length;

    let i = n1 - 1;
    let j = n2 - 1;
    let ans = '', sum = 0, carry = 0;

    while (i >= 0 || j >= 0) {
        sum = (i >= 0) ? +num1[i] : 0;
        sum += (j >= 0) ? +num2[j] : 0;
        sum += carry;

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        ans = sum + ans;
        i--;
        j--;
    }

    if(carry) ans = carry + ans;

    return ans;

};