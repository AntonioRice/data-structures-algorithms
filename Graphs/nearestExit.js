/**
 * You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+').
 * You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.
 * In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze.
 * Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
 * Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.
 *
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
  // create a visted array. Normally a Set is used but set has strict comparison (===) so my go to of storing array of values wont work
  const visted = [];
  // prevent null errors by creating a visited grid, setting each place to false
  for (let i = 0; i < maze.length; i++) {
    visted.push(new Array(maze[0].length).fill(false));
  }
  // add the starting position to the visited grid.
  visted[entrance[0]][entrance[1]] = true;
  // will begin at starting position (entrance)
  let queue = [entrance];
  let steps = 0;
  // will need to check up, down, left, right at each position
  const dir = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  // basic start of bfs
  while (queue.length) {
    // need to keep track of each level, so initialize a new queue for each
    let nextQueue = [];
    // increment each steps since position is moved
    steps++;
    // basic loop through of nodes in queue
    for (const node of queue) {
      // retrieve curr row and col of node (curr position)
      const [row, col] = node;

      // for each position, we need to explore each direction (up, down, left, right)
      for (const [dirX, dirY] of dir) {
        // add each x and y respectively
        const nextRow = row + dirX;
        const nextCol = col + dirY;

        //check if the new position is within bounds and not a resticted space (+), and check to make sure we haven't visited that position yer
        if (isValid(nextRow, nextCol) && !visted[nextRow][nextCol]) {
          //check if that position is an exit, if so, return accumulated steps
          if (isExit(nextRow, nextCol)) {
            return steps;
          }
          // if exit isn't identified, mark the position as visited
          visted[nextRow][nextCol] = true;
          // and add it to the queue so that we can explore its neighbors
          nextQueue.push([nextRow, nextCol]);
        }
      }
    }
    // restart the queue with the next levels nodes
    queue = nextQueue;
  }

  return -1;

  function isExit(row, col) {
    return (row === 0 || col === 0 || row === maze.length - 1 || col === maze[0].length - 1) && maze[row][col] === ".";
  }

  function isValid(row, col) {
    return row >= 0 && col >= 0 && row < maze.length && col < maze[0].length && maze[row][col] !== "+";
  }
};

const direction = (r, c) => {
  // Define the direction vectors for north, south, east, and west for row & col
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, 1, -1];

  // loop over each direction vector and add it to the current position
  for (let i = 0; i < 4; i++) {
    // new row
    const rr = r + dr[i];
    // new col
    const cc = c + dc[i];
    // skip invalid cells, making sure that the new row or col is inbounds
    if (rr < 0 || cc < 0) continue;
    if (rr >= r || cc >= c) continue;
    // cell (rr, cc) is a neighboring cell of (r, c)
  }
};

console.log(nearestExit([[".", "+"]], [0, 0])); // -1
console.log(
  nearestExit(
    [
      ["+", "+", ".", "+"],
      [".", ".", ".", "+"],
      ["+", "+", "+", "."],
    ],
    [1, 2]
  )
); //1

console.log(
  nearestExit(
    [
      ["+", "+", "+"],
      [".", ".", "."],
      ["+", "+", "+"],
    ],
    [1, 0]
  )
); //2

console.log(
  nearestExit(
    [
      [".", "+", "+", "+", "+"],
      [".", "+", ".", ".", "."],
      [".", "+", ".", "+", "."],
      [".", ".", ".", "+", "."],
      ["+", "+", "+", "+", "."],
    ],
    [0, 0]
  )
); // 1

console.log(
  nearestExit(
    [
      ["+", ".", "+", "+", "+", "+", "+"],
      ["+", ".", "+", ".", ".", ".", "+"],
      ["+", ".", "+", ".", "+", ".", "+"],
      ["+", ".", ".", ".", "+", ".", "+"],
      ["+", "+", "+", "+", "+", ".", "+"],
    ],
    [0, 1]
  )
); // 12

console.log(
  nearestExit(
    [
      ["+", ".", "+", "+", "+", "+", "+"],
      ["+", ".", "+", ".", ".", ".", "+"],
      ["+", ".", "+", ".", "+", ".", "+"],
      ["+", ".", ".", ".", "+", ".", "+"],
      ["+", "+", "+", "+", "+", "+", "."],
    ],
    [0, 1]
  )
); // 12
