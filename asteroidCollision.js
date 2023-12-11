/**
 * We are given an array asteroids of integers representing asteroids in a row.
 * For each asteroid, the absolute value represents its size, and the sign represents its direction
 * (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
 * Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode.
 * If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  let currAsteroid;
  let prevAsteroid;

  for (let i = 0; i < asteroids.length; i++) {
    currAsteroid = asteroids[i];
    prevAsteroid = stack[stack.length - 1];
    if (
      ((stack.length === 0 || prevAsteroid < 0) && currAsteroid < 0) ||
      currAsteroid > 0
    ) {
      stack.push(currAsteroid);
    } else {
      prevAsteroid = stack.pop();
      if (Math.abs(prevAsteroid) > Math.abs(currAsteroid)) {
        stack.push(prevAsteroid);
      } else if (Math.abs(prevAsteroid) < Math.abs(currAsteroid)) {
        i--;
      } else {
        continue;
      }
    }
  }

  return stack;
};

console.log(asteroidCollision([-1, 20, 5, 10, -5, -5, 6])); //[-1,20,5,10,6]
console.log(asteroidCollision([5, 10, -5])); //[5,10]
console.log(asteroidCollision([10, 2, -5])); //[10]
console.log(asteroidCollision([1, 4, -5])); //[-5]
console.log(asteroidCollision([-3])); //[-3]
console.log(asteroidCollision([8, -8])); //[]
