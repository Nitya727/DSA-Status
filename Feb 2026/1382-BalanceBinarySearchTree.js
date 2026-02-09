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
 * @return {TreeNode}
 */
function inorder(root, arr){
    if(!root) return;

    inorder(root.left, arr);
    arr.push(root.val);
    inorder(root.right, arr);
}
function constructTree(arr, low, high){
    if(low > high) return null;

    const mid = Math.floor((low + high) / 2);

    let root = new TreeNode(arr[mid]);

    root.left = constructTree(arr, low, mid - 1);
    root.right = constructTree(arr, mid + 1, high);

    return root;
}
var balanceBST = function(root) {
    let arr = [];
    inorder(root, arr);

    return constructTree(arr, 0, arr.length - 1);
};