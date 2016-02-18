var ancestry = JSON.parse(require('./ancestry.js'))

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var century, ageOfDeath;
var histLifeExp = {};
for (person in ancestry) {
  century = Math.ceil(ancestry[person]['died'] / 100);
  ageOfDeath = ancestry[person]['died'] - ancestry[person]['born']
  histLifeExp[century] ? histLifeExp[century].push(ageOfDeath) : histLifeExp[century] = [ageOfDeath];
}

var histLifeExpAvg = {}
for(century in histLifeExp) {
  histLifeExpAvg[century] = Number(average(histLifeExp[century]).toFixed(1))
}

var expected = {16: 43.5, 17: 51.2, 18: 52.8, 19: 54.8, 20: 84.7, 21: 94}
console.log('expected: ', expected);
console.log('actual:   ', histLifeExpAvg);
