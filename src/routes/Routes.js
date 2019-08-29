import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "static/Home";
import Redux from "static/Redux";
import Counter from "apps/Counter";
import TicTacToe from "apps/tictactoe/TicTacToe";

const Routes = () => (
    <main>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/redux" component={Redux} />
            <Route path="/counter" component={Counter} />
            <Route path="/tictactoe" component={TicTacToe} />
        </Switch>
    </main>
)

export default Routes;