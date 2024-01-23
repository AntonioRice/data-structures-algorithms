/**
 * LC 17
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 * https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png
 * @param {string} digits
 * @return {string[]}
 */
// var letterCombinations = function (digits) {
//   const results = [];

//   if (digits.length == 0) return results;

//   backtrack(0, "");

//   return results;

//   function backtrack(start, str) {
//     if (str.length == digits.length) {
//       results.push(str);
//       return;
//     }

//     for (const letter of keypad(digits[start])) {
//       backtrack(start + 1, str.concat(letter));
//     }
//   }
// };

var letterCombinations = function (digits) {
  const results = [];

  if (digits.length == 0) return results;

  dfs(0, digits, []);

  return results;

  function dfs(i, digits, path) {
    if (i === digits.length) {
      results.push(path.join(""));
      return;
    }

    let chars = keypad(digits[i]);

    for (const char of chars) {
      // include in path
      path.push(char);
      //dfs incremented
      dfs(i + 1, digits, path);
      // remove from path
      path.pop();
    }
  }
};

const keypad = (key) => {
  const keypadMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  return keypadMap[key];
};

const digits = "23";
console.log(letterCombinations(digits)); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
const digits2 = "";
console.log(letterCombinations(digits2)); // []
const digits3 = "2";
console.log(letterCombinations(digits3)); // ["a","b","c"]
