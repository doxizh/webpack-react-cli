import React, {Component} from 'react';
import Router from './router/index';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillUnmount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <ConfigProvider locale={zhCN}>
                <Router/>
            </ConfigProvider>
        );
    }
}

export default App;