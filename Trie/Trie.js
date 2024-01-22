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
        break;
      }
    }

    return node;
  }
  search(word) {
    let node = this.traverse(word);
    return node != null && node.isWord == true;
  }
  startsWith(prefix) {
    let node = this.traverse(prefix);
    return node != null;
  }
}

// const trie = new Trie();
// trie.insert("hotdog");
// console.log(trie.startsWith("dog"));
// trie.insert("apple");
// trie.insert("apples");
// trie.insert("car");
// trie.insert("carpet");
// console.log(trie.search("carpet"));
// console.log(trie.startsWith("car"));
// console.log(trie.startsWith("carx"));
// console.log(trie.search("a"));
// console.log(JSON.stringify(trie));

module.exports = Trie;
