/**
 * There are n cities. Some of them are connected, while some are not.
 * If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
 * A province is a group of directly or indirectly connected cities and no other cities outside of the group.
 * You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
 * Return the total number of provinces.
 *
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const visted = new Set();
  let connections = 0;

  // begin by looping through the matrix and checking to see if each city (index) has been visited
  for (let i = 0; i < isConnected.length; i++) {
    // if the city hasn't been visited, we need to dfs (traverse) that city
    if (!visted.has(i)) {
      dfs(i);
      // since we're starting a dfs, increase the connections by one to denote a new city is being traversed
      connections += 1;
    }
  }

  // return the number of connections made (cities traversed)
  return connections;

  function dfs(i) {
    // starting the traversal, we mark that the city(index) has need visited
    visted.add(i);
    // we then need to explore the city and see if we need to visit this city's connections
    for (let j = 0; j < isConnected.length; j++) {
      // isConnected[i][j] denotes a direct connection to a 'new' city j, and if we haven't visited that city [j], we need to dfs on that as well
      if (isConnected[i][j] === 1 && !visted.has(j)) {
        dfs(j);
      }
    }
  }
};

const result1 = findCircleNum([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]); // 2

console.log(result1 == 2 ? "PASS" : "FAIL", result1);

const result2 = findCircleNum([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]); // 3
console.log(result2 == 3 ? "PASS" : "FAIL", result2);
