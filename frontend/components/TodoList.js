import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {

  render() {
    return (
        <ul>
          {
            this.props.todoItem.map(todo => {
                return (<Todo key={todo.id} handleCompleted={this.props.handleCompleted} todo={todo} />)
            })
          }
        </ul>
    )
  }
}

