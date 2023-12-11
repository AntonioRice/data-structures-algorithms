/**
 * You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1.
 * If a string is longer than the other, append the additional letters onto the end of the merged string.
 * Return the merged string.
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

//  0(n+m)

var mergeAlternately = function (word1, word2) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    result.push(word1[i], word2[j]);
    i++;
    j++;
  }

  result.push(word1.slice(i), word2.slice(j));

  return result.join("");
};

console.log(mergeAlternately("abc", "123456"));
