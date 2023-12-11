var isValid = function (str) {
  if (!str.length || str.length % 2 !== 0) return false;

  const charMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (charMap[str[i]]) {
      stack.push(charMap[str[i]]);
    } else if (str[i] == stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("{[]}"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("((()))"));
console.log(isValid("}}"));
