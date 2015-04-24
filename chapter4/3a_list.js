var arrayToList = function (arr) {
  var node = null
  for (var i = arr.length - 1; i >=0; i -= 1) {
    node = {
      data: arr[i],
      rest: node
    };
  };
  return node;
}

var actual = arrayToList([1,2,3])
var expected = "{ data: 1, rest: { data: 2, rest: { data: 3, rest: null } } }"
console.log('actual:')
console.log(actual)
console.log('expected:')
console.log(expected)
