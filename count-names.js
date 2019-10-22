function countNames(array) {
  let names = {};

  array.forEach(item => {
    names[item] = (names[item] || 0) + 1;
  });
  return names;
}

console.log(countNames(['james', 'james', 'john']));
