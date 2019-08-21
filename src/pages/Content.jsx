import React,{Component,Fragment} from 'react';
import {HashRouter} from 'react-router-dom';
import TopNav from './TopNav'
import ContentRouter from "../router/contentRouter";


class Content extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    }
    componentDidMount(){

    }
    render() {
        return (
            <Fragment>
                <TopNav />
                <ContentRouter />
            </Fragment>
        );
    }
}

export default Content;