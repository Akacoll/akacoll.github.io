import React from 'react';
import './App.css';
import Counter from "apps/Counter";
import Header from "header/Header";
import TicTacToe from "apps/tictactoe/TicTacToe";

const App = () => {
  return (
    <div className="App">
      <Header/>
     <Counter/>
     <div className="border-top my-2"></div>
     <TicTacToe/>
     <div className="border-top my-2"></div>
    </div>
  );
}

export default App;
