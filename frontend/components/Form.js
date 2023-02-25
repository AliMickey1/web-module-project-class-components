import React from 'react'

export default class Form extends React.Component {

  constructor() {
      super();
      this.state = {
        input: ""
      }
  }

  handleAdd = (event) => {
    event.preventDefault();
    this.props.handleAddBtn(this.state.input);
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      input: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} type="text" placeholder='Enter your todo item' />
        <button onClick={this.handleAdd}>Add Todo</button>
      </form>
    )
  }
}