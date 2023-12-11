/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;

  let pointer = 0;
  let str = "";

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[pointer]) {
      //   console.log("FIRST INDEX: ", i);
      while (haystack[i] == needle[pointer]) {
        str = str.concat(needle[pointer]);
        pointer++;
      }
      console.log("POINTER: ", pointer);
      console.log("NEEDLE: ", needle.length);
      console.log("I : ", needle.length);
    } else {
      pointer = 0;
    }
  }

  console.log(str);
  return str;
};

const haystack = "leetcode";
const needle = "leet";
console.log(strStr(haystack, needle));
