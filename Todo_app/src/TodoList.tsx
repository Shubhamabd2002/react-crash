import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Todo from "./Todo";
import TodoContext from "./TodoContext/context";
import { useContext } from "react";

const TodoList = () => {
    const { todos } = useContext(TodoContext);
    return (
        <Paper>
            <List>
                {todos.map(todo => (
                    <Todo
                        id={todo.id}
                        task={todo.task}
                        key={todo.id}
                        completed={todo.completed}
                    />
                ))}
            </List>
        </Paper>
    );
}
export default TodoList;
