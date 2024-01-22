class Trie {
  constructor() {
    this.root = {};
  }
  insert(word) {
    let node = this.root;

    for (let c of word) {
      if (node[c] == null) {
        node[c] = {};
      }
      node = node[c];
    }

    node.isWord = true;

    return word;
  }
  traverse(word) {
    let node = this.root;

    for (let c of word) {
      if (node[c] != null) {
        node = node[c];
      } else {
        node = null;
      }
    }

    return node;
  }
  search(word) {
    let node = this.traverse(word);
    return node !== null && node.isWord === true;
  }
  startsWith(prefix) {
    let node = this.traverse(prefix);
    return node !== null;
  }
}

const trie = new Trie();

console.log(trie.insert("car"));
console.log(trie.insert("carpet"));
console.log(trie.search("car"));
console.log(trie.search("cars"));
console.log(trie.search("car"));
console.log(trie.search("carpet"));
console.log(trie.startsWith("carpet"));
console.log(JSON.stringify(trie));
