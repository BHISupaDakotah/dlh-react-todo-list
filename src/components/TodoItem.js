import { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: props.done,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState, prevProps) => ({
      done: !prevState.done,
    }));
    // {this.props.todo.id (if used todo={todo})}
    fetch(`https://rec-todo-api.herokuapp.com/todo/${this.props.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        done: !this.state.done,
      }),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          done: data.done,
        });
      })
      .catch((err) => console.error("handleclick error: ", err));
  }

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          onClick={this.handleClick}
          defaultChecked={this.state.done}
        />

        <p className={this.state.done ? "done" : ""}>
          {this.props.title || "no title"}
        </p>

        <button onClick={() => this.props.handleDelete(this.props.id)}>
          x
        </button>
      </div>
    );
  }
}
