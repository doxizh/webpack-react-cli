import React, {Component} from 'react';
import {Form, Row, Col, Input, Button, Icon, DatePicker} from 'antd';

const {RangePicker} = DatePicker;

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    onCreateDateChange = (date) => {
        console.log(date);
    };

    render() {
        return (
            <div className="customer-list">
                <div className="control-bar">
                    <Form>
                        <Row gutter={24}>
                            <Col span={6}>
                                <Form.Item className={'label-5'} label="客户代码">
                                    <Input placeholder="客户代码"/>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item className={'label-5'} label="客户名称">
                                    <Input placeholder="客户名称"/>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item className={'label-2'} label="行业">
                                    <Input placeholder="行业"/>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item className={'label-5'} label="客户状态">
                                    <Input placeholder="客户状态"/>
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item className={'label-5'} label="创建时间">
                                    <RangePicker onChange={this.onCreateDateChange} format={'YYYY-MM-DD'}/>
                                </Form.Item>
                            </Col>
                            <Col span={6} offset={12}>
                                <Form.Item>
                                    <div className={'btn-box'}>
                                        <Button type={'primary'}>查询</Button>
                                        <Button type={'default'}>重置</Button>
                                    </div>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default CustomerList;