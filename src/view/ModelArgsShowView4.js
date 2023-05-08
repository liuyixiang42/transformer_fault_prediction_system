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
import { TrendChart } from '../components/TrendChart'
import ReactDOM from 'react-dom';

const { Header, Content } = Layout;
const { Title } = Typography;

class ModelArgsShowView4 extends React.Component {

    

    render() {
        const columns1 = [
            { title: '氢气噪声因子', dataIndex: 'a', key: 'a' },
            { title: '一氧化碳噪声因子', dataIndex: 'b', key: 'b' },
            { title: '甲烷噪声因子', dataIndex: 'c', key: 'c' },
            { title: '乙烯噪声因子', dataIndex: 'd', key: 'd' },
            { title: '乙炔噪声因子', dataIndex: 'e', key: 'e' },
            { title: '总烃噪声因子', dataIndex: 'f', key: 'f' },
            { title: '总可燃气体噪声因子', dataIndex: 'g', key: 'g' },
            { title: '油温噪声因子', dataIndex: 'h', key: 'h' },
        ];
        const data1 = [
            {
                a: 1,
                b: 1,
                c: 0.8,
                d: 0.2,
                e: 0,
                f: 1.5,
                g: 1.6,
                h: 1.1,
            },
        ]

        const columns2 = [
            { title: 'ID', dataIndex: 'id', key: 'id' },
            { title: '参数修改', dataIndex: 'name', key: 'name' },
        ];
        const data2 = [
            { id: 1, name: '乙烯噪声因子：0.4' },
            { id: 2, name: '氢气噪声因子：1.5，一氧化碳噪声因子：1.5' },
            { id: 3, name: '油温噪声因子：1.2' }
        ]

        const columns3 = [
            { title: 'loss', dataIndex: 'a', key: 'a' },
            { title: '测试集准确率', dataIndex: 'b', key: 'b' },
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
                                故障数据增强算法
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
                            模型参数调整
                        </Title>
                        <Col span={12}>
                            氢气噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1} placeholder="氢气噪声因子" />

                            <br />一氧化碳噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1} placeholder="一氧化碳噪声因子" />
                            <br />甲烷噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={0.8} placeholder="甲烷噪声因子" />
                            <br />乙烯噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={0.2} placeholder="乙烯噪声因子" />
                        </Col>
                        <Col span={12}>
                            乙炔噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={0} placeholder="乙炔噪声因子" />
                            <br />总烃噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1.5} placeholder="总烃噪声因子" />
                            <br />总可燃气体噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1.6} placeholder="总可燃气体噪声因子" />
                            <br />油温噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1.1} placeholder="油温噪声因子" />
                        </Col>
                    </Col>
                    </Row>
                    <br />
                    <Row>
                    <Col>
                    <Button type="primary" >提交调整</Button>,
                    </Col>
                    </Row>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(ModelArgsShowView4);
