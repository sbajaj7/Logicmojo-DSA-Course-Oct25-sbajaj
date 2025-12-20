var isCompleteTree = function(root) {
    let end = false;
    const queue = [root]; // Initialize queue with the root

    while (queue.length > 0) {
        const cur = queue.shift(); // Equivalent to queue.poll()

        if (cur === null) {
            // Once we hit a null, all subsequent nodes in BFS must be null
            end = true;
        } else {
            // If we find a non-null node after seeing a null, it's not complete
            if (end) return false;
            
            queue.push(cur.left);
            queue.push(cur.right);
        }
    }

    return true;
};
