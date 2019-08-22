import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/Login'
import Content from '../pages/Content'

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/" component={Content}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router;