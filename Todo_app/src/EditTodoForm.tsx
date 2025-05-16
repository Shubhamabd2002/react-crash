import TextField from '@mui/material/TextField';
import useInputState from "./useInputState";

type EditTodoFormProps = {
  id: string;
  task: string;
  editTodo: (id: string, newTask: string) => void;
  toggleEditForm: () => void;
};

function EditTodoForm({ id, editTodo, task, toggleEditForm }: EditTodoFormProps) {
  const [value, handleChange, reset] = useInputState(task) as [string, (e: React.ChangeEvent<HTMLInputElement>) => void, () => void];
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField value={value} onChange={handleChange} />
    </form>
  );
}
export default EditTodoForm;
