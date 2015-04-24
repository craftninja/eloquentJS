function reverseArray(array) {
  var newArray = [];
  for (i = 0; i < array.length; i ++) {
    newArray.unshift(array[i]);
  };
  return newArray;
}

function reverseArrayInPlace(array) {
  var tmp;
  for (i = 0; i < array.length/2; i ++ ) {
    tmp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = tmp;
  };
  return array;
}


console.log("reverseArray")
var array = [1,2,3,4,5];
var actual = reverseArray(array);
console.log("actual:");
console.log(actual);
console.log(array);

var expected = [5,4,3,2,1];
console.log("expected:");
console.log(expected);
console.log([1,2,3,4,5]);

console.log("reverseArrayInPlace")
var array = [1,2,3,4,5];
var actual = reverseArrayInPlace(array);
console.log("actual:");
console.log(actual);
console.log(array);

var expected = [5,4,3,2,1];
console.log("expected:");
console.log(expected);
console.log(expected);
