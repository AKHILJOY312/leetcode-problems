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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    if(!root)return false;

    let queue=[[root,null]];

    while(queue.length){
        let size = queue.length;
        let parentX= null;
        let parentY=null;

        for(let i=0;i<size;i++){
            let [node,parent]= queue.shift();

            if(node.val===x)parentX= parent;
            if(node.val === y)parentY= parent;

            if(node.left)queue.push([node.left,node]);
            if(node.right)queue.push([node.right,node]);

        }
        if(parentX && parentY)return parentX !== parentY;
        if(parentX || parentY)return false;
    }
    return false;
};