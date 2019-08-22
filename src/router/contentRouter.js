import React, {Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from "pages/home/Home";
import Customer from "pages/customer/Customer";
import Count from "pages/Count";

class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/customer" component={Customer}/>
                    <Route path="/count" component={Count}/>
                </Switch>
            </HashRouter>
        )
    }
}

export default Router;