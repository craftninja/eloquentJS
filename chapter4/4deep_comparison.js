function deepEquals(valueA, valueB) {
  if (typeof(valueA) === 'object' && valueA !== null) {
    var result = true
    for (property in valueA) {
      if (valueA[property] !== valueB[property]) {
        return result = false;
      };
    };
    return result;
  } else {
    return valueA === valueB;
  };
}

console.log('numbers:')
var actual = deepEquals(1, 1);
var expected = true
console.log('actual:  ', actual);
console.log('expected:', expected);

var actual = deepEquals(1, 2);
var expected = false
console.log('actual:  ', actual);
console.log('expected:', expected);

console.log('null:')
var actual = deepEquals(null, null);
var expected = true
console.log('actual:  ', actual);
console.log('expected:', expected);

var actual = deepEquals(null, {'key': 'value'});
var expected = false
console.log('actual:  ', actual);
console.log('expected:', expected);

console.log('objects:')
var actual = deepEquals({'key': 'value', 'key2': 'value2'}, {'key': 'value', 'key2': 'value2'});
var expected = true
console.log('actual:  ', actual);
console.log('expected:', expected);

var actual = deepEquals([1,2,3], [2,3,4]);
var expected = false
console.log('actual:  ', actual);
console.log('expected:', expected);

var actual = deepEquals([1,2,3], [1,2,3]);
var expected = true
console.log('actual:  ', actual);
console.log('expected:', expected);
