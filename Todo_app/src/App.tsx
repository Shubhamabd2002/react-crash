import TodoApp from "./TodoApp";
import TodoContextWrapper from "./TodoContext/TodoContextWrapper";

function App(){
  return <>
  <TodoContextWrapper>
    <TodoApp />
  </TodoContextWrapper>
  </>;
}
export default App;
