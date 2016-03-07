// A vector type
//
// Write a constructor Vector that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.
//
// Give the Vector prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (the one in this and the parameter) x and y values.
//
// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

function Vector (x, y) {
  this.x = x;
  this.y = y;

  this.plus = function(vector) {
    var newX = this.x + vector.x;
    var newY = this.y + vector.y;
    return new Vector(newX, newY);
  };
  this.minus = function(vector) {
    var newX = this.x - vector.x;
    var newY = this.y - vector.y;
    return new Vector(newX, newY);
  };
};

function sqrd (num) {
  return num * num;
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() { return Math.sqrt( sqrd(this.x) + sqrd(this.y) ); }
});

console.log('actual:  ', new Vector(1, 2).plus(new Vector(2, 3)));
console.log('expected:', 'Vector {x: 3, y: 5}');
console.log('actual:  ', new Vector(1, 2).minus(new Vector(2, 3)));
console.log('expected:', 'Vector {x: -1, y: -1}');
console.log('actual:  ', new Vector(3, 4).length);
console.log('expected:', 5);
