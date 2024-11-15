/**
 * LC 125
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise.
 * @param {string} s
 * @return {boolean}
 */

String.prototype.isPalindrome = function () {
  const str = this.toLocaleLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log("racecar".isPalindrome());
console.log("abba".isPalindrome());
console.log("aba".isPalindrome());
console.log("fafsaf".isPalindrome());
console.log("A man, a plan, a canal: Panama".isPalindrome());
console.log("OP".isPalindrome());

// const isPalindrome = (num) => {
//   if (num < 0) return false;

//   num = num.toString();
//   let left = 0;
//   let right = num.length - 1;

//   while (left < right) {
//     if (num[left] !== num[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }

//   return true;
// }; // O(n)

// console.log(isPalindrome(-121));
// console.log(isPalindrome(121));
// console.log(isPalindrome(1221));
// console.log(isPalindrome(1321));
// console.log(isPalindrome(10)); //false
