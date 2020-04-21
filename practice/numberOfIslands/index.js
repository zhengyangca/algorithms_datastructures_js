/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const num = grid[i][j];
            if (num === '1') {
                count++;
                dfs(i, j, grid);
            }
        }
    }
    return count;
};

const dfs = (i, j, grid) => {
    const rows = grid.length;
    const columns = grid[0].length;

    if (i < 0 || i >= rows || j < 0 || j >= columns || grid[i][j] === '0') {
        return;
    }
    
    grid[i][j] = '0';

    dfs(i - 1, j, grid);
    dfs(i, j - 1, grid);
    dfs(i + 1, j, grid);
    dfs(i, j + 1, grid);
}

const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "1", "1"],
];
const num = numIslands(grid);
console.log('num= ', num);
