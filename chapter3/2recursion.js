// Your code here.
function isEven(number) {
  if (number == 0)
    console.log(true);
  else if (number == 1)
    console.log(false);
  else if (number >=2)
    isEven(number - 2);
  else
    isEven(number + 2);
};


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
