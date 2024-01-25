/**
 * In a 2D grid, how many ways to travel from start to end
 * gridTravel(1,1) = 1 way (future base case)
 * gridTravel(1,0) = 0 way (future base case, any node that contains a 0, we dont need to explore its children)
 * Each move in the grid, shrinks the grid
 **/

// Time: O(2^n+m), Space O(n+m)
const gridTraveler = (row, col) => {
  //base cases
  if (row == 1 && col == 1) return 1;
  if (row == 0 || col == 0) return 0;

  return gridTraveler(row - 1, col) + gridTraveler(row, col - 1);
};

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(5, 5));
// console.log(gridTraveler(20, 20)); // Takes too long!

//optimized
// Time: O(m * sn), Space O(n + m)
const memoGridTraveler = (row, col, memo = {}) => {
  //check args in the memo key = sting
  const key = `${row},${col}`;
  if (key in memo) return memo[key];

  //base cases
  if (row == 1 && col == 1) return 1;
  if (row == 0 || col == 0) return 0;

  // add to memo obj
  memo[key] = memoGridTraveler(row - 1, col, memo) + memoGridTraveler(row, col - 1, memo);
  return memo[key];
};

console.log(memoGridTraveler(1, 1));
console.log(memoGridTraveler(2, 3));
console.log(memoGridTraveler(5, 5));
console.log(memoGridTraveler(20, 20));
