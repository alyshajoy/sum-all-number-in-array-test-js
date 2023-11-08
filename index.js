function sumItems(array) {

  let sum = 0;

  for (let item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  }

  return sum;
};

console.log(sumItems([[1, 2, [[3], 4]], 5, []]));
console.log(sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]));

module.exports = sumItems;


// [1, 2, 3, 4, 5] ->	15
// [[1, 2, [[3], 4]], 5, []] ->	15
// [[[[[[[[[[[[[1]]]]]]]]]]]]]	-> 1

// base case: 