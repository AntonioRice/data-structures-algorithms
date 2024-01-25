/**
 * @param {string[]} words
 * @return {boolean}
 */

// Time: O(n^m * m), Space: O(m^2)
// m = target.length, n = words.length
// const canConstruct = (words, target) => {
//   if (target === "") return true;

//   for (let word of words) {
//     if (target.indexOf(word) === 0) {
//       const suffix = target.slice(word.length); // * m to time
//       const isPossible = canConstruct(words, suffix);

//       if (isPossible) return true;
//     }
//   }

//   return false;
// };

// console.log(canConstruct(["ab", "abc", "cd", "def"], "abcd"));
// console.log(
//   canConstruct(["e", "ee", "eeee", "eeeee", "eeeeee", "eeeeeeeeeeeeeeeee"], "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef")
// );

//optimized
// Time: O(n*m^2), Space: O(m^2)
const memoCanConstruct = (words, target, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length); // * m to time
      const isPossible = memoCanConstruct(words, suffix, memo);

      if (isPossible == true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

// console.log(memoCanConstruct(["ab", "abc", "cd", "def"], "abcd")); //true
// console.log(
//   memoCanConstruct(
//     ["e", "ee", "eeee", "eeeee", "eeeeee", "eeeeeeeeeeeeeeeee"],
//     "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef"
//   )
// ); //false

/**
 * @param {string[]} words
 * @return {number}
 */
const memoCanConstructCount = (words, target, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;

  let count = 0;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length); // * m to time
      const numOfWays = memoCanConstructCount(words, suffix, memo);
      count += numOfWays;
    }
  }

  memo[target] = count;
  return count;
};

// console.log(memoCanConstructCount(["ab", "abc", "cd", "def"], "abcd")); //1
// console.log(memoCanConstructCount(["purp", "p", "ur", "le", "purpl"], "purple")); //2
// console.log(
//   memoCanConstructCount(
//     ["e", "ee", "eeee", "eeeee", "eeeeee", "eeeeeeeeeeeeeeeee"],
//     "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef"
//   )
// ); //0

// Time: O(n^m), Space: O(m)
//m = target.length, n = words.length
const allCanConstruct = (words, target) => {
  if (target === "") return [[]];

  let allCombinations = [];

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length); // * m to time
      const suffixWays = allCanConstruct(words, suffix);
      const targetWays = suffixWays.map((way) => [word, ...way]);

      allCombinations.push(...targetWays);
    }
  }

  return allCombinations;
};

console.log(allCanConstruct(["ab", "abc", "cd", "def"], "abcd"));
// console.log(
//   allCanConstruct(["e", "ee", "eeee", "eeeee", "eeeeee", "eeeeeeeeeeeeeeeee"], "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef")
// );
