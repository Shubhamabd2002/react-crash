import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoContext from "./context";

// Define the Todo type
type Todo = {
  id: string;
  task: string;
  completed: boolean;
};
const TodoContextWrapper = ({children}: ContextWrapperProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodo = (newTodoText: string) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };
  const removeTodo = (todoId: string) => {
    const updateTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updateTodos);
  };

  const toggleTodo = (todoId: string) => {
    const updateTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updateTodos);
  };

  const editTodo = (todoId: string, newTask: string) => {
    const updateTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );
    setTodos(updateTodos);
  };
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleTodo,
        editTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextWrapper;
