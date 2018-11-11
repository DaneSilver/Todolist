import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, toggleFunction, done, deleteFunction } = this.props
    return (
      <li>
        <span
          onClick={index => {
            toggleFunction(index)
          }}
          className={done ? 'toggle' : ''}
        >
          {text}
        </span>
        <button
          onClick={index => {
            deleteFunction(index)
          }}
        >
          x
        </button>
      </li>
    )
  }
}

export default Todo
