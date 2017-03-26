function* foo() {
  try {
    const name = yield;
    console.log(`Hello ${name}`);
  } catch (error) {
    console.log(error);
  }
}

const fooInstance = foo();

console.log(fooInstance.next());
console.log(fooInstance.throw('Some error occurs'));
