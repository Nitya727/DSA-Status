/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function (words) {
    let n = words.length;
    let ans = [];

    for (let top = 0; top < n; top++) {

        for (let left = 0; left < n; left++) {

            if(top === left) continue;

            for (let bottom = 0; bottom < n; bottom++) {

                if(bottom === left || bottom === top) continue;

                for (let right = 0; right < n; right++) {

                    if(right === bottom || right === left || right === top) continue;
  
                    if(isSquare(top, left, bottom, right))
                        ans.push([words[top], words[left], 
                        words[right], words[bottom]]);
                }
            }
        }
    }

    function isSquare(top, left, bottom, right){

        return words[top][0] === words[left][0]
         && words[top][3] === words[right][0]
         && words[bottom][0] === words[left][3]
         && words[bottom][3] === words[right][3];
    }

    ans.sort();

    return ans;
};