function* random (low, high) {
  yield 'random'
  const random = Math.floor(Math.random() * (high - low + 1) + low);
  yield 'random ends'
  return random;
}

function* frontDevs() {
  yield 'frontDevs';
  const frontDevs = ['Bartek', 'Michal', 'Pawel', 'Karol', 'Alex', 'Szymon', 'Piotrek', 'Greg', 'Jaro', 'Mateusz', 'Janusz', 'Philine', 'Nicolas', 'Benjamin', 'Salman', 'Illia'];
  const randomDev = yield* random(0, frontDevs.length - 1);
  yield 'frontDevs ends';
  return frontDevs[randomDev];
}

function* foo() {
  yield 'foo';
  const frontDev = yield* frontDevs();
  const randomDev = yield* random(0, frontDevs.length - 1);
  yield 'frontDevs ends';
  return frontDevs[randomDev];
}

function* foo() {
  yield 'foo';
  const frontDev = yield* frontDevs();
  yield `👋 I dare ✨${frontDev}✨ to give a talk about some es6/7 feature 💥`;
  yield 'foo ends'
}

const fooInstance = foo();

for (let i of fooInstance) {
  console.log(i);
}