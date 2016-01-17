var tier = '';

for (i = 0; i < 7; i ++) {
  tier = tier + "#";
  console.log(tier);
};

+--------------------

var triangle = "";
for (var line = "#"; line.length <= 7; line += "#") {
  triangle += line + "\n";
};
console.log(triangle);
