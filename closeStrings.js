/**
 * Two strings are considered close if you can attain one from the other using the following operations:
 * Operation 1: Swap any two existing characters.
 * For example, abcde -> aecdb
 * Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
 * For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
 * You can use the operations on either string as many times as necessary.
 * Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1 === word2) {
    return true;
  }
  if (word1.length != word2.length) {
    return false;
  }

  const word1FreqMap = new Map();
  const word2FreqMap = new Map();

  for (const letter of word1) {
    word1FreqMap.set(letter, (word1FreqMap.get(letter) || 0) + 1);
  }

  for (const letter of word2) {
    if (!word1FreqMap.has(letter)) {
      return false;
    }
    word2FreqMap.set(letter, (word2FreqMap.get(letter) || 0) + 1);
  }

  const set1 = new Set([...word1FreqMap.values()]);
  const set2 = new Set([...word2FreqMap.values()]);

  if (set1.size != set2.size) return false;

  for (const [letter, freq] in word1FreqMap) {
    if (word2FreqMap.get(letter) != freq) {
      return false;
    }
  }

  return true;
};

console.log(closeStrings("ab", "ab")); //true
console.log(closeStrings("abc", "bca")); //true
console.log(closeStrings("cabbba", "abbccc")); //true
console.log(closeStrings("a", "aa")); //false
console.log(closeStrings("qwerty", "asdfss")); //false
console.log(closeStrings("cabbba", "aabbss")); //false
console.log(closeStrings("abbzzca", "babzzcz")); //false
console.log(closeStrings("ssx", "uau")); //false
console.log(closeStrings("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff")); //false
console.log(closeStrings("abbzccca", "babzzczc")); //true

// Map(6) { 'a' => 3, 'b' => 4, 'c' => 2, 'd' => 2, 'e' => 5, 'f' => 5 }
// Map(6) { 'a' => 5, 'b' => 2, 'c' => 3, 'd' => 3, 'e' => 4, 'f' => 4 }
//   -2         2        -1        -1         1         1
