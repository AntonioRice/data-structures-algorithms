// Graphs

/**
 * A non-linear ds that consist of a finite number of vertices (nodes) connected by edges
 * trees are top down, but graphs are bottom up. No heirachy
 * Directed Graph: A graph which edges have a direction, represented by arrows to denote direction.
 * Undirected Graph: Can be traversed in either directions, bidirectional (absence of an arrow denotes this)
 * Graphs can be have nodes have sel loop, edges the "cost" to traverse, verticies with no edges, nodes with multiple edges, cycles...
 *
 * Usage: Google maps (cities - verticies, roads - edges), Social Media Sites (users - verticies, links - edges (mutual connections) )
 */

// Implementaion (Adjacency Matrix, Adjacency List)
/**
 * Adjacency Matrix:  A 2D array of size VxV where V represents the number of verticies in the graph. Each row and column represent a vertex.
 * If the value of any element, matrix[i][j] is 1, it represents at there is an edge connecting vertix i and vertex j.
 * Need to store a value for all edges (1 or 0)
 * Inserting and searching is Linear time complexity - O(n)
 * Need to store additional values externally
 */

const matrix = [
  /**       A, B, C */
  /** A */ [0, 1, 0],
  /** B */ [1, 0, 1],
  /** C */ [0, 1, 0],
];

console.log(matrix[0][1]); // 1 since a connect exisit from A-B
console.log(matrix[1][2]); // 1 since a connect exisit from B-C
console.log(matrix[0][0]); // 0 since A doesn't contain a self loop

/**
 * Adjacency List: Verticies are stored in a map like data structure, and every vertex stores a list of its adjacent vertices
 * We only need to store the values for the edges that exist, making it more efficient than AM.
 * Innserting and search is Constant time complexity - O(1)
 * Able to store additional values like weight of egde
 */

const adjacentList = { A: ["B"], B: ["A", "C"], C: ["B"] };

console.log(adjacentList.A);
console.log(adjacentList.B);
console.log(adjacentList.C);

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();
console.log(graph.hasEdge("A", "B"));
console.log(graph.hasEdge("A", "C"));
graph.removeEdge("A", "B");

graph.removeVertex("B");
graph.display();
