import React, {Component} from 'react';
import {Menu, Dropdown, Icon} from 'antd';
import '../assets/css/top-nav.scss';

function Nav(props) {
    function handleClick(e){
        props.handleClick(e.key)
    }
    return (
        <Menu mode="horizontal" selectedKeys={[props.current]} onClick={handleClick}>
            <Menu.Item key="home">
                首页
            </Menu.Item>
            <Menu.Item key="custom">
                客户管理
            </Menu.Item>
            <Menu.Item key="order">
                订单管理
            </Menu.Item>
            <Menu.Item key="report">
                报表统计
            </Menu.Item>
            <Menu.Item key="channel">
                渠道管理
            </Menu.Item>
            <Menu.Item key="system">
                系统设置
            </Menu.Item>
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
        this.setState({
            current: key
        })
    };
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a href="#/login">
                        设置中心
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#/login">
                        退出
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="top-nav" id="top-nav">
                <div className='left-box'></div>
                <div className="right-box">
                    <div className="menu-box">
                        <Nav current={this.state.current} handleClick={this.handleClick} />
                    </div>
                    <div className="user-box">
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" href="#">
                                Hover me <Icon type="down"/>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNav;