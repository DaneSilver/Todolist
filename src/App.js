import React, { Component } from 'react'
import Input from './Input'
import Todo from './Todo'
import './App.css'

class App extends Component {
  state = {
    todos: [
      { text: 'Tomaten', done: false },
      { text: 'Gurken' },
      { text: 'Kartoffeln' }
    ]
  }

  //* todos = [{ text: 'Tomaten', done: false}, { text: 'Gurken' }, { text: 'Kartoffeln' }]  */

  addTodoArray = event => {
    if (event.key === 'Enter') {
      const newTodo = [
        { text: event.target.value, done: false },
        ...this.state.todos
      ]
      this.setState({
        todos: newTodo
      })
      event.target.value = ''
    }
  }

  addToggle = index => {
    const { todos } = this.state
    const toggleDone = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]
    this.setState({
      todos: toggleDone
    })
  }

  render() {
    return (
      <div>
        <Input KeyUpFunction={this.addTodoArray} />
        <div>
          {this.state.todos.map((todo, index) => (
            <Todo
              toggleFunction={() => {
                this.addToggle(index)
              }}
              done={todo.done}
              text={todo.text}
              key={todo.text}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default App
