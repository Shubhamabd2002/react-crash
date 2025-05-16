import useToggle from "./useToggle";
import EditTodoForm from "./EditTodoForm";
import { ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TodoContext from "./TodoContext/context";
import { useContext } from "react";

type TodoProps = {
  id: string;
  task: string;
  completed: boolean;
};

function Todo({
  id,
  task,
  completed,
}: TodoProps) {
  const [isEditing, toggle] = useToggle(false) as [boolean, () => void];
  const { editTodo, removeTodo, toggleTodo } = useContext(TodoContext);
  return (
    <ListItem style={{justifyContent: "space-between"}}>
      {isEditing ? (
        <EditTodoForm
          editTodo={editTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              tabIndex={-1}
              checked={completed}
              onClick={() => {
                toggleTodo(id);
              }}
            />
            <ListItemText
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {task}
            </ListItemText>
          </div>
          <div>
            <ListItem>
              <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => toggle()}>
                <EditIcon aria-label="Edit" />
              </IconButton>
            </ListItem>
          </div>
        </>
      )}
    </ListItem>
  );
}
export default Todo;
