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
var expected = [5,4,3,2,1];
console.log('actual:  ', actual, 'original array:', array);
console.log('expected:', expected, 'original array:', [1,2,3,4,5]);

console.log("reverseArrayInPlace")
var array = [1,2,3,4,5];
reverseArrayInPlace(array)
var originalArray = [1,2,3,4,5];
var actual = array;
var expected = [5,4,3,2,1];
console.log('actual:  ', actual, 'original array:', originalArray);
console.log('expected:', expected, 'original array:', originalArray);

// +===========================

function reverseArray(original) {
  newArray = []
  original.forEach(function(element) {
    newArray.unshift(element)
  })
  return newArray
}

function reverseArrayInPlace(original) {
  var leftOne;
  for (var i = 0; i < original.length / 2; i ++) {
    leftOne = original[i];
    original[i] = original[original.length - i - 1];
    original[original.length - i - 1] = leftOne;
  };
};
