import React from 'react';
import './App.css';
import Counter from './Apps/Counter.js'
import Header from './Header/Header.js';

const App = () => {
  return (
    <div className="App">
      <Header/>
     <Counter/>
    </div>
  );
}

export default App;
