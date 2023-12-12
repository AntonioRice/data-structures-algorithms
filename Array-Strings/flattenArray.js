Array.prototype.flatten = function () {
  //base case is value array
  let result = [];

  const flatten = (array) => {
    for (const value of array) {
      if (Array.isArray(value)) {
        flatten(value);
      } else {
        result.push(value);
      }
    }
    return result;
  };

  return flatten(this);
};

console.log([5, 6, [8, 9, [9]], 1].flatten());
