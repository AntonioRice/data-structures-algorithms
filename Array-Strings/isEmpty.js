/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (const i in obj) return false;

  return true;
};

console.log(isEmpty({ x: 5, y: 42 })); //false
console.log(isEmpty({})); // true
console.log(isEmpty([])); // true
console.log(isEmpty([null, false, 0])); // false
console.log(isEmpty([undefined, false, 0])); //false
