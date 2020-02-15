/* Import useState hook to use in functional components */
import React, {useState} from 'react';

const Hooks = () => {
  /* Destructuring the useState in two variables: first one is the getter and the second one is the setter. Is recommended to name the setter with prefix "set" */
  const [hooksState, setHookState] = useState({
    persons: [
      { name: 'Jesus', date: '12/16/1996' },
      { name: 'Lizzie', date: '18/04/1996' }
    ]
  });
  /* Is a bad practice to define multiple objects in one state because when modified, Hooks doesn't merge the untouched part. Is a better practice create states as you requires */
  const [anotherState, setAnotherState] = useState({
    text: 'Hello from another state'
  });

  const swapNameHandler = () => {
    if (hooksState.persons[0].name === 'Jesus') {
      /* Manipulating state with Hooks removes the need of 'this.' prefix calling state setters */
      setHookState({
        persons: [
          { name: 'Lizzie', date: '18/04/1996' },
          { name: 'Jesus', date: '12/16/1996' }
        ]
      })
    } else {
      setHookState({
        persons: [
          { name: 'Jesus', date: '12/16/1996' },
          { name: 'Lizzie', date: '18/04/1996' }
        ]
      })
    }
  };

  return (
    <div>
      {/* Using the useState getter from Hooks removes the need of 'this.' prefix */}
      <p>Name: {hooksState.persons[0].name}, birthday: {hooksState.persons[0].date}</p>
      <p>Name: {hooksState.persons[1].name}, birthday: {hooksState.persons[1].date}</p>
      {/* Using functional component removes needs of using 'this,' to call functions */}
      <button onClick={swapNameHandler}>Swap names</button>
      <p>Using another useState hook: {anotherState.text}</p>
    </div>
  );
}

export default Hooks;
