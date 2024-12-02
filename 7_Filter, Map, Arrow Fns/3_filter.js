//Display even value from given arr
const arr = [1, 2, 3, 4];

const ans = arr.filter((n) => {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log(ans);
