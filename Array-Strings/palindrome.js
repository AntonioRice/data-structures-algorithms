String.prototype.isPalindrome = function () {
  const str = this.toLocaleLowerCase;
  let val2 = this.replace(/\W/g, "");
  let right = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[right]) {
      right--;
    } else {
      return false;
    }
  }

  return true;
};

// console.log("racecar".isPalindrome());
// console.log("abba".isPalindrome());
// console.log("aba".isPalindrome());
// console.log("fafsaf".isPalindrome());
// console.log("A man, a plan, a canal: Panama".isPalindrome());
// console.log("OP".isPalindrome());

const isPalindrome = (num) => {
  if (num < 0) return false;

  num = num.toString();
  let left = 0;
  let right = num.length - 1;

  while (left < right) {
    if (num[left] !== num[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}; // O(n)

console.log(isPalindrome(-121));
console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(1321));
console.log(isPalindrome(10)); //false
