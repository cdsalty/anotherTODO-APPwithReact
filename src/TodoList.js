import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "walk the fish" }, { task: "fly the birds" }] // task will be props in Todo
    };
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />; // render inside jsx
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <NewTodoForm />
        <ul>
          <li>{todos}</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
