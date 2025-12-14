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
    let max = 0;

    function diameterHelper(node) {
        if (!node) return 0;

        let left = diameterHelper(node.left);
        let right = diameterHelper(node.right);

        // update diameter
        max = Math.max(max, left + right);

        // return height
        return Math.max(left, right) + 1;
    }

    diameterHelper(root);
    return max;
};
