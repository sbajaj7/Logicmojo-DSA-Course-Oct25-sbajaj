var postorderTraversal  = function(root) {
    let result = []
    helper(root, result)
    return result
};

function helper(node, result) {
    if(!node) return

    helper(node.left, result)
    helper(node.right, result)
    result.push(node.val)
}
