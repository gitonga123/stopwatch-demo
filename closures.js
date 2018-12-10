var passed = 4; // lexical scoping - closure
var addTo = function() {
  var inner = 3;
  return passed + inner;
}

console.dir(addTo);