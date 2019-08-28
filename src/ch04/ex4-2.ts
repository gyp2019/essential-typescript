var todo = {
  id: 123,
  name: "Pick up drycleaning",
  completed: true,
};

var displayName = `Todo ${todo.id}: ${todo.name}`;

var displayHtml = `
  <div todo="${todo.id}" class="list-group-item">
    <i class="${ todo.completed ? '' : 'hidden' } text-success glyphicon glyphicon-ok"></i>
    <span class="name">${todo.name}</span>
  </div>
`;

console.log(displayName);
console.log(displayHtml);
