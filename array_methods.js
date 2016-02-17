arr = [1,2,3,4]

console.log("our array is:")
console.log(arr)
console.log("")
console.log("LENGTH")
console.log("arr.length returns length of array: ")
console.log(arr.length)
console.log("")
console.log("PUSH")
console.log("arr.push(value) mutates array adding value to end, returning the value that was added.")
console.log("arr.push(5) returns:")
console.log(arr.push(5))
console.log("arr.push(5) results in the arr now being:")
console.log(arr)
console.log("")
console.log("POP")
console.log("arr.pop(value) mutates array removing value from end, returning the value that was removed.")
console.log("arr.pop() returns:")
console.log(arr.pop())
console.log("arr.pop() results in the arr now being:")
console.log(arr)
console.log("")
console.log("SHIFT")
console.log("arr.shift() mutates array removing value from beginning (index 0, shifting all elements in the array down one index), returning the value that was removed.")
console.log("arr.shift() returns:")
console.log(arr.shift())
console.log("arr.shift() results in the arr now being:")
console.log(arr)
console.log("")
console.log("UNSHIFT")
console.log("arr.unshift(value) mutates array adding value from to beginning (index 0, shifting all elements in the array up one index), returning the LENGTH OF THE ARRAY. WAT.")
console.log("arr.unshift(1) returns:")
console.log(arr.unshift(1))
console.log("arr.unshift(1) results in the arr now being:")
console.log(arr)
console.log("")
console.log("INDEXOF")
console.log("Let's reset our index to arr = [1,2,3,2,5]")
arr = [1,2,3,2,5];
console.log("arr.indexOf(value) returns the first index of that value in the array.")
console.log("arr.indexOf(2) returns:")
console.log(arr.indexOf(2))
console.log("")
console.log("LASTINDEXOF")
console.log("arr.lastIndexOf(value) returns the last index of that value in the array (searching from the end instead of the beginning of the array).")
console.log("arr.lastIndexOf(2) returns:")
console.log(arr.lastIndexOf(2))
console.log("")
console.log("SLICE")
console.log("arr.slice(index, index) returns a new array starting at the value at the first index and excluding the second index, but not mutating the original array.")
console.log("arr.slice(1,3) returns:")
console.log(arr.slice(1,3))
console.log("arr still returns:")
console.log(arr)
console.log("If you do not include the second index, arr.slice(index) returns a new array starting at the value at the first index and extending to the end of the array")
console.log("arr.slice(1) returns:")
console.log(arr.slice(1))
console.log("")
console.log("CONCAT")
console.log("arr.concat(array) concatonates two arrays together, not mutating the original array.")
console.log("arr.concat(['a', 'b', 'c']) returns:")
console.log(arr.concat(['a', 'b', 'c']))
console.log("arr still returns:")
console.log(arr)
console.log("")
console.log("FOREACH");
console.log("arr.forEach(function(array_element){ do this thing }) accepts a function and runs each item in the array into the function passing the item in as an argument to that function.");
console.log("arr.forEach(function(num) { console.log(num) }) logs each element in the array");
arr.forEach(function(num) { console.log(num) })
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
