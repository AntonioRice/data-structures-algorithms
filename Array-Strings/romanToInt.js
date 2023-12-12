var romanToInt = function (s) {
  const mapping = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let curr = mapping[s[i]];
    let next = mapping[s[i + 1]];

    if (curr < next) {
      count -= curr;
    } else {
      count += curr;
    }
  }

  return count;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("V"));
console.log(romanToInt("XX"));
console.log(romanToInt("XXVII"));
