/**
 * @param {number[][]} matrix
 * @return {number}
 */
// JavaScript


/**
 * @param {number[][]} matrix
 * @return {number}
 */
function countSquares(matrix) {
    // Get dimensions of the matrix
    const n = matrix.length;    // number of rows
    const m = matrix[0].length; // number of columns
    
    // Create a DP table with same dimensions as matrix
    const dp = Array(n).fill().map(() => Array(m).fill(0));
    
    // Variable to store total count of squares
    let ans = 0;
    
    // Initialize first column of DP table
    for (let i = 0; i < n; i++) {
        dp[i][0] = matrix[i][0];
        ans += dp[i][0];
    }
    
    // Initialize first row of DP table
    for (let j = 1; j < m; j++) {
        dp[0][j] = matrix[0][j];
        ans += dp[0][j];
    }
    
    // Fill the DP table for remaining cells
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] === 1) {
                dp[i][j] = 1 + Math.min(
                    dp[i][j-1],
                    dp[i-1][j],
                    dp[i-1][j-1]
                );
            }
            ans += dp[i][j];
        }
    }
    
    return ans;
}