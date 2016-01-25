/*
var arrayToList = function (arr) {
  var list = null;
  for (var i = arr.length - 1; i >=0; i -= 1) {
    list = prepend(arr[i], list);
  };
  return list;
};

var listToArray = function (list) {
  var array = [];
  while (list.rest != null) {
    array.push(list.value);
    list = list.rest;
  };
  array.push(list.value);
  return array;
};

var prepend = function (element, list) {
  return {value: element, rest: list};
};

var nth = function (list, index) {
  if (!list) {
    return undefined;
  } else if (index === 0) {
    return list.value;
  } else {
    return nth (list.rest, index-1);
  }
};

var actual = arrayToList([1,2,3]);
var expected = "{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }";
console.log('actual:  ', actual);
console.log('expected:', expected);

actual = listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } });
expected = [1,2,3];
console.log('actual:  ', actual);
console.log('expected:', expected);

actual = prepend(1, { value: 2, rest: { value: 3, rest: null } });
expected = "{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }";
console.log('actual:  ', actual);
console.log('expected:', expected);

actual = nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 2);
expected = 3;
console.log('actual:  ', actual);
console.log('expected:', expected);

actual = nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 5);
expected = undefined;
console.log('actual:  ', actual);
console.log('expected:', expected);
*/
// +---------------------------------

// Your code here.

function listToArray (list) {
  var array = [];
  var element;
  for (var i = 0; element = nth(list, i); i ++) {
    array.push(element);
  };
  return array;
};

function nth (list, number) {
  if (!list) {
    return undefined;
  } else if (number === 0) {
    return list.value;
  } else {
    return nth (list.rest, number - 1);
  };
};

function arrayToList (array) {
  var list = null;
  array.reverse().forEach(function(element) {
    list = {
      value: element,
      rest: list
    };
  });
  return list;
};

function prepend (element, list) {
  return {
    value: element,
    rest: list
  };
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
