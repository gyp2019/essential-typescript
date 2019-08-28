interface Todo {
  name: string;
  completed: boolean;
}

const todo: Todo = {
  name: 'Pick up drycleaning',
  completed: false,
};

interface ITodoService {
  add(todo: Todo): Todo;
  delete(todoId: number): void;
  getAll(): Todo[];
  getById(todoId: number): Todo;
}

export default Todo;
