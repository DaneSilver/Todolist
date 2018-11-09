import React, { Component } from 'react'
import './Input.css'

class Input extends Component {
  render() {
    const { KeyUpFunction } = this.props
    return (
      <input
        onKeyUp={event => {
          KeyUpFunction(event)
        }}
        type="text"
        placeholder="add todo here"
      />
    )
  }
}
export default Input
