import React, {Component} from 'react';
import {Form, Row, Col, Input, Button, Icon, DatePicker, Table, Pagination} from 'antd';

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
        const dataSource = [
            {
                key: '1',
                name: '测试1',
                code: '0001',
                industry:'测试1',
                status: 1,
            },
            {
                key: '2',
                name: '测试2',
                code: '0002',
                industry:'测试2',
                status: 2,
            },
        ];
        const columns = [
            {
                title: '客户名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '客户代码',
                dataIndex: 'code',
                key: 'code',
            },
            {
                title: '行业',
                dataIndex: 'industry',
                key: 'industry',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
            },
        ];
        return (
            <div className="customer-list table-page">
                <div className="control-bar">
                    <Form>
                        <Row gutter={24}>
                            <Col span={8} xxl={6}>
                                <Form.Item className={'label-5'} label="客户代码">
                                    <Input placeholder="客户代码"/>
                                </Form.Item>
                            </Col>
                            <Col span={8} xxl={6}>
                                <Form.Item className={'label-5'} label="客户名称">
                                    <Input placeholder="客户名称"/>
                                </Form.Item>
                            </Col>
                            <Col span={8} xxl={6}>
                                <Form.Item className={'label-2'} label="行业">
                                    <Input placeholder="行业"/>
                                </Form.Item>
                            </Col>
                            <Col span={8} xxl={6}>
                                <Form.Item className={'label-5'} label="客户状态">
                                    <Input placeholder="客户状态"/>
                                </Form.Item>
                            </Col>
                            <Col span={8} xxl={6}>
                                <Form.Item className={'label-5'} label="创建时间">
                                    <RangePicker onChange={this.onCreateDateChange} format={'YYYY-MM-DD'}/>
                                </Form.Item>
                            </Col>
                            <Col span={8} xxl={{span: 6, offset: 12}}>
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
                <div className={'line-divider'}/>
                <div className={'table-box'}>
                    <Table dataSource={dataSource} columns={columns} pagination={false}></Table>
                </div>
                <div className={'pagination-box'}>
                    <Pagination size="small" total={50} showSizeChanger showQuickJumper />
                </div>
            </div>
        );
    }
}

export default CustomerList;