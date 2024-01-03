//Reverse a string
const reserveStr = (str) => {
  if (!str || str.length < 2 || typeof str !== "string") return;
  let backwards = [];
  for (let i = str.length; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
};
console.log(reserveStr("hello"));

const reserveStr2 = (str) => {
  return str.split("").reverse().join("");
};
console.log(reserveStr2("hello"));

const reserveStr3 = (str) => [...str].reverse().join("");

console.log(reserveStr2("hello"));
