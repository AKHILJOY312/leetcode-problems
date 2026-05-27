/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
    const result = [];

    //write a traversal function
    const traversal = (nodes) => {
        if (!nodes) return;
        result.push(nodes.val);

        for (let node of nodes.children) {
            traversal(node);
        }
    }
    traversal(root)

    return result;
};