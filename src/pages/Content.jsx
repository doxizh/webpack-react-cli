import React, {Component, Fragment} from 'react';
import TopNav from './TopNav'
import SideMenu from './SideMenu'
import ContentRouter from "../router/contentRouter"
import '../assets/css/content.scss'

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
            current: ''
        };
    }

    componentDidMount() {
        let sideMenus=this.state.allMenus[0].children;
        this.setState({
            sideMenus: sideMenus,
            current: sideMenus[0].key
        });
        this.props.history.push(sideMenus[0].link);
    }

    switchSideMenu = (key) => {
        let sideMenus=[];
        for (let i = 0; i < this.state.allMenus.length; i++) {
            if (this.state.allMenus[i].key === key) {
                sideMenus=this.state.allMenus[i].children;
                this.setState({
                    sideMenus: sideMenus,
                    current: sideMenus[0].key,
                });
                break;
            }
        }
        this.props.history.push(sideMenus[0].link);
    };

    handleClick = (key) => {
        this.setState(
            {
                current:key
            }
        )
    };

    render() {
        return (
            <Fragment>
                <TopNav switchSideMenu={this.switchSideMenu}/>
                <div className="content-box">
                    <SideMenu sideMenus={this.state.sideMenus} current={this.state.current}
                              handleClick={this.handleClick}/>
                    <ContentRouter/>
                </div>
            </Fragment>
        );
    }
}

export default Content;