/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some
 * (can be none) of the characters without disturbing the relative positions of the remaining characters.
 * (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
  if (!s.length) return true;

  let i = 0,
    j = 0;

  while (j < t.length && i < s.length) {
    if (s[i] != t[j]) {
      j++;
    } else {
      i++, j++;
      if (i == s.length) {
        return true;
      }
    }
  }

  return false;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("123", "ahbgdc"));
console.log(isSubsequence("", "ahbgdc"));
