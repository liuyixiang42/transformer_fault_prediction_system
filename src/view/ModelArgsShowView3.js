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

class ModelArgsShowView3 extends React.Component {

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
            { title: '神经元数量', dataIndex: 'a', key: 'a' },
            { title: '初始学习率', dataIndex: 'b', key: 'b' },
            { title: '自适应学习率的衰减率', dataIndex: 'c', key: 'c' },
            { title: 'Drop层的比例', dataIndex: 'd', key: 'd' },
            { title: '训练迭代次数', dataIndex: 'e', key: 'e' },
            { title: 'batch大小', dataIndex: 'f', key: 'f' },
            { title: '激活函数', dataIndex: 'g', key: 'g' },
        ];
        const data1 = [
            {
                a: 64,
                b: 0.001,
                c: 0.9,
                d: 0.2,
                e: 100,
                f: 32,
                g: 'sigmoid'
            },
        ]

        const columns2 = [
            { title: 'ID', dataIndex: 'id', key: 'id' },
            { title: '参数修改', dataIndex: 'name', key: 'name' },
        ];
        const data2 = [
            { id: 1, name: '初始学习率：0.005' },
            { id: 2, name: '自适应学习率的衰减率：0.7，Drop层的比例：0.3' },
            { id: 3, name: '训练迭代次数：300' }
        ]

        const columns3 = [
            { title: 'loss', dataIndex: 'a', key: 'a' },
            { title: 'Dunn指数', dataIndex: 'b', key: 'b' },
            { title: 'CH指数', dataIndex: 'c', key: 'c' },
            { title: 'AIC/BIC', dataIndex: 'd', key: 'd' },
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
                                线圈数据分类模型
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
                            神经元数量<br />
                            <Input style={{ width: "200px" }} defaultValue={64} placeholder="神经元数量" />

                            <br />初始学习率<br />
                            <Input style={{ width: "200px" }} defaultValue={0.001} placeholder="初始学习率" />
                            <br />自适应学习率的衰减率<br />
                            <Input style={{ width: "200px" }} defaultValue={0.9} placeholder="自适应学习率的衰减率" />
                            <br />Drop层的比例<br />
                            <Input style={{ width: "200px" }} defaultValue={0.2} placeholder="Drop层的比例" />
                        </Col>
                        <Col span={12}>
                            训练迭代次数<br />
                            <Input style={{ width: "200px" }} defaultValue={100} placeholder="训练迭代次数" />
                            <br />batch大小<br />
                            <Input style={{ width: "200px" }} defaultValue={32} placeholder="batch大小" />
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

export default withRouter(ModelArgsShowView3);
