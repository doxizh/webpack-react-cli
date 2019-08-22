import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/home/" render={() => (
                            <Redirect to="/home/systemHome"/>
                        )} />
                        <Route exact path="/home/systemHome" component={SystemHome} />
                        <Route exact path="/home/accountConfig" component={AccountConfig} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Home;