//Binary Search - iterative (Sorted Array)

// const binarySearch = (arr, target) => {
//     // 2 pointers method

//     // 1) Divide the arr in half. Identify the firt and last element.
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     // 2) If the first and the last element is at the same index, then we're done.
//     //    So we need to perform search while those aren't either the same, or croseed paths
//     while (leftIndex <= rightIndex) {
//       // 3) Find the middle index by adding dividing the sum of the left and right index by 2. Being sure to round down.
//       let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//       // 4) First check if we got lucky and the calculated middle index of the arr, contains the Target val, return if true.
//       if (target === arr[middleIndex]) {
//         console.log("FOUND INDEX: " + middleIndex);
//         return middleIndex;
//       }

//       // 5) If we didnt find the target, we check if the target value is greater than the val in the middle of the arr, or less than the val
//       //    If the target is larger then the mid val, increment the left pointer by one
//       if (target > arr[middleIndex]) {
//         leftIndex = middleIndex + 1;
//       } else { // If the target is less than the mid val, decrement the middle index by 1
//         rightIndex = middleIndex - 1;
//       }
//     }

//     // return -1 if the target is not found
//     return -1;
//   };

// Binary Search - recursive (Sorted Array)

const binarySearch = (arr, target) => {
  // 2 pointers method
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      console.log("FOUND INDEX: " + middleIndex);
      return middleIndex;
    }

    if (target > arr[middleIndex]) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
};

// O(logn) reducing input size by half each iteration

console.log(binarySearch([-9, 0, 2, 6, 8, 14, 16], 14));
console.log(binarySearch([4, 5, 9, 10, 15], 4));
console.log(binarySearch([6, 8, 10, 12, 34], 10));
console.log(binarySearch([6, 8, 10, 12, 34], 1));
