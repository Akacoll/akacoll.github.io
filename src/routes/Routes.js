import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "static/Home";
import Redux from "static/Redux";
import Counter from "Apps/Counter";
import TicTacToe from "Apps/tictactoe/TicTacToe";
import Emoji from 'shared/Emoji';

const PageNotFound = () => (
        <h4>Page not found... <Emoji label="Sad face">😔</Emoji></h4>
)

const Routes = () => (
    <main>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/redux" component={Redux} />
            <Route path="/counter" component={Counter} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Route component={PageNotFound} />
        </Switch>
    </main>
)

export default Routes;