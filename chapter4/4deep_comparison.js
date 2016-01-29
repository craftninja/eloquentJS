/*
function deepEquals(valueA, valueB) {
  if (typeof(valueA) === 'object' && valueA !== null) {
    for (property in valueA) {
      return deepEquals(valueA[property], valueB[property])
    };
  } else {
    return valueA === valueB;
  };
}
*/
console.log('numbers:')
var actual = deepEquals(1, 1);
var expected = true
console.log('actual:  ', actual);
console.log('expected:', expected);

actual = deepEquals(1, 2);
expected = false
console.log('actual:  ', actual);
console.log('expected:', expected);

console.log('null:')
actual = deepEquals(null, null);
expected = true
console.log('actual:  ', actual);
console.log('expected:', expected);

actual = deepEquals(null, {'key': 'value'});
expected = false
console.log('actual:  ', actual);
console.log('expected:', expected);

console.log('objects:')
actual = deepEquals({'key': 'value', 'key2': 'value2'}, {'key': 'value', 'key2': 'value2'});
expected = true
console.log('actual:  ', actual);
console.log('expected:', expected);

actual = deepEquals([1,2,3], [2,3,4]);
expected = false
console.log('actual:  ', actual);
console.log('expected:', expected);

actual = deepEquals([1,2,3], [1,2,3]);
expected = true
console.log('actual:  ', actual);
console.log('expected:', expected);

// +==================================

function deepEquals(valA, valB) {
  if (typeof valA === 'object' && valA !== null) {
    for (var property in valA) {
      return deepEquals(valA[property], valB[property]);
    };
  } else {
    return valA === valB;
  };
};
