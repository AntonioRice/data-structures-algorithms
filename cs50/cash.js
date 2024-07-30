const change = (n) => {
  const coins = [25, 10, 5, 1];
  let remainder = n;
  let count = 0;

  for (let i = 0; i < coins.length; i++) {
    if (remainder > 0) {
      do {
        remainder = remainder - coins[i];
        count += 1;
      } while (remainder > 0);
    } else {
      remainder = Math.abs(remainder);
    }
  }

  console.log(count);
};

return change(70);
