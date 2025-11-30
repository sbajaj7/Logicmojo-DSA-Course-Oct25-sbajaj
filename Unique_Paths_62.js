//Without memoization and DP we get Time limit exceeded
/*var uniquePaths = function(m, n) {
    return helper(0,0)

    function helper(row, col) {
        if(row == m-1 && col == n-1) {
            return 1
        }
        if(row == m || col == n) {
            return 0
        }
        let right = helper(row,col+1)
        let down = helper(row+1,col)

        return right + down
    }
};*/

