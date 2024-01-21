// // Time: O(d), push O(1) and shift O(n). Space: O(n) because of the return
// const rotateLeft = (arr, d) => {
//   while (d > 0) {
//     arr.push(arr.shift());
//     d--;
//   }

//   return arr.toString().split(",").join(" ");
//   //   return arr;
// };

// console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7], 10)); // 4 5 6 7 1 2 3
// console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7], 2)); // 3 4 5 6 7 1 2

// const rotateLeft2 = (arr, d) => {
//   //if d is larger than arr.length
//   d = d % arr.length;

//   return [...arr.slice(d, arr.length), ...arr.slice(0, d)];
// };

// console.log(rotateLeft2([1, 2, 3, 4, 5, 6, 7], 10)); // 4 5 6 7 1 2 3
// console.log(rotateLeft2([1, 2, 3, 4, 5, 6, 7], 2)); // 3 4 5 6 7 1 2

// // Time: O(n), Space: O(n)
// const rotateLeft3 = (arr, d) => {
//   d = d % arr.length;

//   function reverse(arr) {
//     let i = 0;
//     let k = arr.length - 1;
//     while (i < k) {
//       [arr[i], arr[k]] = [arr[k], arr[i]];
//       i++;
//       k--;
//     }
//     return arr;
//   }

//   //reverse main arr
//   let reveredMainArr = reverse(arr);

//   // split reveresed arr from start to d
//   let splitArr1 = reveredMainArr.slice(0, arr.length - d);

//   // split reversed arr from d to end
//   let splitArr2 = reveredMainArr.slice(arr.length - d, arr.length);

//   // merge the reverest of the split arrays
//   return [...reverse(splitArr1), ...reverse(splitArr2)];
// };

// console.log(rotateLeft3([1, 2, 3, 4, 5, 6, 7], 2)); // 3 4 5 6 7 1 2
// console.log(rotateLeft3([1, 2, 3, 4, 5, 6, 7], 10)); // 4 5 6 7 1 2 3

// Time: O(n), Space: O(1)
const rotateLeft4 = (arr, d) => {
  const n = arr.length;
  d = d % n;

  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }

    return arr;
  }

  reverse(0, n - 1);
  reverse(0, n - 1 - d);
  reverse(n - d, n - 1);

  /**
    chatgpt simplified:
    reverse(0, d - 1);
    reverse(d, n - 1);
    reverse(0, n - 1);
   **/

  return arr;
};

console.log(rotateLeft4([1, 2, 3, 4, 5, 6, 7], 2)); // 3 4 5 6 7 1 2
console.log(rotateLeft4([1, 2, 3, 4, 5, 6, 7], 3)); // 4 5 6 7 1 2 3
console.log(rotateLeft4([1, 2, 3, 4, 5, 6, 7], 10)); // 4 5 6 7 1 2 3
