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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const result = [];

    function dfs(node, comp) {
        if (!node) return;
        comp.push(node.val);
        if (!node.left && !node.right) {
            result.push(comp.join("->"));
           
        } else {
            dfs(node.left,comp);
            dfs(node.right,comp);
        }
        comp.pop();

    }
    dfs(root, [])

    return result;
};