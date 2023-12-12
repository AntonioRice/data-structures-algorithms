/**
 * Given an encoded string, return its decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
 * Note that k is guaranteed to be a positive integer.
 * You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.
 * Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.
 * For example, there will not be input like 3a or 2[4].
 * The test cases are generated so that the length of the output will never exceed 105.
 * @param {string} s
 * @return {string}
 */
var decodeString = function (str) {
  const stack = [];

  for (const s of str) {
    if (s != "]") {
      stack.push(s);
    } else {
      let tempStr = "";
      while (stack[stack.length - 1] != "[") {
        tempStr = stack.pop() + tempStr;
      }
      stack.pop();
      let multiplier = "";
      while (stack.length && !isNaN(parseInt(stack[stack.length - 1]))) {
        multiplier = stack.pop() + multiplier;
      }
      stack.push(tempStr.repeat(multiplier));
    }
  }

  return stack.join("");
};

console.log(decodeString("3[a2[c]]")); //accaccacc
console.log(decodeString("3[a]2[bc]")); //aaabcbc
console.log(decodeString("2[abc]3[cd]ef")); // abcabccdcdcdef
console.log(decodeString("100[leetcode]")); // abcabccdcdcdef
