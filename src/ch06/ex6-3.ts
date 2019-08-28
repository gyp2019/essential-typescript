import Todo from "./ex6-1";

interface jQuery {
  (selector: string): jQueryElement;
  fn: any;
  version: number;
}

interface jQueryElement {
  data(name: string): any;
  data(name: string, data: any): jQueryElement;
}

interface jQueryElement {
  todo(): Todo;
  todo(todo: Todo): jQueryElement;
}

let $ = <jQuery> function(selector) {
}

let todo: Todo = {
  name: "Pick up drycleaning",
  completed: false,
};
let element = $('#my-elment');
element.data('todo', todo);
let savedTodo = element.data('todo');

$.fn.todo = function(todo?: Todo) {
  if (todo) {
    $(this).data('todo', todo);
  } else {
    return $(this).data('todo');
  }
}

element.todo(todo);
let newTodo = element.todo();


export default jQuery;
