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
var countNodes = function (root) {

    const leftCount = (node) => {
        let h = 0;
        while (node) {
            h++
            node = node.left;

        }
        return h;
    }

    const rightCount = (node) => {
        let h = 0;
        while (node) {
            h++
            node = node.right;

        }
        return h;
    }
    const lh = leftCount(root);
    const rh = rightCount(root);

    if (lh === rh) {
        return (1 << lh) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right)
};