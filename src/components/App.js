// main controller
import { Component } from "react";
import TodoItem from "./TodoItem";

let id = 0;
class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: "",
      todos: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     todos: [{ id: 1, title: "test todo items", done: true }],
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    id++;
    this.setState((prevState, prevProps) => ({
      todos: [
        { id: id, title: prevState.todo, done: false },
        ...prevState.todos,
      ],
      todo: "",
    }));
  }
  // PLEASE ALWAYS USE SOMETHING GUARENTEED TO BE UNIQUE (email, id)
  handleDelete(id) {
    this.setState((prevState, prevProps) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
      console.log(todo);
      return (
        <TodoItem
          key={todo.id}
          /*todo={todo}*/ {...todo}
          handleDelete={this.handleDelete}
        />
      );
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>

        <form className="add-todo" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            placeholder="Add Todo"
            onChange={this.handleChange}
            value={this.state.todo}
          />

          <button>add</button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

export default App;
