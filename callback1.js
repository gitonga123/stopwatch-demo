var calc = function(num1, num2, calcType) {
  if (calcType === 'add') {
    return num1 + num2;
  } else if (calcType === 'product') {
    return num1 * num2;
  } else if (calcType === 'minus') {
    return num1 - num2;
  }
}

console.log(calc(2, 3, 'add'));
console.log(calc(3, 4, 'product'));
console.log(calc(4, 4, 'minus'));

// using callbacks

var add = function(num1, num2) {
  return num1 + num2;
}

var product = function(num1, num2) {
  return num1 * num2;
}

var minus = function(num1, num3) {
  return num1 - num2;
}

var calculator = function(num1, num2, callback) {
  return add(num1, num2);
}

console.log(calculator(3, 5, add));
console.log(calculator(3, 5, product));
console.log(calculator(7, 5, minus));