/**
 * Climbing Staircase (fibb)
 * Given a set on n stairs, count thr number of ways you can reach the top. 1 or 2 steps at a time
 * Big-O: O(n)
 */

const climbingStaircase = (n) => {
  // If n is 1, there's only 1 way. If n is 2, there are 2 ways.

  // 1) Set a number of ways arr with 1, and 2 as a base case.
  const numOfWays = [1, 2];

  // 2) After establishing the first understanding, we need to loop through the number of stairs (n),
  //    starting at 2, and increment the index until n. (while i is less than or equal to n)

  for (let i = 2; i <= n; i++) {
    // 3) Think of Fibonacci, the val of the next place is the sum of the previous 2,
    //    and we want to populate numOfWays[i] with that val. i starts after 1 and 2 (index 2)
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }

  // 4) we return the max val from the numOfWays arr, which is the last val
  return numOfWays[n - 1];
};

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
