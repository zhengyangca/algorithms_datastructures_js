/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function (grid) {
    const bottomEdge = grid.length - 1;
    const rightEdge = grid[0].length - 1;

    let dp = Array(grid.length).fill(null).map(() => Array(grid[0].length).fill(0));

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const element = grid[0][j];
            console.log(element);
            dp[i][j] = element;
            if (i === 0 && j !== 0) { // first row
                dp[i][j] = grid[i][j] + dp[i][j - 1];
            } else if (i !== 0 && j === 0) { // most-left column
                dp[i][j] = grid[i][j] + dp[i - 1][j];
            } else if (i !== 0 && j !== 0) { // middle numbers
                dp[i][j] = grid[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1])
            } else if (i === 0 && j === 0) { // start (0, 0)
                dp[i][j] = grid[i][j];
            }
        }
    }
    return dp[bottomEdge][rightEdge];
};

// const grid = [
//     [1, 4, 8, 6, 2, 2, 1, 7],
//     [4, 7, 3, 1, 4, 5, 5, 1], 
//     [8, 8, 2, 1, 1, 8, 0, 1], 
//     [8, 9, 2, 9, 8, 0, 8, 9], 
//     [5, 7, 5, 7, 1, 8, 5, 5], 
//     [7, 0, 9, 4, 5, 6, 5, 6], 
//     [4, 9, 9, 7, 9, 1, 9, 0]
// ];
const grid = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
];
const sum = minPathSum(grid);
console.log('sum= ', sum);