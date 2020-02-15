import React from 'react';
import './App.css';
import Props from './components/Props';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">
      <h4>This is using props</h4>
      <h1>hello there</h1>
      <Props text="General Kenobi"/>
      <h4>This is using Hooks</h4>
      <Hooks />
    </div>
  );
}

export default App;
