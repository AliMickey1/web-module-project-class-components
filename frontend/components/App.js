import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: [
                  {
            name: 'Organize Garage',
            id: 1528817077286, // could look different, you could use a timestamp to generate it
            completed: false
          },
          {
            name: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
      ]
    }
  }

  handleCompleted = (clickedId) => {
     this.setState({
      ...this.state,
      todoItem: this.state.todoItem.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
            return todo;
      })
    })

  }

  handleAddBtn = (task) => {
      const newTodo = {
        task: task,
        id: Date.now(),
        completed: false
      };

        this.setState({
          ...this.state,
          todoItem: [...this.state.todoItem, newTodo]
          });
  }

  handleClear = () => {
    this.setState({
      ...this.state, 
      todoItem: this.state.todoItem.filter(todo => { 
        return (todo.completed === false)
      })
    })
  }

  render() {
    const { todoItem } = this.state;
    return (
      <div>

        
        Todo App
        <h1>Form</h1>
        <TodoList handleCompleted={this.handleCompleted} todoItem={todoItem}/>
        <Form handleAddBtn={this.handleAddBtn}/>
        <button onClick={this.handleClear}>Clear Completed</button>

      </div>
    )
  }
}
