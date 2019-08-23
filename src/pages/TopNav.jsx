import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Menu, Dropdown, Icon} from 'antd';
import '../assets/css/top-nav.scss';

const Nav=(props)=> {
    function handleClick(e){
        props.handleClick(e.key)
    }
    let items=[
        {
            key:'home',
            name:'首页'
        },
        {
            key:'customer',
            name:'客户管理'
        },
        {
            key:'system',
            name:'系统设置'
        },
    ];
    let itemsList=items.map((item,index)=>{
       return (
           <Menu.Item key={item.key}>
               {item.name}
           </Menu.Item>
       )
    });
    return (
        <Menu mode="horizontal" selectedKeys={[props.current]} onClick={handleClick}>
            {itemsList}
        </Menu>
    )
}

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current:'home'
        };
    }

    componentDidMount() {

    }
    handleClick=(key)=>{
        this.props.switchSideMenu(key);
    };
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <NavLink to="/home/accountConfig">
                        设置中心
                    </NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/login">
                        退出
                    </NavLink>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="top-nav" id="top-nav">
                <div className='left-box'></div>
                <div className="right-box">
                    <div className="menu-box">
                        <Nav current={this.props.current} handleClick={this.handleClick} />
                    </div>
                    <div className="user-box">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                admin <Icon type="down"/>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNav;