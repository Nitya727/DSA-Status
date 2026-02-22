function gcd(a, b) {
    if (a === 0) return b;
    if (b === 0) return a;
    return gcd(b, a % b);
}

function simplify(num, den) {
    let g = gcd(num, den);
    num /= g;
    den /= g;
    return [num, den];
}

function f(i, num, den, nums, k, mp) {
    if (i === nums.length) {
        return ((den !== 0) && (num === den * k)) ? 1 : 0;
    }

    let key = i + ',' + num + ',' + den;

    if (mp.has(key)) return mp.get(key);

    let res = 0;

    //1. multiply
    let num1 = num * nums[i];
    let den1 = den;
    [num1, den1] = simplify(num1, den1);

    res += f(i + 1, num1, den1, nums, k, mp);

    //2. divide

    let num2 = num;
    let den2 = den * nums[i];
    [num2, den2] = simplify(num2, den2);

    res += f(i + 1, num2, den2, nums, k, mp);

    //unchanged

    res += f(i + 1, num, den, nums, k, mp);

    mp.set(key, res);
    return res;
}

var countSequences = function (nums, k) {
    let mp = new Map();

    return f(0, 1, 1, nums, k, mp);
};
