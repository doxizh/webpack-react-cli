import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import 'assets/css/system.scss';
import MenuConfig from "./MenuConfig";
import SystemRole from "./SystemRole";
import PowerConfig from "./PowerConfig";
import UserManger from "./UserManger";

class System extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-body" id="system-page">
                <Switch>
                    <Route exact path="/system/" render={() => (
                        <Redirect to="/system/menuConfig"/>
                    )}/>
                    <Route exact path="/system/menuConfig" component={MenuConfig}/>
                    <Route exact path="/system/systemRole" component={SystemRole}/>
                    <Route exact path="/system/powerConfig" component={PowerConfig}/>
                    <Route exact path="/system/userManger" component={UserManger}/>
                </Switch>
            </div>
        );
    }
}

export default System;