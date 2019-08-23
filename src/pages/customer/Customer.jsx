import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import 'assets/css/customer.scss';
import CustomerList from "./CustomerList";
import CustomerProjectList from "./CustomerProjectList";

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="page-body" id="customer-page">
                <Switch>
                    <Route exact path="/customer/" render={() => (
                        <Redirect to="/customer/customerList"/>
                    )}/>
                    <Route exact path="/customer/customerList" component={CustomerList}/>
                    <Route exact path="/customer/customerProjectList" component={CustomerProjectList}/>
                </Switch>
            </div>
        );
    }
}

export default Customer;