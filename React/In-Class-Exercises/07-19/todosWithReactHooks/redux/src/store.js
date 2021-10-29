import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { TODO_ADD, TODO_COMPLETION_TOGGLE, TODO_INPUT_CHANGE, TODO_REMOVE } from "./actionTypes";

const initialState = {
  todos: [{ id: 1, description: "call Mom", isComplete: false }],
  newTodo: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_INPUT_CHANGE: {
      return { ...state, newTodo: action.payload };
    }

    case TODO_ADD: {
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), description: state.newTodo, isComplete: false }],
        newTodo: ""
      };
    }

    case TODO_COMPLETION_TOGGLE: {
      let s = { ...state };
      let this_todo = s.todos.find((el) => el.id === action.payload);
      this_todo.isComplete = !this_todo.isComplete;
      return s;
    }

    case TODO_REMOVE: {
      let s = {
        ...state,
        todos: state.todos.filter((el) => el.id !== parseInt(action.payload))
      };
      return s;
    }

    default:
      return state;
  }
};

export const store = createStore(reducer, composeWithDevTools());
