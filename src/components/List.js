import React, {useState} from 'react';
import styled from 'styled-components';
import Car from './Car';

const List = () => {
  /* 
  Styled components create a component (in this case "StyledButton") 
  which is assigned with normal css styles.
  Also allows manipulate css using conditional expressions passed as props
  */
  const StyledButton = styled.button`
    background-color: ${(props) => props.alt.isShowing ? 'aquamarine' : 'red'};
    color: black;
    border-radius: 4px;
    border: 1px solid #f5f5f0;
    padding: 10px 18px;

    &:hover {
      border: 1px solid grey;
      cursor: pointer;
    }
  `

  const [listState, setListState] = useState({
    list: [
      { brand: 'Ford', model: 'Mustang'},
      { brand: 'Chevrolet', model: 'Camaro'},
      { brand: 'Dodge', model: 'Charger'}
    ]
  });

  const [showList, setShowList] = useState({
    isShowing: true
  });

  /* Function to modify boolean to show/hide list */
  const showListHandler = () => {
    setShowList({
      isShowing: !showList.isShowing
    })
  }

  /* Function that get the key of item to delete */
  const deleteListItem = (itemKey) => {
    /* Use spread operator to get a copy of state. Never mutate state directly */
    const newList = [...listState.list]
    /* Delete list item using the key passed and assign state with the updated list */
    newList.splice(itemKey, 1)
    setListState({list: newList})
  }

  /* Create variable to assign conditionally the jsx fragment */
  let carList = null;

  /* Check if boolean is true to show the list */
  if (showList.isShowing === true) {
    /* Assign JSX to the variable created before */
    carList = (
      <div>
        {/* ES6 map function let loop inside list array and extract every item inside, get the item and the index to assign key property */}
        {listState.list.map((car, key) => {
          /* Send delete function with the unique key via props to Car.js component. "() => fucntion(parameter)" allows pass down parameters without executing them inmediately after rendering */
          return <Car delete={() => deleteListItem(key)} key={key} brand={car.brand} model={car.model} />
        })}
      </div>
    )
  }else {
    carList = (
      <div>
        <p>List is hidden</p>
      </div>
    )
  }

  return (
    <div>
      {/* Replace original Button tag with styled component and pass alt prop to assign conditionally css */}
      <StyledButton alt={showList} onClick={showListHandler}>Toggle list</StyledButton>
      {/* With JSX show the value of variable assigned with the conditional before, this allows separate Javascript logic from markup for a cleaner and more readable clode*/}
      {carList}
    </div>
  );
}

export default List;
