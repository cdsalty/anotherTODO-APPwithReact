import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "walk the fish" }, { task: "fly the birds" }] // task will be props in Todo
    };

    this.create = this.create.bind(this); // or use arrow syntax
  }

  create(newTodo) {
    // this will need to be passed down into form so I can link to it
    this.setState({
      todos: [...this.state.todos, newTodo] // must return array
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <Todo task={todo.task} />; // render inside jsx
    });
    return (
      <div>
        <h1>Todo List!</h1>
        <NewTodoForm createTodo={this.create} />
        {/* create will be a prop inside newTodoForm */}
        <ul>{todos}</ul>
      </div>
    );
  }
}

export default TodoList;
