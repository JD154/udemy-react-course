import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <div>
        {/* Get the Binding.js handler function for the inputx text and update placeholder with prop text */}
        <input type="text" onChange={this.props.changed} placeholder={this.props.text}/>
      </div>
    )
  }
}
