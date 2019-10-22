var isSquare = arr => {
  for (var i = 0; i < arr.length; i++) {
    if (!Number.isInteger(Math.sqrt(arr[i]))) {
      return false;
    }
  }

  return arr.length ? true : undefined;
};

console.log(isSquare([9, 4, 4]));
console.log(isSquare([9, 4, 3]));
