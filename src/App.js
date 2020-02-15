import React from 'react';
import Props from './components/Props';
import Hooks from './components/Hooks';
import Binding from './components/Binding';
import List from './components/List'
function App() {
  return (
    <div className="App">
      <div className="component-section">
        <h1>Using props</h1>
        <h4>hello there</h4>
        <Props text="General Kenobi"/>
      </div>
      <div className="component-section">
        <h1>Using useState Hook</h1>
        <Hooks />
      </div>
      <div className="component-section">
        <h1>Two way binding</h1>
        <Binding />
      </div>
      <div className="component-section">
        <h1>Conditional rendering</h1>
        <List />
      </div>
    </div>
  );
}

export default App;
