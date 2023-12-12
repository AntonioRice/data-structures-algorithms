/**
 * Given an array of characters chars, compress it using the following algorithm:
 * Begin with an empty string s. For each group of consecutive repeating characters in chars:
 * If the group's length is 1, append the character to s.
 * Otherwise, append the character followed by the group's length.
 * The compressed string s should not be returned separately, but instead, be stored in the input character array chars.
 * Note that group lengths that are 10 or longer will be split into multiple characters in chars.
 * After you are done modifying the input array, return the new length of the array.
 * You must write an algorithm that uses only constant extra space.
 *
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let index = 0;
  let currLetter = 0;

  while (currLetter < chars.length) {
    let j = currLetter;
    let count = 0;
    while (j < chars.length && chars[currLetter] == chars[j]) {
      j++;
      count++;
    }

    chars[index++] = chars[currLetter];

    if (count > 1) {
      let charArray = count.toString().split("");
      for (let num of charArray) {
        chars[index++] = num;
      }
    }

    currLetter = j;
  }

  return index;
};

console.log(compress(["a"])); //["a"]
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); //["a","2","b","2","c","3"]
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])
); //[a, b, 1, 2]
