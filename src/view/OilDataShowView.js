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

class OilDataShowView extends React.Component {


    render() {
        const columns = [
            {
                title: '测量日期',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: '氢气',
                dataIndex: 'a',
                key: 'a',
            },
            {
                title: '一氧化碳',
                dataIndex: 'b',
                key: 'b',
            },
            {
                title: '甲烷',
                dataIndex: 'c',
                key: 'c',
            },
            {
                title: '乙烯',
                dataIndex: 'd',
                key: 'd',
            },
            {
                title: '乙炔',
                dataIndex: 'e',
                key: 'e',
            },
            {
                title: '乙烷',
                dataIndex: 'f',
                key: 'f',
            },
            {
                title: '总烃',
                dataIndex: 'g',
                key: 'g',
            },
            {
                title: '总可燃气体',
                dataIndex: 'h',
                key: 'h',
            },
            {
                title: '油温',
                dataIndex: 'i',
                key: 'i',
            },
        ];
        const data = [
            {
                date: '2012/6/1',
                a: '7.1',
                b: '6.5',
                c: '5.5',
                d: '1',
                e: '0',
                f: '3.6',
                g: '10.2',
                h: '24.4',
                i: '61',
            },
            {
                date: '2012/6/2',
                a: '7.2',
                b: '6.4',
                c: '5.4',
                d: '1',
                e: '0',
                f: '3.5',
                g: '10.1',
                h: '24.3',
                i: '62',
            },
            {
                date: '2012/6/3',
                a: '7.2',
                b: '6.5',
                c: '5.6',
                d: '1',
                e: '0',
                f: '3.2',
                g: '10.3',
                h: '24.4',
                i: '61.1',
            },
            {
                date: '2012/6/4',
                a: '7.4',
                b: '6.6',
                c: '5.7',
                d: '1',
                e: '0',
                f: '3.2',
                g: '10.1',
                h: '24.5',
                i: '62',
            },
            {
                date: '2012/6/5',
                a: '7.8',
                b: '6.6',
                c: '5.4',
                d: '1',
                e: '0',
                f: '3.3',
                g: '10.2',
                h: '24.1',
                i: '63',
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
                                油气数据
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

export default withRouter(OilDataShowView);
