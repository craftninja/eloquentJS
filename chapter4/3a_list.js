var arrayToList = function (arr) {
  var list = null
  for (var i = arr.length - 1; i >=0; i -= 1) {
    list = prepend(arr[i], list)
  };
  return list;
}

var listToArray = function (list) {
  var array = [];
  while (list.rest != null) {
    array.push(list.value);
    list = list.rest
  };
  array.push(list.value);
  return array;
}

var prepend = function (element, list) {
  return list = {value: element, rest: list};
}

var nth = function (list, index) {
  var element;
  for (i = 0; i <= index; i ++) {
    element = list.value;
    list = list.rest;
  }
  return element;
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

actual = prepend(1, { value: 2, rest: { value: 3, rest: null } })
expected = "{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }"
console.log('actual:')
console.log(actual)
console.log('expected:')
console.log(expected)

actual = nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 2)
expected = 3
console.log('actual:')
console.log(actual)
console.log('expected:')
console.log(expected)
