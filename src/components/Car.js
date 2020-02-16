/* eslint-disable react/prop-types */
import React from "react"

const Car = props => {
  const { remove, brand, model } = props
  return (
    <div>
      {/* Use via props the function to delete item created in List.js */}
      <button type="submit" onClick={remove} onKeyUp={remove}>
        {brand} {model}
      </button>
    </div>
  )
}

export default Car
