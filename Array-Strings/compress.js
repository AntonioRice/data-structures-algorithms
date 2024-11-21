/**
 * LC 443
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
  let write = 0; // Pointer to write compressed characters
  let read = 0; // Pointer to read characters

  while (read < chars.length) {
    let char = chars[read];
    let count = 0;

    // Count consecutive characters
    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    // Write the character
    chars[write++] = char;

    // Write the count (only if greater than 1)
    if (count > 1) {
      for (let digit of count.toString()) {
        chars[write++] = digit;
      }
    }
  }

  console.log(chars);
  return write;
};

// Test cases
console.log(compress(["a"])); // Output: 1, modifies chars to ["a"]
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // Output: 6, modifies chars to ["a","2","b","2","c","3"]
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])); // Output: 4, modifies chars to ["a","b","1","2"]
