import React,{Component} from 'react';
import Header from '../components/Header';
import img from '../assets/img/email_round.png';
import '../assets/css/home.scss';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
          fetchData:null,
        };
    }
    componentDidMount(){
        /*fetch('/api/getJson',{
            method:'GET',
        }).then(res=>{
            res.json().then((result)=>{
                console.log(result);
            })
        })*/
    }
    render() {
        return (
            <div className="page-body" id="home-page">
                <Header username="abc" />
                <div className="text">home1</div>
                <img src={img} alt=""/>
            </div>
        );
    }
}

export default Home;