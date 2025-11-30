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

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = []
    for(let i = 0;i<m; i++) {
        memo[i] = []
    }

    return helper(0,0, memo)

    function helper(row, col, memo) {
        if(row == m-1 && col == n-1) {
            return 1
        }
        //This is required above the next if condition bcz there will be out of bounds exception
        if(row == m || col == n) {
            return 0
        }
        if(memo[row][col] != undefined) {
            return memo[row][col]
        }
        let right = helper(row,col+1, memo)
        let down = helper(row+1,col, memo)

        memo[row][col] = right + down
        return memo[row][col]
    }
};



