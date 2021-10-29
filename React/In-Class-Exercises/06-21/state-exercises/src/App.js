import React, { Component } from "react";
import RandomNumber from "./RandomNumber";
import "./App.css";

const TodoItem = ({ text }) => <li>{text}</li>;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({ todos, newTodo: "" });
  }

  render() {
    const todosList = this.state.todos.map((todo, index) => <TodoItem key={index} text={todo} />);

    return (
      <div className="App">
        <h1> Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="todo-input"
            autoComplete="off"
            type="text"
            name="newTodo"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onChange={this.handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
        <div className="todo-content">
          <ol>{todosList}</ol>
        </div>
        <RandomNumber />
      </div>
    );
  }
}

export default App;
