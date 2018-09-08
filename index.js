const array = [null, "Chidori", 0, "Rasengan", 1, 2908];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
