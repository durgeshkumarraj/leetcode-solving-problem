/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let moves = 0;
    
    // Memoization cache to store the max moves from each cell
    const memo = Array.from({ length: rows }, () => Array(cols).fill(-1));
    
    const inRange = (r, c) => r >= 0 && r < rows && c >= 0 && c < cols;
    
    const dfs = (r, c) => {
        if (memo[r][c] !== -1) {
            return memo[r][c];
        }

        let maxMove = 0;

        // Explore each possible direction
        for (const [dr, dc] of [[-1, 1], [0, 1], [1, 1]]) {
            const nr = r + dr;
            const nc = c + dc;
            if (inRange(nr, nc) && grid[nr][nc] > grid[r][c]) {
                maxMove = Math.max(maxMove, 1 + dfs(nr, nc));
            }
        }
        
        // Store the result in the memo array
        memo[r][c] = maxMove;
        return maxMove;
    }

    // Start DFS from each cell in the first column
    for (let r = 0; r < rows; r++) {
        moves = Math.max(dfs(r, 0), moves);
    }

    return moves;
};