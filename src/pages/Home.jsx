import React,{Component} from 'react';
import Header from '../components/Header';
import img from '../assets/img/email_round.png';

class Home extends Component{
    render() {
        return (
            <div className="page-body" id="home-page">
                <Header username="abc" />
                <div className="text">home</div>
                <img src={img} alt=""/>
            </div>
        );
    }
}

export default Home;