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
 * @return {number[]}
 */
var findMode = function (root) {
   let result = [];
    let count = 0;
let maxCount = 0;
   let prev = null;

    const inorder = (node) => {
        if (!node) return;
        inorder(node.left);
        if (prev == node.val) {
            count++;
        } else { count = 1 }

        if (count > maxCount) {
            maxCount = count;
            result = [node.val];
        } else if (count === maxCount) {
            result.push(node.val);

        }
        prev = node.val;

        inorder(node.right);
    }
    inorder(root);
    return result;
};