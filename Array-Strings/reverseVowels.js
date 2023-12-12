/**
 * Given a string s, reverse only all the vowels in the string and return it.
 * The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const result = [...s];
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (vowels.has(s[left]) && vowels.has(s[right])) {
      result[left] = s[right];
      result[right] = s[left];
      left++;
      right--;
    } else if (!vowels.has(s[left])) {
      left++;
    } else if (!vowels.has(s[right])) {
      right--;
    }
  }

  return result.join("");
};

console.log(reverseVowels("hello")); //holle
console.log(reverseVowels("leetcode")); //leotcede
console.log(reverseVowels(" ")); //leotcede
console.log(reverseVowels("a.")); //leotcede
