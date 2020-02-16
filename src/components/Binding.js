/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from "react"
import Input from "./Input"

export default class Binding extends Component {
  /* Create the state using classic definition */
  state = {
    text: "Default text"
  }

  /* Create function that will be passed by reference to component and update state value */
  nameChangedHandler = event => {
    this.setState({
      /* Get the value of inputx text */
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p>Two way binding between components: {this.state.text}</p>
        {/* Pass the handler function by reference as prop and the current state to show it as placeholder */}
        <Input text={this.state.text} changed={this.nameChangedHandler} />
      </div>
    )
  }
}
