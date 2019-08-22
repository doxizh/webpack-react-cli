import React,{Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import 'assets/css/system.scss';
import MenuConfig from "./MenuConfig";
import SystemRole from "./SystemRole";
import PowerConfig from "./PowerConfig";
import UserManger from "./UserManger";

class System extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="page-body" id="system-page">
                <HashRouter>
                    <Switch>
                        <Route exact path="/system/" component={MenuConfig}/>
                        <Route exact path="/system/menuConfig" component={MenuConfig}/>
                        <Route exact path="/system/systemRole" component={SystemRole}/>
                        <Route exact path="/system/powerConfig" component={PowerConfig}/>
                        <Route exact path="/system/userManger" component={UserManger}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default System;