import React from "react";

export default class InputItem extends React.Component {
  state = {
    inputValue: "",
    list: [],
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        task: this.state.inputValue,
        isDone: false,
        priority: 0,
        complexity: 0,
        data: Date.now(),
        id: `${Math.random()} * ${Math.random()}`,
        isOpen: false,
    }

    const newList = [...this.state.list, newItem];

    this.setState({ inputValue: "", list: newList });

  }
  render() {
    console.log(this.state.inputValue, this.state.list)
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} placeholder="add to your list here" />
        </form>
      </>
    );
  }
}
