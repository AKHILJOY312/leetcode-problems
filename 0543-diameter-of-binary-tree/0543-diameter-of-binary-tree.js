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
var diameterOfBinaryTree = function(root) {
//create a variable to store the maximum diameter;
let maxDia= 0;

//start dfs recursion from root
const dfs=(node)=>{
    //base case
    if(!node){
        return 0
    }

    //recursivly find left subTree;
    let LH= dfs(node.left);
    let RH = dfs(node.right);

    //calculate diameter through current node

    let currentHeight= LH+RH;

    //update the global maximum diameter

    maxDia= Math.max(maxDia, currentHeight);

    return 1+Math.max(LH,RH);

}
dfs(root)

return maxDia;
};