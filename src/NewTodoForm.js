import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
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
          value="this.state.task"
        />
      </form>
    );
  }
}

export default NewTodoForm;

// Controlled Input: "need to have state involved.""
