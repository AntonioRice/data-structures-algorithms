/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let c1 = cost[0];
  let c2 = cost[1];

  cost.push(0);
  for (let i = 2; i < cost.length; i++) {
    let min = Math.min(c1, c2) + cost[i];
    c1 = c2;
    c2 = min;
  }

  return c2;
};

console.log(minCostClimbingStairs([10, 15, 20]));
