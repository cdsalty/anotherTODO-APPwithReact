import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form>
        {/* htmlFor and id must match */}
        <label htmlFor="task">New Todo</label>
        <input
          type="text"
          placeholder="Enter new todo"
          id="task"
          name="task" // this allows us to grab the value of name and set it to the value of 'value'
          value={this.state.task} // what is entered into the task/newTodo (has to match what is entered into state)
          // need a way to trigger and caputer the value
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default NewTodoForm;

// Controlled Input: "need to have state involved.""
