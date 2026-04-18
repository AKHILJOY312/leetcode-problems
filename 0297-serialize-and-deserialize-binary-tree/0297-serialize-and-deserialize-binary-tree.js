/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result=[];
    
    const dfs=(node)=>{
        if(!node){
            result.push("null");
            return;
        }

        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    const list=data.split(',');
    let i=0;

    const dfs=()=>{
        if(list[i]==="null"){
            i++;
            return null;
        }
        const node= new TreeNode(parseInt(list[i]))
        i++;

         node.left= dfs();
        node.right= dfs();
        return node;
    }
    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */