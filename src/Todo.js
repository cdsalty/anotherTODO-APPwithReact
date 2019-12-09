import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props); // this is a good example of when props IS REQUIRED within super
    this.state = {
      isEditing: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  toggleForm() {
    // very simple: set the state of 'isEditing' to the opposite
    this.setState({
      // isEditing: true // Both work, why use one over the other???
      isEditing: !this.state.isEditing
    });
  }

  handleUpdate(event) {
    event.preventDefault();
    // take the new task data and pass it  up to the parent
    // pass in the id and the updated task.
    this.props.updateTodo(this.props.id, this.state.task); // state.task is whatever is in the form at that moment
    // Once it's updated, need to reset the state of isEditing to false
    this.setState({
      isEditing: false
    });
  }

  handleChange(event) {
    // for updating the task
    this.setState({
      // the event is the user's text
      task: event.target.value // using elements's properties to define the state
    });
  }

  handleToggle(event) {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result; // create variable to be used in if statement
    if (this.state.isEditing) {
      // isEditing is automatically set to false on initial load/start
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Update Todo</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          {/* Functionality to display a form when clicked */}
          <button onClick={this.toggleForm}>Edit</button>
          {/* Functionality to remove an item when the button is clicked */}
          <button onClick={this.handleRemove}>X</button>
          {/* <li>{this.props.task}</li> */}
          {/* to toggle the stike thru on completed, assign conditional className */}
          <li
            className={this.props.completed ? "completed" : ""}
            onClick={this.handleToggle}
          >
            {/*  if completed, it will be assigned a className of "completed which will apply the css" */}
            {this.props.task}
          </li>
        </div>
      );
    }
    return result; // return either a input form or a todo list based off state
  }
}

export default Todo;
