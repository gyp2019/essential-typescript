var idol = [158, "레드벨벳", false];
var [height, group, married] = idol;
console.log(height);
console.log(group);
console.log(married);


var a = 6;
var b = 9;
[a, b] = [b, a];
console.log(a);
console.log(b);


var todo = {
  id: 123,
  title: "Pick up drycleaning",
  completed: false,
};
var { id, title, completed } = todo;
console.log(id);
console.log(title);
console.log(completed);

function countdown({ initial, final = 10, interval = 1 }) {
  for (let i = initial; i < final; i += interval) {
    console.log(i);
  }
}

countdown({ initial: 7 });


export {
  todo
};
