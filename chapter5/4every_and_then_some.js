function every(list, matcher) {
  var matchy = true;
  list.forEach(function(element){
    if (!matcher(element)) {
      return matchy = false;
    };
  });
  return matchy;
};

function some(list, matcher) {
  var match = false
  list.forEach(function(element) {
    if (matcher(element)) {
      return match = true;
    }
  });
  return match;
};

console.log("actual:   ", every([NaN, NaN, NaN], isNaN));
console.log("expected: ", true);
console.log('actual:   ', every([NaN, NaN, 4], isNaN));
console.log('expected: ', false);
console.log('actual:   ', some([NaN, 3, 4], isNaN));
console.log('expected: ', true);
console.log('actual:   ', some([2, 3, 4], isNaN));
console.log('expected: ', false);
