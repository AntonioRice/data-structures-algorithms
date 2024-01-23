/**
 * LC 2300
 * You are given two positive integer arrays spells and potions, of length n and m respectively,
 * where spells[i] represents the strength of the ith spell and potions[j] represents the strength of the jth potion.
 * You are also given an integer success. A spell and potion pair is considered successful if the product of their strengths is at least success.
 * Return an integer array pairs of length n where pairs[i] is the number of potions that will form a successful pair with the ith spell.
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

// Brute Force
// Time: O(n * n) ,Space: O(n)
// var successfulPairs = function (spells, potions, success) {
//   const results = [];

//   for (let s = 0; s < spells.length; s++) {
//     let count = 0;
//     for (let p = 0; p < potions.length; p++) {
//       if (spells[s] * potions[p] >= success) {
//         count++;
//       }
//     }
//     results.push(count);
//   }

//   return results;
// };

// Binary Search
var successfulPairs = function (spells, potions, success) {
  const results = [];
  const sortedPotions = potions.sort((a, b) => a - b); // O(n log n)

  for (let i = 0; i < spells.length; i++) {
    let count = 0;
    let left = 0;
    let right = sortedPotions.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      let guess = spells[i] * sortedPotions[mid];

      if (guess >= success) {
        right = mid - 1;
      } else {
        count++;
        left = mid + 1;
      }
    }

    results[i] = sortedPotions.length - right - 1;
  }

  return results;
};

const spells = [5, 1, 3];
const potions = [1, 2, 3, 5, 4];
const success = 7;
console.log(successfulPairs(spells, potions, success)); //[4,0,3]
