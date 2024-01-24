/**
 * @param {number} decimalNumber
 * @return {string}
 */

const decimalToBinary = (decimalNumber) => {
  if (decimalNumber === 0) return "0";

  let binaryResult = "";

  while (decimalNumber > 0) {
    binaryResult = (decimalNumber % 2) + binaryResult;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binaryResult;
};

console.log(decimalToBinary(2));
