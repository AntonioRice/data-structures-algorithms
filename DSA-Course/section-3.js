/**
 * Big O rules:
 * 1) Focus worst case
 * 2) Remove constants
 * 3) Different terms for inputs -> n, k
 * 4) Drop non dominants/terms
 */
const nemo = ["nemo"];

const large = new Array(10).fill("nemo");

const findNemo = (arr) => {
  //   let t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if ("nemo" === "nemo") {
      console.log("Found Nemo");
      break;
    }
  }

  //   let t1 = performance.now();
  //   console.log("Took: ", t1 - t0, " milliseconds");
};
// TC: O(n) --> Linear Time
// findNemo(large);

const boxes = [1, 2, 3, 4, 5];
const compressFirstBox = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

// compressFirstBox(boxes); // O(1)--> Constant Time

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) {
    // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

// TC --> O(3 + 4n) --> O(n)

function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input; j++) {
    // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// TC --> O(4 + 7n) --> O(n)

// Rule 3 - Different terms for inputs
const compressBoxes = (boxes1, boxes2) => {
  // O(n)
  boxes1.forEach((box) => {
    console.log(box);
  });

  // O(k)
  boxes2.forEach((box) => {
    console.log(box);
  });
};
// TC --> O(n + k)

// Log all pairs of array

const arr = [1, 2, 3, 4, 5];
// Nest loops, need to multiply
const logAllPairs = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
    }
  }
};
// TC: O(n * n) ==> O(n^2) --> Quadratic
// logAllPairs(arr);

//Rule 4: Drop non dominants
const printAndAdd = (nums) => {
  console.log("print nums");
  nums.forEach((num) => console.log(num)); //O(n)

  console.log("print sum");
  //O(n * n) --> O(n^2)
  nums.forEach((num1) => {
    nums.forEach((num2) => {
      console.log(num1 + num2);
    });
  });
};
// TC: O(n + (n*n)) ==> O(n + n^2) ==> O(n^2) (drop n since its non dominant)
// printAndAdd(arr);

//O(n!) Factorial: very expensive since you're adding a loop for every unput

/**
 * Space Complexity (Additional used?)
 * What cause space complexity (what takes up space)
 * 1) variables
 * 2) data structures
 * 3) function calls
 * 4) allocations
 */

const boo = (n) => {
  // only thing we're adding is let i = 0
  for (let i = 0; i < n.length; i++) {
    console.log("boo!");
  }
};

// boo([1, 2, 3, 4, 5]); // O(1)

const book = (n) => {
  let books = [];
  for (let i = 0; i < n; i++) {
    books[i] = "read";
  }

  return books;
};

//console.log(book(5)); // Space Complexity: We've added a variable i and using a data structure -> O(1 + n) ==> O(n)
// console.log("hello".length); // TC depends on coding language. JS has a property of length so it s O(1). Doens't have to loop through and count one by one
