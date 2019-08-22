import React,{Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import 'assets/css/customer.scss';
import CustomerList from "./CustomerList";
import CustomerProjectList from "./CustomerProjectList";

class Customer extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="page-body" id="customer-page">
                <HashRouter>
                    <Switch>
                        <Route exact path="/customer/" component={CustomerList}/>
                        <Route exact path="/customer/CustomerList" component={CustomerList}/>
                        <Route exact path="/customer/CustomerProjectList" component={CustomerProjectList}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default Customer;