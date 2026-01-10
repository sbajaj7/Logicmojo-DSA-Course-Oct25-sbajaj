/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let numOfIslands = 0
    for(let i = 0; i <grid.length; i++) {
        for(let j = 0; j<grid[0].length;j++) {
            if(grid[i][j] == '1'){
                dfsHelper(grid,i,j)
                numOfIslands++
            }
        }
    }

    function dfsHelper(grid,i,j) {
        if(i<0 || j<0 || i>=grid.length || j>= grid[0].length || grid[i][j] == '0') {
            return
        }
        grid[i][j] = 0
        dfsHelper(grid, i+1,j)
        dfsHelper(grid, i,j+1)
        dfsHelper(grid, i-1,j)
        dfsHelper(grid, i,j-1)
    }
    return numOfIslands
};
