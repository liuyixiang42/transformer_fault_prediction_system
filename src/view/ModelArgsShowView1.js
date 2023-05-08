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
            data: [
                { id: 1, name: '张三', age: 18 },
                { id: 2, name: '李四', age: 20 },
                { id: 3, name: '王五', age: 22 }
            ]
        };
    }



    render() {
        // columns = [
        //     {
        //         title: '实例',
        //         dataIndex: 'a',
        //         key: 'a',
        //     },
        // ]

        const { data } = this.state;
        const columns = [
            { title: 'ID', dataIndex: 'id', key: 'id' },
            { title: '姓名', dataIndex: 'name', key: 'name' },
            { title: '年龄', dataIndex: 'age', key: 'age' }
        ];

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
                        <Title level={4}>
                            默认参数
                        </Title>
                        
                    </Row>
                    <Row>
                        <Col>

                            <TableWithRadio columns={columns} data={data} />
                        </Col>
                    </Row>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(ModelArgsShowView1);
