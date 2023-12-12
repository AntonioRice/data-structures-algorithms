/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let distance = right - left;
    let maxHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, distance * maxHeight);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected = 49;

console.log(maxArea(height));
