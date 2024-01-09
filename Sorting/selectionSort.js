// Selection Sort -> O(n^2) due to nested loops
const selectionSort = () => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }

  return arr;
};

const arr = [0, 8, 51, 28, 3, 4, 99, 100];
console.log(selectionSort(arr));
