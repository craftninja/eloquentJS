// Your code here.
function isEven(number) {
  if (number == 0)
    return (true);
  else if (number == 1)
    return (false);
  else if (number >=2)
    return isEven(number - 2);
  else
    return isEven(number + 2);
};


console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

+------------------

function isEven(num) {
  if (num < 0) { num = num * -1};
  if (num === 1) {
    return false;
  } else if (num === 0) {
    return true;
  } else {
    return isEven(num - 2);
  };
};
