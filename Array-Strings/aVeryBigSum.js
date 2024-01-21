const aVeryBigSum = (arr) => {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
};

const aVeryBigSum2 = (arr) => {
  return arr.reduce((a, b) => a + b);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(aVeryBigSum(arr));
console.log(aVeryBigSum2(arr));
