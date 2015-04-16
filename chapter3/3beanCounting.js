// Your code here.

function countBs(word) {
  countChar(word, "B")
};

function countChar(word, char) {
  var count = 0;
  for (i=0; i < word.length; i++) {
    if (word[i] === char)
      count++;
  };
  return count;
};

console.log(countBs("BBC"));
console.log("Should be 2")

console.log(countChar("kakkerlak", "k"));
console.log("Should be 4")
