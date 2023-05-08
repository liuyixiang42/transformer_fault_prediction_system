import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Row, Typography, message, Upload, Col } from 'antd';
import { Table } from 'antd';
import myImage from '../assets/coil.jpg';
import "../css/login.css";
import { history } from "../utils/history";


const { Dragger } = Upload;
const { Header, Content } = Layout;
const { Title } = Typography;

class CoreDataShowView extends React.Component {


    render() {
        const columns = [
            {
                title: '测量时间',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: '2倍接地电流',
                dataIndex: 'a',
                key: 'a',
            },
            {
                title: '3倍接地电流',
                dataIndex: 'b',
                key: 'b',
            },
            {
                title: '4倍接地电流',
                dataIndex: 'c',
                key: 'c',
            },
            {
                title: '脉冲个数',
                dataIndex: 'd',
                key: 'd',
            },
            {
                title: '脉冲主分布',
                dataIndex: 'e',
                key: 'e',
            },
        ];
        const data = [
            {
                date: '2023-03-01 15:04:20',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:04:40',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:05:00',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:05:20',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:05:40',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:06:00',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:06:20',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:06:40',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:07:00',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:07:20',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:07:40',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:08:00',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:08:20',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:08:40',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
            {
                date: '2023-03-01 15:09:00',
                a: '0',
                b: '0.2',
                c: '0',
                d: '0',
                e: '0'
            },
        ];
        return (
            <Layout className="layout">
                <Header>
                    <HeaderInfo />
                </Header>
                <Layout style={{ margin: "0 auto" }}>
                    <br /><br />
                    <Row>
                        <Col>
                            <Title>
                                铁芯数据
                            </Title>
                        </Col>
                    </Row>
                    <Row>
                        <Table columns={columns} dataSource={data}></Table>
                    </Row>


                </Layout>
            </Layout>
        );
    }
}

export default withRouter(CoreDataShowView);
