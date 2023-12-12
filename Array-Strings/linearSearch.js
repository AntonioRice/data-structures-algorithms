// Linear Search
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }

  return -1;
};

// O(n)

console.log(linearSearch([8, 3, 6, 1, -2], 10)); //-1
console.log(linearSearch([6, 8, 12, 10, 34], 34)); //4
console.log(linearSearch([6, 8, 12, 10, 34], 8)); //1
