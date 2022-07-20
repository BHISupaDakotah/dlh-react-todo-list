// main controller
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: [],
    };
  }
  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>

        <form className="add-todo">
          <input type="text" placeholder="Add Todo" />

          <button>add</button>
        </form>

        <div className="todo-item">
          <input type="checkbox" />
          <p>Todo item description</p>

          <button>x</button>
        </div>
      </div>
    );
  }
}

export default App;
