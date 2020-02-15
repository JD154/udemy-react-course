import React, {useState} from 'react';
import Car from './Car';

const List = () => {

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
      <button onClick={showListHandler}>Toggle list</button>
      {/* With JSX show the value of variable assigned with the conditional before, this allows separate Javascript logic from markup for a cleaner and more readable clode*/}
      {carList}
    </div>
  );
}

export default List;
