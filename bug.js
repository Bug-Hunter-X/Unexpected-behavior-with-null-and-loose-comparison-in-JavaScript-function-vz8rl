function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will return null only if a and b are both strictly null
  }
  return a + b;
}
console.log(foo(null, 0)); // This will print 0, not null, unexpectedly.