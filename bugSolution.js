function foo(a, b) {
  if (a === null || b === null) {
    return null; //Corrected: Strict null check
  }
  return a + b;
}
console.log(foo(null, 0)); // This will correctly print null.