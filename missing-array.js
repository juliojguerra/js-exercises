function missingArray(arr) {
  let newArr = [];
  let result = 1;
  let partialResult = 0;

  if (arr != null) {
    arr.forEach(element => {
      if (element != null || element == '') {
        newArr.push(element.length);
      } else {
        result = 0;
      }
    });
  }

  newArr = newArr.sort((a, b) => a - b);

  partialResult = newArr.filter((element, index) => {
    if (newArr[index] - newArr[index - 1] == 2) {
      return element;
    }
  });

  if (result != 0 && partialResult != 0) {
    return partialResult - 1;
  } else {
    return 0;
  }
}

let twoDimArray = [
  [2, 4, 4, 1],
  [2, 1, 1, 3, 1],
  [3, 4, 1, 4, 1, 3],
  [1, 0, 2, 2, 2, 3, 1],
  [4, 2, 3, 2, 4, 0, 1, 0, 1],
  [2, 1, 3, 1, 4, 3, 2, 1],
  [3, 3, 2, 4, 2, 4, 4, 4, 0, 3, 4],
  [3, 0, 3, 0, 0, 4, 0, 3, 2, 2, 4, 0],
];

console.log(missingArray(twoDimArray));
