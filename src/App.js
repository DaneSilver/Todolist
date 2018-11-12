import React, { Component } from 'react'
import Input from './Input'
import Todo from './Todo'
import './App.css'

class App extends Component {
  state = {
    todos: this.load()
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

  deleteFunction = index => {
    // 1. "state" laden und verknüpfen todos
    const { todos } = this.state

    // 2. bauen wir ein neues Array ohne das gelöschte Element
    const deleteDone = [...todos.slice(0, index), ...todos.slice(index + 1)]
    //const deleteDone = todos.splice(index, 1) recherchieren

    // 3. speichern des veränderten Arrays in "state" inkl. erneute Ausgabe durch setState
    this.setState({
      todos: deleteDone
    })
  }

  addToggle = index => {
    const { todos } = this.state

    const toggleDone = [
      ...todos.slice(0, index),
      { ...todos[index], done: !todos[index].done },
      ...todos.slice(index + 1)
    ]

    /*
    console.log([...todos.slice(0, index)])
    console.log([{ ...todos[index], done: !todos[index].done }])
    console.log([...todos.slice(index + 1)])
    */

    //console.log(toggleDone)
    this.setState({
      todos: toggleDone
    })
  }

  render() {
    this.save()
    return (
      <div className="div1">
        <Input className="input" KeyUpFunction={this.addTodoArray} />
        <div className="div2">
          {this.state.todos.map((todo, index) => (
            <Todo
              toggleFunction={() => {
                this.addToggle(index)
              }}
              done={todo.done}
              text={todo.text}
              key={todo.text}
              deleteFunction={() => {
                this.deleteFunction(index)
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  save() {
    localStorage.setItem('todo-app--todos', JSON.stringify(this.state.todos))
  }

  load() {
    try {
      return JSON.parse(localStorage.getItem('todo-app--todos')) || []
    } catch (err) {
      return []
    }
  }
}

export default App
