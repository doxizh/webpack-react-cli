import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from 'pages/Login'
import Content from 'pages/Content'
import Count from "pages/Count";

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/count" component={Count}/>
                    <Route path="/" component={Content}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default Router;