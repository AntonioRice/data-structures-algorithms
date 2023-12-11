/**
 * For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
 * Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function (str1, str2) {
  const minLen = Math.min(str1.length, str2.length);

  for (l = minLen; l > 0; l--) {
    if (str1.length % l < 0 || str2.length % l < 0) {
      return "";
    }

    const factor1 = str1.length / l;
    const factor2 = str2.length / l;

    if (
      str1.slice(0, l).repeat(factor1) === str1 &&
      str1.slice(0, l).repeat(factor2) === str2
    ) {
      return str1.slice(0, l);
    }
  }

  return "";
};

console.log(gcdOfStrings("ababab", "abab"));
console.log(gcdOfStrings("abababc", "abab"));
