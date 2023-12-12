const twoSum = (arr, target) => {
  const hashMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (hashMap[target - arr[i]] !== undefined) {
      return [hashMap[target - arr[i]], i];
    } else {
      hashMap[arr[i]] = i;
    }
  }

  return [];
};

console.log(twoSum([2, 3, 4, 7, 19], 10));

// {2: 0, 3: 1, 4: 2, 7: 3, 19: 4}
// 10 - 2 = 8
// 10 - 3 = 7
