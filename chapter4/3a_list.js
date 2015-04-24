var arrayToList = function (arr) {
  var node = null
  for (var i = arr.length - 1; i >=0; i -= 1) {
    node = {
      value: arr[i],
      rest: node
    };
  };
  return node;
}

var listToArray = function (list) {
  var array = [];
  while (list.rest != null) {
    array.push(list.value);
    list = list.rest
  };
  array.push(list.value)
  return array
}

var actual = arrayToList([1,2,3])
var expected = "{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }"
console.log('actual:')
console.log(actual)
console.log('expected:')
console.log(expected)

actual = listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })
expected = [1,2,3]
console.log('actual:')
console.log(actual)
console.log('expected:')
console.log(expected)
