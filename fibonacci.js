function fibs(amount) {
  if (amount <= 0) return 'ERROR';
  else if (amount === 1) return [0];
  else if (amount === 2) return [0, 1];

  const arr = [0, 1];
  for (let i = 3; i <= amount; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  return arr;
}

console.log(fibs(-2));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(3));
console.log(fibs(8));
console.log(fibs(18));

function fibsRec(amount) {
  if (amount <= 0) return 'ERROR';
  else if (amount === 1) return [0];
  else if (amount === 2) return [0, 1];

  const arr = fibsRec(amount - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

  return arr;
}

console.log(fibsRec(-2));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(3));
console.log(fibsRec(8));
console.log(fibsRec(18));
