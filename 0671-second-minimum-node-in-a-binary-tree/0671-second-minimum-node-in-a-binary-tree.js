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
var findSecondMinimumValue = function (root) {
    let second = Infinity, first = root.val;

    const dfs = (node) => {
        if (!node) return node;
        if (node.val > first) {
            second = Math.min(second, node.val);
        }
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root)
    return second==Infinity?-1:second;
};