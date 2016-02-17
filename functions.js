console.log("Named functions are assigned a name (following the keyword function) and can be reused");
function named() {
  console.log("I'm named");
};

console.log("Anonymous functions do not have a name after the keyword function, and assigned to a variable they can then be reused");
var anon = function() {
  console.log("I'm an anonymous function that is assigned to a variable");
};


console.log("Higher order function examples");

console.log("Map");
console.log("array.map(callback)");
var array = [1,2,3];
var newArray = array.map(function(elem) {
  return elem + 1
});
console.log(array);
console.log(newArray);

console.log("Reduce / Inject / Folding");
console.log("array.reduce(callback, initialValue);");
reduction = array.reduce(function(sum, element) {
  return sum + element;
})
console.log(reduction);

var words = ['Math ', 'is ', 'awesome!'];
reduction = words.reduce(function(sentance, word) {
  return sentance + word;
});
console.log(reduction)
