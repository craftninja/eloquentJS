console.log("Log contents with a loop");
var array = [1,2,3];
for (var i=0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
};


console.log("Log contents with a defined function (Abstraction)");
function logEach(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  };
};

logEach([1,2,3]);


console.log("Log contents with a defined function accepting a pre-defined function");
function forEach(array, action) {
  for (var i = 0; i < array.length; i ++) {
    action(array[i]);
  };
};

forEach([1,2,3], console.log)

console.log("Sum contents using prev function accepting a function defined on the spot");
var sum = 0;
forEach(array, function(number) {
  sum += number;
});
console.log(sum);

console.log("Also, surprise, forEach is a thing. It takes only one argument... just the function");

array.forEach(function(number) {
  console.log(number);
});

console.log("Higher order functions operate on OTHER functions.");
console.log("Higher order functions can create functions");
function greaterThan(n) {
  return function(m) { return m > n};
};

var greaterThan10 = greaterThan(10);
console.log(greaterThan10(4));
console.log(greaterThan10(14));

var greaterThan30 = greaterThan(30);
console.log(greaterThan30(4));
console.log(greaterThan30(34));

var a = 25
var greaterThanA = greaterThan(a);
console.log(greaterThanA(12));
a = 10
console.log(greaterThanA(12));

console.log("Higher order functions can change functions");
function noisy(f) {
  return function(arg) {
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}

noisy(Boolean)(0)
noisy(Boolean)(true)
noisy(Boolean)("words")


console.log("Higher order functions can provide new types of control flow");

function unless(test, then) {
  if (!test) then();
};

function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
};

repeat(3, function(n) {
  unless (n % 2, function() {
    console.log(n, "is even");
  });
});

console.log("I don't understand this part... Passing along arguments")

function transparentWrapping (f) {
  return function () {
    return f.apply(null, arguments);
  };
};

console.log("JSON")
