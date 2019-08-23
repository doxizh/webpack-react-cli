import React, {Component, Fragment} from 'react';
import TopNav from './TopNav'
import SideMenu from './SideMenu'
import {Route, Switch} from 'react-router-dom';
import 'assets/css/content.scss'
import Home from "pages/home/Home";
import Customer from "pages/customer/Customer";
import System from "pages/system/System";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allMenus: [
                {
                    key: 'home',
                    children: [
                        {
                            key: 'systemHome',
                            name: '系统首页',
                            link: '/home/systemHome'
                        },
                        {
                            key: 'accountConfig',
                            name: '账号设置',
                            link: '/home/accountConfig'
                        },
                    ]
                },
                {
                    key: 'customer',
                    children: [
                        {
                            key: 'customerList',
                            name: '客户列表',
                            link: '/customer/customerList'
                        },
                        {
                            key: 'customerProjectList',
                            name: '客户项目列表',
                            link: '/customer/customerProjectList'
                        },
                    ]
                },
                {
                    key: 'system',
                    children: [
                        {
                            key: 'menuConfig',
                            name: '菜单管理',
                            link: '/system/menuConfig'
                        },
                        {
                            key: 'systemRole',
                            name: '系统角色',
                            link: '/system/systemRole'
                        },
                        {
                            key: 'powerConfig',
                            name: '权限配置',
                            link: '/system/powerConfig'
                        },
                        {
                            key: 'userManger',
                            name: '用户管理',
                            link: '/system/userManger'
                        },
                    ]
                },
            ],
            sideMenus: [],
            topNavCurrent: '',
            sideMenusCurrent: '',
        };
    }

    componentDidMount() {
        let pathName = this.props.history.location.pathname;
        let allMenus = this.state.allMenus;
        let sideMenus = [];
        let topNavCurrent = allMenus[0].key;
        let sideMenusCurrent = '';
        if (pathName !== '/') {
            let arr = pathName.split('/');
            pathName = arr[1];
            for (let i = 0; i < allMenus.length; i++) {
                if (allMenus[i].key === pathName) {
                    topNavCurrent = allMenus[i].key;
                    sideMenus = allMenus[i].children;
                    break;
                }
            }
            if(arr[2]){
                for (let i = 0; i < sideMenus.length; i++) {
                    if(sideMenus[i].key===arr[2]){
                        sideMenusCurrent = sideMenus[i].key;
                        break;
                    }
                }
            }else {
                sideMenusCurrent = sideMenus[0].key;
            }
        } else {
            sideMenus = allMenus[0].children;
            sideMenusCurrent = sideMenus[0].key;
        }
        this.setState({
            sideMenus: sideMenus,
            topNavCurrent: topNavCurrent,
            sideMenusCurrent: sideMenusCurrent,
        });
    }

    switchSideMenu = (key) => {
        this.setState(
            {
                topNavCurrent: key
            }
        );
        let sideMenus = [];
        for (let i = 0; i < this.state.allMenus.length; i++) {
            if (this.state.allMenus[i].key === key) {
                sideMenus = this.state.allMenus[i].children;
                this.setState({
                    sideMenus: sideMenus,
                    sideMenusCurrent: sideMenus[0].key,
                });
                break;
            }
        }
        this.props.history.push(sideMenus[0].link);
    };
    handleSideMenusClick = (key) => {
        this.setState(
            {
                sideMenusCurrent: key
            }
        )
    };

    render() {
        return (
            <Fragment>
                <TopNav switchSideMenu={this.switchSideMenu} current={this.state.topNavCurrent}/>
                <div className="content-box">
                    <SideMenu sideMenus={this.state.sideMenus} current={this.state.sideMenusCurrent}
                              handleClick={this.handleSideMenusClick}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/customer" component={Customer}/>
                        <Route path="/system" component={System}/>
                    </Switch>
                </div>
            </Fragment>
        );
    }
}

export default Content;