function range(lowerLimit, upperLimit) {
  var array = [];
  for (i = lowerLimit; i <= upperLimit; i ++ ) {
    array.push(i);
  };
  return array;
};

function sum(operands) {
  return operands.reduce(function(a, b) { return a + b; } );
}


actual = sum(range(1,10))
console.log('actual:')
console.log(actual)
expected = 1+2+3+4+5+6+7+8+9+10
console.log('expected:')
console.log(expected)
