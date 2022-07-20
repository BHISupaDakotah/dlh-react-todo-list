// main controller
import { Component } from "react";
import TodoItem from "./TodoItem";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: [{ id: 1, title: "test todo items", done: false }],
    };
  }

  componentDidMount() {
    this.setState({
      todos: [{ id: 1, title: "test todo items", done: true }],
    });
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
      console.log(todo);
      return <TodoItem key={todo.id} /*todo={todo}*/ {...todo} />;
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>

        <form className="add-todo">
          <input type="text" placeholder="Add Todo" />

          <button>add</button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

export default App;
