function every(list, matcher) {
  var matchy = true;
  list.forEach(function(element){
    if (!matcher(element)) matchy = false;
  });
  return matchy;
};

console.log("actual:   ", every([NaN, NaN, NaN], isNaN));
console.log("expected: ", true);
console.log('actual:   ', every([NaN, NaN, 4], isNaN));
console.log('expected: ', false);
// console.log(some([NaN, 3, 4], isNaN));
// → true
// console.log(some([2, 3, 4], isNaN));
// → false
