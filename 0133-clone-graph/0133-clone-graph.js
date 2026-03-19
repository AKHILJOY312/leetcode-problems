/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    const visited= new Map();

    const dfs= (currNode)=>{
        if(!currNode)return null;

        if(visited.has(currNode)){
            return visited.get(currNode);
        }
        const clone = new Node(currNode.val);
        visited.set(currNode,clone);

        for(let neighbor of currNode.neighbors){
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }
    return dfs(node);
};