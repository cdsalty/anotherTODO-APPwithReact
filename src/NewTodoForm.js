import React, { Component } from "react";
import uuid from "uuid/v4";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      // the event is the user's text
      [event.target.name]: event.target.value // using elements's properties to define the state
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // next, call a method being passed down that will create this todo item entered; inside TodoList
    this.props.createTodo({ ...this.state, id: uuid(), completed: false }); // submit the new todo
    // Once the todo is submitted, I need a clear input for the next todo to be entered
    this.setState({ task: "" }); //  and then clear the input for the next todo item to be entered.
  }

  render() {
    return (
      // in order for the form to actually create the " new todo, " it needs an onSubmit to the form
      <form onSubmit={this.handleSubmit}>
        {/* htmlFor and id must match */}
        <label htmlFor="task">Enter Todo:</label>
        <input
          type="text"
          placeholder="Enter new todo"
          id="task" // matching to htmlFor
          name="task" // this allows us to grab the value of name and set it to the value of 'value'
          value={this.state.task} // what is entered into the task/newTodo (has to match what is entered into state)
          // need a way to trigger and caputer the value
          onChange={this.handleChange} // how we record the user's input
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;

// Controlled Input: "need to have state involved.""
