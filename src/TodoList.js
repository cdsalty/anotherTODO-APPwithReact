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
    this.update = this.update.bind(this); // once it's bounded, need to pass it down to each Todo
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

  // UPDATING TASK involves UPDATING STATE    (never mutate state)
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id} // will be used as a prop in Todo.js
          task={todo.task}
          removeTodo={this.remove} // assign removeTodo inside the todo componment
          updateTodo={this.update}
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
