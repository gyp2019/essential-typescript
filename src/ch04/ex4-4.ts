const todos = [
  "Pick up drycleaning",
  "Clean Batcave",
  "Save Gotham",
];

for (let index in todos) {
  console.log(`${index}: ${todos[index]}`);
}


for (let value of todos) {
  console.log(value);
}
