import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [] // task will be props in Todo
    };

    this.create = this.create.bind(this); // or use arrow syntax
    this.remove = this.remove.bind(this);
  }

  // CREATE a *new* todo
  create(newTodo) {
    // this will need to be passed down into form so I can link to it
    this.setState({
      todos: [...this.state.todos, newTodo] // must return array
    });
  }

  // REMOVING a todo item
  remove(id) {
    // removing items based of the id provided by uuid
    this.setState({
      // run the id passed in and filter out whichever id matches the id passed in resulting in 'true' to remove
      todos: this.state.todos.filter(todo => todo.id !== id) // filtering out the matching id
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          task={todo.task}
          id={todo.id} // will be used as a prop in Todo.js
          removeTodo={this.remove} // assign removeTodo inside the todo componment
        />
      ); // the id is coming from the newToDo created.
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
