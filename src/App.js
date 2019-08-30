import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";

import Routes from "routes/Routes";

import Header from "static/Header";

import Button from 'shared/Button';

const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <Header>
          <Link to={"/home"}>
            <Button
              variant="outline-dark"
              text="Home"
            />
          </Link>
          <Link to={"/redux"}>
            <Button
              variant="outline-dark"
              text="Redux"
            />
          </Link>
          <Link to={"/counter"}>
            <Button
              variant="outline-dark"
              text="Counter"
            />
          </Link>
          <Link to={"/tictactoe"}>
            <Button
              variant="outline-dark"
              text="Tic Tac Toe"
            />
          </Link>
        </Header>
        <Routes />
      </div>
    </Router>
  );
}

export default App;