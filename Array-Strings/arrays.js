/* 
Time Complexity
Inserting or removing from END - O(1)
Inserting or removing from BEGINNINNG - O(n) -> because the index has to be reset for all elements.
Accessing - O(1)
Search - O(n)
 */
// Arrays
const arr = [1, 2, 3, 4, "test"];
arr.push(5); //O(1)
arr.pop(); // O(1)
arr.unshift(0); // O(n)
arr.shift(); // O(n)

// shift - unshift - concat - slice - splice -> O(n)
// forEach - map - filter - reduce -> O(n)

console.log(arr);

for (const item of arr) {
  console.log(item);
}
