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

actual = arrayToList([1,2,3])
console.log(actual)
var expected = "{ data: 1, rest: { data: 2, rest: { data: 3, rest: null } } }"
console.log("should be:\n" + expected)
