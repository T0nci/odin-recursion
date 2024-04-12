function mergeSort(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 'ERROR';
  }

  if (arr.length === 1) {
    return arr;
  }

  const left = mergeSort(arr.slice(0, Math.ceil(arr.length / 2)));
  const right = mergeSort(arr.slice(Math.ceil(arr.length / 2), ));

  const mergedSortedArray = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedSortedArray.push(left.shift());
    } else {
      mergedSortedArray.push(right.shift());
    }
  }

  if (!left.length) {
    return mergedSortedArray.concat(right);
  } else if (!right.length) {
    return mergedSortedArray.concat(left);
  }
}

console.log(mergeSort(1));
console.log(mergeSort([]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([3, 2, 1]));
