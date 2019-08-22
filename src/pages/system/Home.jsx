import React,{Component} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import '../../assets/css/home.scss';
import SystemHome from "./SystemHome";
import AccountConfig from "./AccountConfig";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    componentDidMount(){

    }
    render() {
        return (
            <div className="page-body" id="home-page">
                <HashRouter>
                    <Switch>
                        <Route exact path="/home/" component={SystemHome}/>
                        <Route exact path="/home/systemHome" component={SystemHome}/>
                        <Route exact path="/home/accountConfig" component={AccountConfig}/>
                    </Switch>
                </HashRouter>
            </div>
        );
    }
}

export default Home;