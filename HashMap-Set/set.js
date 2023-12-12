// SET
// Unique values, no insertion order, iterable (for of loop), searching/deleting is faster than Arrays

const set = new Set([1, 2, 3, 4, 5]);
set.add(4);
//console.log(set.has(4));
set.delete(3);
console.log(set.size);
set.clear();
console.log(set);

//for (let item of set) {
//console.log(item);
//}

// MAP
// Ordered collection of key-value pairs, both can be of any data type, iterable, no default keys

const map = new Map([
  ["a", 1],
  ["b", 2],
]);

map.set("c", 3);

console.log(map.has("a"));
map.delete("c");
console.log(map.size);
map.clear();

for (const [key, value] of map) {
  console.log(key, value);
}
