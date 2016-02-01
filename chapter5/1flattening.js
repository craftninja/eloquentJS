var arrays = [[1, 2, 3], [4, 5], [6]];
var flat = arrays.reduce(function(prevArray, currArray) {
  return prevArray.concat(currArray);
});
console.log("actual:   ", flat);
console.log("expected: ", [1, 2, 3, 4, 5, 6]);
