import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, toggleFunction, done, deleteFunction } = this.props
    return (
      <ul>
        <span
          onClick={index => {
            toggleFunction(index)
          }}
          className={done ? 'toggle' : ''}
        >
          {text}
        </span>
        <button
          className="delete-btn"
          onClick={index => {
            deleteFunction(index)
          }}
        >
          x
        </button>
      </ul>
    )
  }
}

export default Todo
