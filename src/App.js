import React from 'react';
import './App.css';
import { HashRouter as Router, Link } from "react-router-dom";

import Routes from "routes/Routes";

import Header from "static/Header";

import Button from 'shared/Button';

const App = () => {
  let linkVariant = "secondary";
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header>
          <Link to={"/home"}>
            <Button
              variant={linkVariant}
              text="Home 🏠"
            />
          </Link>
          <Link to={"/redux"}>
            <Button
              variant={linkVariant}
              text="Redux 🛍"
            />
          </Link>
          <Link to={"/counter"}>
            <Button
              variant={linkVariant}
              text="Counter 🤓"
            />
          </Link>
          <Link to={"/tictactoe"}>
            <Button
              variant={linkVariant}
              text="😇 Tic Tac Toe 😈"
            />
          </Link>
        </Header>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
