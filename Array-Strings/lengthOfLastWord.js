/**
 * LS 58
 * Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const strArr = s.split(" ");

  let j = strArr.length - 1;

  while (j >= 0) {
    if (strArr[j].length !== 0) {
      return strArr[j].length;
    }
    j--;
  }
};

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));
