function uniqueNumbers(numbersArray) {
  let arr = numbersArray.filter((item, index) => {
    return numbersArray.indexOf(item) === index;
  });

  return arr;
}

console.log(uniqueNumbers([5, 5, 5, 3]));
