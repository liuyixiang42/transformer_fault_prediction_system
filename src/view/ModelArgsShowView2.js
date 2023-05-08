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

class ModelArgsShowView2 extends React.Component {

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
            { title: '最大迭代次数', dataIndex: 'a', key: 'a' },
            { title: '聚类中心数量', dataIndex: 'b', key: 'b' },
            { title: '收敛阈值', dataIndex: 'c', key: 'c' },
            { title: '初始聚类中心选择方式', dataIndex: 'd', key: 'd' },
        ];
        const data1 = [
            {
                a: 100,
                b: 5,
                c: 1e-3,
                d: 'kmeans',
            },
        ]

        const columns2 = [
            { title: 'ID', dataIndex: 'id', key: 'id' },
            { title: '参数修改', dataIndex: 'name', key: 'name' },
        ];
        const data2 = [
            { id: 1, name: '最大迭代次数：300' },
            { id: 2, name: '初始聚类中心选择方式：均匀采样' },
            { id: 3, name: '收敛阈值：0.005' }
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
                                油气故障数据聚类模型
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
                        最大迭代次数<br />
                            <Input style={{ width: "200px" }} defaultValue={100} placeholder="最大迭代次数" />
                            <br />聚类中心数量<br />
                            <Input style={{ width: "200px" }} defaultValue={5} placeholder="聚类中心数量" />

                            <br />收敛阈值<br />
                            <Input style={{ width: "200px" }} defaultValue={1e-3} placeholder="收敛阈值" />
                        </Col>
                        <Col span={12}>
                        初始聚类中心选择方式<br />
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={1}>kmeans</Radio>
                                <Radio value={2}>随机选择</Radio>
                                <Radio value={3}>均匀采样</Radio>
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

export default withRouter(ModelArgsShowView2);
