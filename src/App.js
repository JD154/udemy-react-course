import React from 'react';
import Props from './components/Props';
import Hooks from './components/Hooks';
import Binding from './components/Binding';

function App() {
  return (
    <div className="App">
      <div className="component-section">
        <h1>This is using props</h1>
        <h4>hello there</h4>
        <Props text="General Kenobi"/>
      </div>
      <div className="component-section">
        <h1>This is using Hooks</h1>
        <Hooks />
      </div>
      <div className="component-section">
        <h1>This is using two way binding</h1>
        <Binding />
      </div>
    </div>
  );
}

export default App;
