import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Detail from './Detail'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/:pokemonId" component={Detail} />
                </Switch>
            </div>
        );
    }
}

export default App;
