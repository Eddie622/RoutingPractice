import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Router } from '@reach/router';
import DisplayInput from './components/DisplayInput';
import Home from './components/Home';
import DisplayColors from './components/DisplayColors';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <DisplayInput path=":input"/>
        <DisplayColors path=":input/:colorOne/:colorTwo/"/>
      </Router>
    </div>
  );
}

export default App;
