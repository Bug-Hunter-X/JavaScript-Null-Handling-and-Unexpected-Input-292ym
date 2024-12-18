function foo(a, b) {
  //Robust input validation
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; //Return NaN for invalid input
  }
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10
console.log(foo('abc',5)); // Output: NaN
console.log(foo(5, 'abc')); // Output: NaN