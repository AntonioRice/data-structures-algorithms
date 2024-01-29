/**
 * LS 58
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * @param {string} s
 * @return {number}
 */
// Time: O(n), Space: O(n)
var lengthOfLastWord = function (s) {
  const strArr = s.split(" "); // O(n) time , O(n) space

  let j = strArr.length - 1;

  // O(n) time
  while (j >= 0) {
    if (strArr[j].length !== 0) {
      return strArr[j].length;
    }
    j--;
  }
};

// console.log(lengthOfLastWord("Hello World"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));
// console.log(lengthOfLastWord("luffy is still joyboy"));

// Time: O(n), Space: O(1)
const lengthOfLastWordII = (s) => {
  let count = 0;
  counting = false;

  for (let i = s.length - 1; i >= 0; i--) {
    while (s[i] !== " " && i >= 0) {
      counting = true;
      count++;
      i--;
    }

    if (counting) return count;
  }
};

console.log(lengthOfLastWordII("Hello World"));
console.log(lengthOfLastWordII("   fly me   to   the moon  "));
console.log(lengthOfLastWordII("luffy is still joyboy"));
console.log(lengthOfLastWordII("a"));
