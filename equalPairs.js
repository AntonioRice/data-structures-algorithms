/**
 * Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.
 * A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const rowsMap = new Map();
  const colsMap = new Map();
  let count = 0;

  const rows = grid.map((row) => row.join());
  const columns = grid[0].map((col, i) => grid.map((row) => row[i]).join());
  console.log(rows);
  console.log(columns);

  for (const row of rows) {
    for (const column of columns) {
      if (row == column) {
        count++;
      }
    }
  }

  return count;

  //   for (let i = 0; i < grid.length; i++) {
  //     for (let j = 0; j < grid.length; j++) {
  //       transposedGrid[j][i] = grid[i][j];
  //   rowsMap.set(grid[i][j], i);
  //   colsMap.set(grid[j][i], j);

  //   if (rowsMap.has(i)) {
  //     let rowArr = rowsMap.get(i);
  //     rowArr.push(grid[i][j]);
  //     rowsMap.set(i, rowArr);
  //   } else {
  //     rowsMap.set(i, [grid[i][j]]);
  //   }

  //   if (colsMap.has(i)) {
  //     let colArr = colsMap.get(i);
  //     colArr.push(grid[j][i]);
  //     colsMap.set(i, colArr);
  //   } else {
  //     colsMap.set(i, [grid[j][i]]);
  //   }
  //     }
  //   }

  //   console.log("ROW: ", rowsMap);
  //   console.log("COL: ", colsMap);

  //   return count;
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
