/**
 * @param {string} s
 * @return {number}
 */
var maxOperations = function (s) {
  let n = s.length;

  let ans = 0;
  let consecutiveOnes = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === "1") consecutiveOnes++;
    else if (
      (i < n - 1 && s[i] === "0" && s[i + 1] === "1") ||
      (i === n - 1 && s[i] === "0")
    ) {
      ans += consecutiveOnes;
    }
  }

  return ans;
};
