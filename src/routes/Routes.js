import React from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "static/Home";
import Counter from "apps/Counter";
import TicTacToe from "apps/tictactoe/TicTacToe";

const Routes = () => (
    <main>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/tictactoe" component={TicTacToe} />
    </main>
)

export default Routes;