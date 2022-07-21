// videos of 7/20 -7/21

/*
TODO:
-replace local data with api requests-
get all todos [x]
update todo (toggle done) [x]
delete todo permanently []
add todo [x]
*/

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

  // feting main todos using api
  componentDidMount() {
    fetch("https://rec-todo-api.herokuapp.com/todos").then((res) =>
      res
        .json()
        .then((data) => {
          this.setState({
            todos: data,
          });
        })
        .catch((err) => console.error("get todos error:", err))
    );
  }
  // ****** USING MOCK DATA ******
  // handleSubmit(e) {
  //   e.preventDefault();
  //   id++;
  //   this.setState((prevState, prevProps) => ({
  //     todos: [
  //       { id: id, title: prevState.todo, done: false },
  //       ...prevState.todos,
  //     ],
  //     todo: "",
  //   }));
  // }

  // ****** USING API DATA *****
  // https://rec-todo-api.herokuapp.com/todos

  handleSubmit(e) {
    e.preventDefault();
    this.setState((prevState, prevProps) => ({
      todos: [
        { id: id, title: prevState.todo, done: false },
        ...prevState.todos,
      ],
      todo: "",
    }));

    fetch("https://rec-todo-api.herokuapp.com/todo", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.todo,
        done: false,
      }),
      headers: {
        "content-type": "appication/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState, props) => ({
          todos: [data, ...prevState.todos],
          todo: "",
        }));
        debugger;
      })
      .catch((err) => console.error("handlesubmit error: ", err));
  }

  // PLEASE ALWAYS USE SOMETHING GUARENTEED TO BE UNIQUE (email, id)
  handleDelete(id) {
    fetch(`https://rec-todo-api.herokuapp.com/todo/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        this.setState((prevState, prevProps) => ({
          todos: this.state.todos.filter((todo) => todo.id !== id),
        }));
      })
      .catch((err) => console.error("delete error: ", err));
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value,
    });
  }

  renderTodos() {
    return this.state.todos.map((todo) => {
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
