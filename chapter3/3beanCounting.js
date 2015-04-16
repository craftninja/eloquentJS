// Your code here.

function countBs(word) {
  var count = 0
  for (i=0; i < word.length; i++) {
    if (word[i] === "B")
      count ++;
  };
  return count;
};

console.log(countBs("BBC"));
// → 2
//console.log(countChar("kakkerlak", "k"));
// → 4
