/**
 * Sliding window (two pointers) technique which uses a while loop
 * O(n) time and space
 */

// var longestUniqueSubStr = (str) => {
//   const set = new Set();
//   let left = 0;
//   let right = 0;
//   let max = 0;

//   while (right < str.length) {
//     if (!set.has(str[right])) {
//       set.add(str[right]);
//       right++;
//       max += 1;
//     } else {
//       set.delete(str[left]);
//       left++;
//       max -= 1;
//     }
//   }

//   console.log(set);
//   console.log(max);
// };

// longestUniqueSubStr("kdabwkrwcx"); // krwcx

/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  const set = new Set();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < str.length) {
    if (!set.has(str[right])) {
      set.add(str[right]);
      right++;
      max = Math.max(max, set.size);
    } else {
      set.delete(str[left]);
      left++;
    }
  }

  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
