var ancestry = JSON.parse(require('./ancestry.js'))

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

agesOfMotherhood = []
var mother
for (person in byName) {
  mother = byName[person]['mother']
  if(byName[mother]) {
    agesOfMotherhood.push(byName[person]['born'] - byName[mother]['born'])
  }
}
console.log('actual:   ', average(agesOfMotherhood));
console.log('expected: ', 31.2);
