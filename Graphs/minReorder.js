/**
 * LC 1466
 * There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree).
 * Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
 * Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.
 * This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
 * Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
 * It's guaranteed that each city can reach city 0 after reorder.
 *
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// BFS - time/space O(n + m)
var minReorder = function (n, connections) {
  const visted = new Set();
  let reOrders = 0;

  const adjacencyList = new Map();
  for (const [origin, destination] of connections) {
    adjacencyList.set(origin, (adjacencyList.get(origin) || []).concat([[destination, 1]]));
    adjacencyList.set(destination, (adjacencyList.get(destination) || []).concat([[origin, 0]]));
  }

  const queue = [0];

  while (queue.length) {
    const originNode = queue.shift();
    visted.add(originNode);

    const destinationNodes = adjacencyList.get(originNode);

    if (!destinationNodes) return;

    for (const [neighbor, weight] of destinationNodes) {
      if (!visted.has(neighbor)) {
        reOrders += weight;
        queue.push(neighbor);
      }
    }
  }

  return reOrders;
};

const connections1 = [
  [0, 1],
  [1, 3],
  [2, 3],
  [4, 0],
  [4, 5],
];
console.log(minReorder(6, connections1)); // 3

const connections2 = [
  [
    [1, 0],
    [2, 0],
  ],
];
console.log(minReorder(3, connections2)); // 0
