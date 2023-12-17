class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(-1);
  }

  // Find operation with path compression
  find(x) {
    if (this.parent[x] === -1) {
      return x;
    }
    this.parent[x] = this.find(this.parent[x]); // path compression
    return this.parent[x];
  }

  // Union operation by rank
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
    }
  }
}

//   // Example usage:
//   const size = 5;
//   const unionFind = new UnionFind(size);

//   unionFind.union(0, 1);
//   unionFind.union(2, 3);
//   unionFind.union(3, 4);

//   console.log(unionFind.find(1)); // Output: 0 (representative of the set containing 1)
//   console.log(unionFind.find(4)); // Output: 2 (representative of the set containing 4)

module.exports = UnionFind;
