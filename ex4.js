function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const fooInstance = foo();

for (let i of fooInstance) {
  console.log(i);
}