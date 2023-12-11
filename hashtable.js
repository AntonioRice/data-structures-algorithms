//HASHTABLE

class HashTable {
  // Average for HashTables is //O(1)
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    //bug that has collisions
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size; //make sure index is in bounds of array
  }
  set(key, value) {
    const index = this.hash(key);
    // this.table[index] = value;
    const bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key); //O(n)
      if (sameKeyItem) {
        sameKeyItem[1] = value; //weird
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    // return this.table[index];
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key); //O(n)
      if (sameKeyItem) {
        return sameKeyItem[1];
      } else {
        return undefined;
      }
    }
  }
  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key); //O(n)
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem, 1));
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("name", "buck");
table.set("mane", "chuck");
table.set("age", 23);
// table.display();
console.log(table.get("age"));
console.log(table.set("NM", "test"));
table.remove("age");
table.set("name", "fdsgdg");
table.set("mane", "ijoi");
table.display();
