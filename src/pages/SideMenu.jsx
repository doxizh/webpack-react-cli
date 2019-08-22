import React, {Component} from 'react';
import {Menu} from 'antd';
import {NavLink} from 'react-router-dom';
import '../assets/css/side-menu.scss';

class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }
    handleClick=(e)=>{
        this.props.handleClick(e.key);
    };
    render() {
        let menu = this.props.sideMenus.map((item,index)=>{
            return (
                <Menu.Item key={item.key}>
                    <NavLink to={item.link}>{item.name}</NavLink>
                </Menu.Item>
            )
        });
        return (
            <div className="side-menu" id="side-menu">
                <Menu mode="inline" selectedKeys={[this.props.current]} onClick={this.handleClick}>
                    {menu}
                </Menu>
            </div>
        );
    }
}

export default SideMenu;