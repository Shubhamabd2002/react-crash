import { useContext } from "react";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoContext from "./TodoContext/context";

const TodoApp = () => {
  const { todos } = useContext(TodoContext);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundImage: "url(" + "https://plus.unsplash.com/premium_photo-1683543124636-518d6c09751f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG9yZ2FuaXplcnxlbnwwfHwwfHx8MA%3D%3D" + ") ",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
      }}
    >
      <AppBar position="static" style={{ height: "3em" }}>
        TODO List
      </AppBar>
      <Grid
        container
        justifyContent="center"
        style={{
          marginTop: "1rem",
          display: "block",
          width: "40vw",
          margin: "auto",
        }}
      >
        <TodoForm />
        {todos.length ? <TodoList /> : <div>NO ITEMS!!!...</div>}
      </Grid>
    </Paper>
  );
};
export default TodoApp;
