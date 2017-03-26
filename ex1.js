function* foo() {
  console.log(1);
  yield;
  console.log(2);
  yield;
  console.log(3);
}

const fooInstance = foo();

console.log(fooInstance.next());
console.log(fooInstance.next());
console.log(fooInstance.next());
