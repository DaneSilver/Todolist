import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
  render() {
    const { text, toggleFunction, done } = this.props
    return (
      <li
        onClick={index => {
          toggleFunction(index)
        }}
        className={done ? 'toggle' : ''}
      >
        {text}
      </li>
    )
  }
}

export default Todo
