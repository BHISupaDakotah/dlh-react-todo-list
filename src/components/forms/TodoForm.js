export default function TodoForm(props) {
  return (
    <form className="add-todo" onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="todo"
        placeholder="Add Todo"
        onChange={props.handleChange}
        value={props.todo}
      />

      <button>add</button>
    </form>
  );
}
