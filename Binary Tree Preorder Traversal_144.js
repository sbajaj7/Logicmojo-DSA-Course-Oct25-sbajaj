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
var preorderTraversal = function(root) {
    let result = []
    helper(root, result)
    return result
};

function helper(node, result) {
    if(!node) return

    result.push(node.val)
    helper(node.left, result)
    helper(node.right, result)
}
