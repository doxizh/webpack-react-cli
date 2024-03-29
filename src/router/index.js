import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from 'pages/Home';
import Count from '../pages/Count';

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/count" component={Count}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default Router;