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
    if (!node) return null;
    
    const clonedMap = new Map();
    
    function dfs(originalNode) {
        if (clonedMap.has(originalNode)) {
            return clonedMap.get(originalNode);
        }
        
        const cloneNode = new Node(originalNode.val);
        
        clonedMap.set(originalNode, cloneNode);
        
        for (let neighbor of originalNode.neighbors) {
            cloneNode.neighbors.push(dfs(neighbor));
        }
        
        return cloneNode;
    }
    
    return dfs(node);
};
