/**
 * Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
 * A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let count = 0;

  const rows = grid.map((row) => row.join());
  const columns = grid[0].map((col, i) => grid.map((row) => row[i]).join());

  for (const row of rows) {
    for (const column of columns) {
      if (row == column) {
        count++;
      }
    }
  }

  return count;
};

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ])
); // 1
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ])
); // 3
console.log(
  equalPairs([
    [13, 13],
    [13, 13],
  ])
); // 4
