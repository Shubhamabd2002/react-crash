import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import useInputState from "./useInputState";
import TodoContext from "./TodoContext/context";
import { useContext, type FormEvent } from "react";

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState("") as [
    string,
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    () => void
  ];
  const { addTodo } = useContext(TodoContext);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    addTodo(value);
    e.preventDefault();
    reset();
  }

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          placeholder="Add Items"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
