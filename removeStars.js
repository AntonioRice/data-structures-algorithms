/**
 * You are given a string s, which contains stars *.
 * In one operation, you can:
 * Choose a star in s.
 * Remove the closest non-star character to its left, as well as remove the star itself.
 * Return the string after all stars have been removed.
 * Note:
 * The input will be generated such that the operation is always possible.
 * It can be shown that the resulting string will always be unique.
 *
 * @param {string} s
 * @return {string}
 */
var removeStars = function (str) {
  let strStack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "*") {
      strStack.pop();
    } else {
      strStack.push(str[i]);
    }
  }

  return strStack.join("");
};
console.log(removeStars("leet**cod*e")); //lecoe
console.log(removeStars("erase*****")); //
