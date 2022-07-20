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
  }
  // componentDidMount(){
  //   this.setState({
  //     done: this.props.done
  //   })
  // }

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
