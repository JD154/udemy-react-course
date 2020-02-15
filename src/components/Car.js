import React from 'react';

const Car = (props) => {
  return (
    <div>
      {/* Use via props the function to delete item created in List.js */}
      <p onClick={props.delete}>{props.brand} {props.model}</p>
    </div>
  );
}

export default Car;
