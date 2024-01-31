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

function binaryToDecimal(binary) {
  let decimal = 0;
  let power = 0;

  // Start from the rightmost digit
  for (let i = binary.length - 1; i >= 0; i--) {
    // Convert character to integer
    let digit = parseInt(binary[i]);

    // Multiply digit by 2 raised to the power of its position
    decimal += digit * Math.pow(2, power);

    // Increment power for next position
    power++;
  }

  return decimal;
}

// Example usage:
console.log(binaryToDecimal("101101")); // Output: 45
console.log(binaryToDecimal("101")); // Output: 5
