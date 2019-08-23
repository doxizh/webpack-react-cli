import React, {Component} from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import 'assets/css/home.scss';
import SystemHome from "./SystemHome";
import AccountConfig from "./AccountConfig";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-body" id="home-page">
                <Switch>
                    <Route exact path="/" component={SystemHome}/>
                    <Route exact path="/home/" component={SystemHome}/>
                    <Route exact path="/home/systemHome" component={SystemHome}/>
                    <Route exact path="/home/accountConfig" component={AccountConfig}/>
                </Switch>
            </div>
        );
    }
}

export default Home;