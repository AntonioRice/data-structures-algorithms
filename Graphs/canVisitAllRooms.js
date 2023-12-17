/**
 * There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0.
 * Your goal is to visit all the rooms.
 * However, you cannot enter a locked room without having its key.
 * When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.
 * Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.
 *
 * @param {number[][]} rooms
 * @return {boolean}
 */

//DFS soultion using a set to keep track of unlocked rooms
const canVisitAllRooms = function (rooms) {
  const unlockedRooms = new Set([0]);

  for (const room of unlockedRooms) {
    // for each room, add keys to set
    rooms[room].forEach((key) => unlockedRooms.add(key));
  }

  // if the number rooms we manage to unlock does not equal the number of available rooms, we know that we didn't visit all..
  return unlockedRooms.size === rooms.length;
};

const rooms1 = [[1], [2], [3], []];
console.log(canVisitAllRooms(rooms1)); // true

const rooms2 = [[1, 3], [3, 0, 1], [2], [0]];
console.log(canVisitAllRooms(rooms2)); // false

const rooms3 = [[2], [], [1]];
console.log(canVisitAllRooms(rooms3)); // true
