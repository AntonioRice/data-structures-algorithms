/**
 * LC 1143
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
 * For example, "ace" is a subsequence of "abcde".
 * A common subsequence of two strings is a subsequence that is common to both strings.
 *
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// Time: O(m*n), Space: O(m*n)
const longestCommonSubsequence = (text1, text2) => {
  let m = text1.length;
  let n = text2.length;

  const grid = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0)); // +1 adds extra col/roll for emtpy string (out of range catch)

  //start at grid(1,1)
  for (let r = 1; r <= m; r++) {
    for (let c = 1; c <= n; c++) {
      //checl previous diagonal cell
      if (text1[r - 1] == text2[c - 1]) {
        grid[r][c] = grid[r - 1][c - 1] + 1; // if equal, add value diagonally to current cell
      } else {
        grid[r][c] = Math.max(grid[r - 1][c], grid[r][c - 1]); // take max of cell above and to left of current cell
      }
    }
  }

  return grid[m][n];
};

console.log(longestCommonSubsequence("abcde", "ace"));
