/**
 * LC 875
 * Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
 * Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
 * Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
 * Return the minimum integer k such that she can eat all the bananas within h hours.
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  const sortedPiles = piles.sort((a, b) => a - b);
  let left = 0;
  let right = sortedPiles[sortedPiles.length - 1];
  let result = right;

  while (left <= right) {
    hours = 0;
    let k = Math.floor((left + right) / 2);

    for (let i = 0; i < sortedPiles.length; i++) {
      hours += Math.ceil(sortedPiles[i] / k);
    }

    if (hours <= h) {
      result = Math.min(result, k);
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return result;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23
