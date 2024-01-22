/**
 * You are given an array of strings products and a string searchWord.
 * Design a system that suggests at most three product names from products after each character of searchWord is typed.
 * Suggested products should have common prefix with searchWord.
 * If there are more than three products with a common prefix return the three lexicographically minimums products.
 * Return a list of lists of the suggested products after each character of searchWord is typed.
 *
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */

class TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
    this.wordStr = "";
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  insert(word) {
    let node = this.root;

    for (let c of word) {
      if (!node.children[c]) {
        node.children[c] = new TrieNode();
      }
      node = node.children[c];
    }
    node.isWord = true;
    node.wordStr = word;
  }

  search(word) {
    let matches = [];
    let node = this.root;

    for (let c of word) {
      if (!node.children[c]) return [];
      node = node.children[c];
    }

    dfs(node);
    matches.sort();

    return matches.slice(0, 3);

    function dfs(node) {
      if (node.isWord) {
        matches.push(node.wordStr);
      }

      for (let child in node.children) {
        dfs(node.children[child]);
      }
    }
  }
}

var suggestedProducts = function (products, searchWord) {
  const results = [];
  const trie = new Trie();

  for (let product of products) {
    trie.insert(product);
  }

  let prefix = "";
  for (let c of searchWord) {
    prefix += c;
    results.push(trie.search(prefix));
  }

  console.log(results);
  return results;
};

suggestedProducts(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse");
suggestedProducts(["havana"], "havana");
suggestedProducts(["havana"], "tatianna");
