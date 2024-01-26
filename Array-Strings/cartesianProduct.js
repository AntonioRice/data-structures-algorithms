/**
 * Cartesian Product of 2 Sets. (Set Theory)
 * The CP of 2 sets (A x B) is the set of all ordered pairs in where a is in A and b is in B .
 * Ex:
 * A = [1, 2]
 * B = [3, 4]
 * AxB = [1,3],[1,4],[2,3],[2,4]
 * Big O: Normally with nested forloops of equal length arrays, O(n^2). But since the 2 arrays are different length (or can be), time completxity is O(nm).
 * Depends on the length of the input arrays.
 */

// Think of the catesian product line an old-school cross multiplication of 2 double diget numbers problem, arrs in this case.
// Instead of return the product, we're just returning the work

const cartesianProduct = (arr1, arr2) => {
  // 1) set a helper arr in which we'll return the 'work'
  const cp = [];

  // 2) Since we need to 'cross-multiply', we need nested for loops
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // 3) push an arr of each 'work' into the helper arr, [arr1[i] and arr[j]]
      cp.push([arr1[i], arr2[j]]);
    }
  }

  // 4) return the work
  return cp;
};

const A = [1, 2];
const B = [3, 4, 5];

console.log(cartesianProduct(A, B));
