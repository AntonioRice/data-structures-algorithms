const pyramid = (n) => {
  for (let i = 0; i < n; i++) {
    let start = n - i;
    let str = "";
    for (let j = i; j >= 0; j--) {
      str = str.concat("#");
    }

    console.log(str);
    str = "";
  }
};

console.log(pyramid(8));
