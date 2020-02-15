import React, { Component } from 'react'

export default class Props extends Component {
  render() {
    return (
      <div>
        <p>This is a prop: {this.props.text}</p>
      </div>
    )
  }
}
