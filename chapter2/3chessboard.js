// Your code here.
var max = prompt("What is your dimention of the board?");
var row1 = ""
var row2 = ""
for (i = max; i > 0; i -=2) {
  if (i === 1) {
    row1 += " ";
    row2 += "#";
  } else {
    row1 += " #";
    row2 += "# ";
  };
};
var i = 0;
do {
  if (i < max) console.log(row1);
  i++
  if (i < max) console.log(row2);
  i ++
} while (i < max);
