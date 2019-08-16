import React,{Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="header" id="header">
                <div className="username">{this.props.username}</div>
            </div>
        );
    }
}

export default Header;