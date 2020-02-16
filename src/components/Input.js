/* eslint-disable react/prop-types */
import React from "react"

const Input = props => {
  const { changed, text } = props
  return (
    <div>
      {/* Get the Binding.js handler function for the inputx text and update placeholder with prop text */}
      <input type="text" onChange={changed} placeholder={text} />
    </div>
  )
}

export default Input
