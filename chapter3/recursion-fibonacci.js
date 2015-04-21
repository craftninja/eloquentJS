var fibonacci = function(indexNumber) {
  if (indexNumber === 1 || indexNumber === 2) {
    return 1;
  } else {
    return fibonacci(indexNumber - 1) + fibonacci(indexNumber - 2);
  };
};

console.log(fibonacci(45));
