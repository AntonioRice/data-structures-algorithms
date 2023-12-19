/**
 * LC 399
 * You are given an array of variable pairs equations and an array of real numbers values, where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i].
 * Each Ai or Bi is a string that represents a single variable.
 * You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where you must find the answer for Cj / Dj = ?.
 * Return the answers to all queries. If a single answer cannot be determined, return -1.0.
 * Note: The input is always valid. You may assume that evaluating the queries will not result in division by zero and that there is no contradiction.
 * Note: The variables that do not occur in the list of equations are undefined, so the answer cannot be determined for them.
 *
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const adjList = new Map();
  const results = [];

  // create an adjacency list with each value
  for (const i in equations) {
    const [numerator, denominator] = equations[i];
    const weight = values[i];

    if (!adjList.has(numerator)) adjList.set(numerator, []);
    if (!adjList.has(denominator)) adjList.set(denominator, []);

    adjList.get(numerator).push([denominator, weight]);
    adjList.get(denominator).push([numerator, 1 / weight]);
  }

  // loop through each query and an array of results
  for (const query of queries) {
    const visited = new Set();
    const [numerator, denominator] = query;
    const result = dfs(numerator, denominator, visited);
    results.push(result);
  }

  // create dfs
  function dfs(numerator, denominator, visited) {
    // return -1.0 if either variable is not accounted for in adjList
    if (!adjList.has(numerator) || !adjList.has(denominator)) return -1.0;
    // if values, are equal, return 1.0 (any number divided by itself is 1.0)
    if (numerator == denominator) return 1.0;
    // mark the numerator as visited
    visited.add(numerator);
    // check if the numerator has a connection to any other... (neighbors)
    const neighbors = adjList.get(numerator);
    // null check neighbors just in case
    if (!neighbors) return;
    // loop through neightbors
    for (const neighbor of neighbors) {
      // since neighbor is an array containing the variable (numerator) and its values, we can deconstruct it
      const [neighborNum, neighborVal] = neighbor;
      // check the to see if we'd visited this neighbor before
      if (!visited.has(neighborNum)) {
        // if not, perform a dfs on it to explore its neighbors, returning the result
        let result = dfs(neighborNum, denominator, visited);
        if (result !== -1.0) {
          return neighborVal * result;
        }
      }
    }

    return -1.0;
  }

  return results;
};

const equations = [
  ["a", "b"],
  ["b", "c"],
];
const values = [2.0, 3.0];
const queries = [
  ["a", "c"],
  ["b", "a"],
  ["a", "e"],
  ["a", "a"],
  ["x", "x"],
];
console.log(calcEquation(equations, values, queries)); // [6.00000,0.50000,-1.00000,1.00000,-1.00000]
