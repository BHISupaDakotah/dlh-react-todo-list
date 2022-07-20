import { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      done: props.done,
    };
  }

  // componentDidMount(){
  //   this.setState({
  //     done: this.props.done
  //   })
  // }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" defaultChecked={this.state.done} />

        <p className={this.state.done ? "done" : ""}>
          {this.props.title || "no title"}
        </p>

        <button>x</button>
      </div>
    );
  }
}
