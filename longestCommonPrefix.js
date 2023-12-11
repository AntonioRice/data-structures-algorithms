var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let longest = "";
  let base = strs[0];

  for (let i = 0; i < base.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (base[i] !== strs[j][i]) {
        return longest;
      }
    }
    longest += base[i];
  }

  return longest;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
