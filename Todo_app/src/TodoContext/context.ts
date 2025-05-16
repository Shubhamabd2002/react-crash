import { createContext } from "react";
type Todo = {
  id: string;
  task: string;
  completed: boolean;
};

type TodoData = {
  todos: Todo[];
  addTodo: (newTodoText: string) => void;
  removeTodo: (todoId: string) => void;
  toggleTodo: (todoId: string) => void;
  editTodo: (todoId: string, newTask: string) => void;
};

const initialTodos: TodoData = {
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
  editTodo: () => {},
};

const TodoContext = createContext(initialTodos);

export default TodoContext;
