// First recuring char

const firstRecurringChar = (arr) => {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = true;
    }
  }

  return undefined;
};

console.log(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4])); //2
console.log(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4])); //1
console.log(firstRecurringChar([2, 3, 4, 5])); //undefinded
