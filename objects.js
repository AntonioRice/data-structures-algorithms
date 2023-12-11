// Objects
// Unordered collection of key-value pairs. Objects are not iterable. Has a prototype with default keys

const obj = {
  name: "Bruce",
  age: 25,
  key_three: true,
  sayMyName: function () {
    console.log(this.name);
  },
};

obj.hobby = "basketball";
delete obj.hobby;

console.log(obj.age);
console.log(obj["age"]);
console.log(obj["key-three"]);
console.log(obj.key_three);
console.log(obj);

obj.sayMyName();
console.log(Object.values(obj));

/*
Time Complexity

Insert, Remove, Access -> O(1)
Search -> O(n)
Object.keys() .values() .entries() -> O(n)
*/
