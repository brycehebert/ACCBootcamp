import { useSelector, useDispatch } from "react-redux";
import { TODO_ADD, TODO_COMPLETION_TOGGLE, TODO_INPUT_CHANGE, TODO_REMOVE } from "./actionTypes";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((s) => s);

  //Update todo - toggle completion status
  const onclickMarkTodoComplete = (id) => {
    dispatch({ type: TODO_COMPLETION_TOGGLE, payload: id });
  };

  //CREATE
  const onAddTodo = (event) => {
    // prevent the form from refreshing the page, upon submit
    event.preventDefault();
    if (!state.newTodo) return false;

    dispatch({ type: TODO_ADD });
  };

  // CONTROLLED COMPONENT
  const onChange = (event) => {
    dispatch({ type: TODO_INPUT_CHANGE, payload: event.target.value });
  };

  // DELETE
  const removeTodo = (event) => {
    event.stopPropagation();
    dispatch({ type: TODO_REMOVE, payload: event.target.id });
  };

  // RENDER
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todomatic</h1>

        <form onSubmit={onAddTodo}>
          <input type="text" placeholder="enter todo" onChange={onChange} value={state.newTodo} />
        </form>

        <ol className="container">
          {/* loop over the todos array to create the li's */}
          {state.todos.map((t) => (
            <li
              key={t.id}
              className={t.isComplete ? "completed" : "not"}
              // with onClick provide a function that will run,
              // instead of actually running the function
              onClick={() => {
                onclickMarkTodoComplete(t.id);
              }}
            >
              {t.description}
              <button className="right" onClick={removeTodo} id={t.id}>
                DELETE
              </button>
            </li>
          ))}
        </ol>
      </header>
    </div>
  );
}

export default App;
