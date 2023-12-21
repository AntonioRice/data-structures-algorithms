/**
 * You are given an m x n grid where each cell can have one of three values:
 * 0) representing an empty cell,
 * 1) representing a fresh orange, or
 * 2) representing a rotten orange.
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 *
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const visited = new Set("0-0");
  let queue = [];
  let minutes = 0;
  let fresh = 0;

  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === 1) fresh++;
      if (grid[r][c] === 2) queue.push([r, c]);
    }
  }

  // bfs - time O(r*c), space O(r*c)
  while (fresh && queue.length > 0) {
    const nextQueue = [];

    for (const node of queue) {
      const [currentRow, currentCol] = node;

      for (const [dirX, dirY] of directions) {
        const newRow = currentRow + dirX;
        const newCol = currentCol + dirY;

        if (isValid(newRow, newCol) && !visited.has(`${newRow}-${newCol}`)) {
          visited.add(`${newRow}-${newCol}`);

          if (grid[newRow][newCol] == 0) continue;

          if (grid[newRow][newCol] == 1 && grid[currentRow][currentCol] == 2) {
            grid[newRow][newCol] = 2;
            fresh--;
          }

          nextQueue.push([newRow, newCol]);
        }
      }
    }
    queue = nextQueue;
    minutes++;
  }

  return fresh === 0 ? minutes : -1;

  function isValid(row, col) {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
  }
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
); // 4
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
); // -1
console.log(orangesRotting([[0, 2]])); // 0
