import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialState = {
    todos: [
      {
        id: 1,
        description: "Call Mom",
        isComplete: false
      },
      {
        id: 2,
        description: "Pickup groceries",
        isComplete: true
      }
    ]
  };

  const [state, setState] = useState(initialState);

  const apiURL = "http://accsoftwarebootcamp-todos.herokuapp.com/todos";

  const handleClick = (id) => {
    fetch(`${apiURL}/${id}`, { method: "PUT" })
      .then(() => {
        setState((s) => {
          let thisTodo = s.todos.find((ele) => ele.id === id);
          thisTodo.isComplete = !thisTodo.isComplete;
          return { ...s };
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((todos) => {
        setState((s) => {
          return { ...s, todos: todos };
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const onAddTodo = (e) => {
    e.preventDefault();
    if (!state.newTodo) return;

    fetch(apiURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: state.newTodo })
    })
      .then((res) => res.json())
      .then((data) => {
        setState(s => {
          s.todos.push(data);
          return {...s, newTodo: ""};
        })
      })
      .catch((err) => console.log(err));
  };

  const onChange = (event) => {
    let newState = {
      ...state,
      newTodo: event.target.value
    };
    setState(newState);
  };

  const removeTodo = (e) => {
    e.stopPropagation();

    fetch(`${apiURL}/${e.target.id}`, { method: "DELETE" })
      .then((res) => res.json)
      .then((data) => console.log(data));

    let newState = {
      ...state,
      todos: state.todos.filter((ele) => ele.id !== parseInt(e.target.id))
    };
    setState(newState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do</h1>
        <form onSubmit={onAddTodo}>
          <input type="text" placeholder="enter new todo" onChange={onChange} value={state.newTodo} />
        </form>
        <ul className="container">
          {state.todos.map((ele) => (
            <li
              key={ele.id}
              className={ele.isComplete ? "completed" : "notCompleted"}
              onClick={() => handleClick(ele.id)}
            >
              {ele.description}
              <button className="right" onClick={removeTodo} id={ele.id}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
