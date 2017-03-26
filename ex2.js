function* foo() {
  const name = yield;
  console.log(`My name is ${name}`);
  yield `Nice to meet you`;
  console.log('Bye');
}

const fooInstance = foo();

console.log(fooInstance.next());
console.log(fooInstance.next('Karol'));
console.log(fooInstance.next());
