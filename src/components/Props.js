/* eslint-disable react/prop-types */
import React from "react"

const Props = props => {
  const { text } = props
  return (
    <div>
      <p>This is a prop: {text}</p>
    </div>
  )
}

export default Props
