/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    if (root === null) {
        return 0;
    }

    let s = '', sum = 0;
    f(root, s);
    return sum;

    function f(node, s) {
        if(node === null) return;

        if (node.left === null && node.right === null) {
            s += node.val
            sum += parseInt(s, 2);
            return;
        }

        f(node.left, s + node.val);
        f(node.right, s + node.val);
    }
};