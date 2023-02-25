import React from 'react'


export default class Todo extends React.Component {
  handleToggle = () => {
    this.props.handleCompleted(this.props.todo.id)
  } 
  render() {
    return (
      <ul>
        <li onClick={this.handleToggle}>{this.props.todo.task} { this.props.todo.completed?<span>- completed</span> : <span></span>}</li>
      </ul>
    )
  }
}
