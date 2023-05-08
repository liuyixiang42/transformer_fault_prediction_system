import React from "react";
import { useState } from 'react';
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Button, Col, Row, Typography, Input, Radio, Table } from 'antd';
import { LineChartOutlined, BarChartOutlined, DotChartOutlined, PieChartOutlined, SlidersOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { history } from "../utils/history";
import { Column } from "@antv/g2plot";
import TableWithRadio from './TableWithRadio';

const { Header, Content } = Layout;
const { Title } = Typography;

class ModelArgsShowView1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        };
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };


    render() {
        const columns1 = [
            { title: '训练迭代次数', dataIndex: 'a', key: 'a' },
            { title: 'batch大小', dataIndex: 'b', key: 'b' },
            { title: '学习率', dataIndex: 'c', key: 'c' },
            { title: '多头注意力head数量', dataIndex: 'd', key: 'd' },
            { title: 'Drop层的比例', dataIndex: 'e', key: 'e' },
            { title: '前馈网络中间层的维度大小', dataIndex: 'f', key: 'f' },
            { title: '激活函数', dataIndex: 'g', key: 'g' },
        ];
        const data1 = [
            {
                a: 250,
                b: 128,
                c: 0.001,
                d: 9,
                e: 0.1,
                f: 16,
                g: 'sigmoid',
            },
        ]

        const columns2 = [
            { title: 'ID', dataIndex: 'id', key: 'id' },
            { title: '参数修改', dataIndex: 'name', key: 'name' },
        ];
        const data2 = [
            { id: 1, name: '训练迭代次数：500' },
            { id: 2, name: '训练迭代次数：500，Drop层的比例：0.2' },
            { id: 3, name: '激活函数：tanh' }
        ]

        const columns3 = [
            { title: 'loss', dataIndex: 'a', key: 'a' },
            { title: '测试集准确率', dataIndex: 'b', key: 'b' },
            { title: '召回率', dataIndex: 'c', key: 'c' },
            { title: 'AUC-ROC', dataIndex: 'd', key: 'd' },
        ]
        





        return (
            <Layout className="layout">
                <Header>
                    <HeaderInfo />
                </Header>
                <Layout style={{ margin: "0 auto" }}>
                    <br /><br />
                    <Row>
                        <Col span={24}>
                            <Title>
                                油气数据异常检测模型
                            </Title>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Title level={4}>
                            默认参数
                        </Title>
                        <Table columns={columns1} dataSource={data1} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Title level={4}>
                            模型实例
                        </Title>
                            <TableWithRadio columns={columns2} data={data2} />
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                    <Title level={4}>
                            模型重训
                        </Title>
                        <Col span={12}>
                            训练迭代次数<br />
                            <Input style={{ width: "200px" }} defaultValue={250} placeholder="训练迭代次数" />

                            <br />batch大小<br />
                            <Input style={{ width: "200px" }} defaultValue={128} placeholder="batch大小" />
                            <br />学习率<br />
                            <Input style={{ width: "200px" }} defaultValue={0.001} placeholder="学习率" />
                            <br />多头注意力head数量<br />
                            <Input style={{ width: "200px" }} defaultValue={9} placeholder="多头注意力head数量" />
                        </Col>
                        <Col span={12}>
                            Drop层的比例<br />
                            <Input style={{ width: "200px" }} defaultValue={0.1} placeholder="Drop层的比例" />
                            <br />前馈网络中间层的维度大小<br />
                            <Input style={{ width: "200px" }} defaultValue={16} placeholder="前馈网络中间层的维度大小" />
                            <br />激活函数<br />
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={1}>sigmoid</Radio>
                                <Radio value={2}>tanh</Radio>
                                <Radio value={3}>ReLU</Radio>
                            </Radio.Group>
                        </Col>
                    </Col>
                    </Row>
                    <br />
                    <Row>
                    <Col>
                    <Button type="primary" >提交重训</Button>,
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Title level={4}>
                            重训结果
                        </Title>
                        <Table columns={columns3} />
                        </Col>
                    </Row>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(ModelArgsShowView1);
