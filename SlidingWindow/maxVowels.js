/**
 * Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
 * Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function (s, k) {
  const vowelsMap = new Map([["a"], ["e"], ["i"], ["o"], ["u"]]);
  let count = 0;
  let windowEnd = k;

  // initialize window
  for (let i = 0; i < k; i++) {
    if (vowelsMap.has(s[i])) {
      count++;
    }
  }

  let maxVowels = count;

  while (windowEnd < s.length) {
    if (vowelsMap.has(s[windowEnd - k]) && count != 0) {
      count--;
    }

    if (vowelsMap.has(s[windowEnd])) {
      count++;
    }

    maxVowels = Math.max(count, maxVowels);
    windowEnd++;
  }

  return maxVowels;
};

console.log(maxVowels("abciiidef", 3)); //3
console.log(maxVowels("aaaiiidef", 3)); //3
console.log(maxVowels("aeiou", 2)); //2
console.log(maxVowels("leetcode", 3)); //2
