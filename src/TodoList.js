import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(); // Removed PROPS from super;
    this.state = {
      todos: [{ task: "walk the fish" }, { task: "fly the birds" }]
    };
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>
          <li>{todos}</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
