import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Row, Typography, message, Upload, Col, Button } from 'antd';
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
                title: '氢气/ppm',
                dataIndex: 'a',
                key: 'a',
            },
            {
                title: '一氧化碳/ppm',
                dataIndex: 'b',
                key: 'b',
            },
            {
                title: '甲烷/ppm',
                dataIndex: 'c',
                key: 'c',
            },
            {
                title: '乙烯/ppm',
                dataIndex: 'd',
                key: 'd',
            },
            {
                title: '乙炔/ppm',
                dataIndex: 'e',
                key: 'e',
            },
            {
                title: '乙烷/ppm',
                dataIndex: 'f',
                key: 'f',
            },
            {
                title: '总烃/ppm',
                dataIndex: 'g',
                key: 'g',
            },
            {
                title: '总可燃气体/ppm',
                dataIndex: 'h',
                key: 'h',
            },
            {
                title: '油温/℃',
                dataIndex: 'i',
                key: 'i',
            },
        ];
        const data = [
            {
                date: '2022/6/1',
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
                date: '2022/6/2',
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
                date: '2022/6/3',
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
                date: '2022/6/4',
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
                date: '2022/6/5',
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
            {
                date: '2022/6/6',
                a: '7.3',
                b: '6.4',
                c: '5.6',
                d: '1',
                e: '0',
                f: '3.4',
                g: '10.5',
                h: '24.6',
                i: '67',
            },
            {
                date: '2022/6/7',
                a: '7.7',
                b: '6.6',
                c: '5.4',
                d: '1',
                e: '0',
                f: '3.3',
                g: '10.6',
                h: '24.7',
                i: '67',
            },
            {
                date: '2022/6/8',
                a: '7.5',
                b: '6.2',
                c: '5.1',
                d: '1',
                e: '0',
                f: '3.6',
                g: '10.3',
                h: '24.3',
                i: '62',
            },
            {
                date: '2022/6/9',
                a: '7.3',
                b: '6.1',
                c: '5.5',
                d: '1',
                e: '0',
                f: '3.7',
                g: '10.3',
                h: '24.5',
                i: '66',
            },
            {
                date: '2022/6/10',
                a: '7.5',
                b: '6.5',
                c: '5.7',
                d: '1',
                e: '0',
                f: '3.8',
                g: '10.3',
                h: '24.2',
                i: '61',
            },
            {
                date: '2022/6/11',
                a: '7.1',
                b: '6.2',
                c: '5.4',
                d: '1',
                e: '0',
                f: '3.2',
                g: '10.6',
                h: '24.3',
                i: '62',
            },
            {
                date: '2022/6/12',
                a: '7.2',
                b: '6.5',
                c: '5.7',
                d: '1',
                e: '0',
                f: '3.3',
                g: '10.2',
                h: '24.7',
                i: '67',
            },
            {
                date: '2022/6/13',
                a: '7.5',
                b: '6.2',
                c: '5.2',
                d: '1',
                e: '0',
                f: '3.4',
                g: '10.1',
                h: '24.2',
                i: '62',
            },
            {
                date: '2022/6/14',
                a: '7.4',
                b: '6.2',
                c: '5.6',
                d: '1',
                e: '0',
                f: '3.4',
                g: '10.5',
                h: '24.2',
                i: '61',
            },
            {
                date: '2022/6/15',
                a: '7.6',
                b: '6.4',
                c: '5.6',
                d: '1',
                e: '0',
                f: '3.7',
                g: '10.4',
                h: '24.3',
                i: '62',
            },
            {
                date: '2022/6/16',
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
                date: '2022/6/17',
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
                date: '2022/6/18',
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
                date: '2022/6/19',
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
                date: '2022/6/20',
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
            {
                date: '2022/6/21',
                a: '7.3',
                b: '6.4',
                c: '5.6',
                d: '1',
                e: '0',
                f: '3.4',
                g: '10.5',
                h: '24.6',
                i: '67',
            },
            {
                date: '2022/6/22',
                a: '7.7',
                b: '6.6',
                c: '5.4',
                d: '1',
                e: '0',
                f: '3.3',
                g: '10.6',
                h: '24.7',
                i: '67',
            },
            {
                date: '2022/6/23',
                a: '7.5',
                b: '6.2',
                c: '5.1',
                d: '1',
                e: '0',
                f: '3.6',
                g: '10.3',
                h: '24.3',
                i: '62',
            },
            {
                date: '2022/6/24',
                a: '7.3',
                b: '6.1',
                c: '5.5',
                d: '1',
                e: '0',
                f: '3.7',
                g: '10.3',
                h: '24.5',
                i: '66',
            },
            {
                date: '2022/6/25',
                a: '7.5',
                b: '6.5',
                c: '5.7',
                d: '1',
                e: '0',
                f: '3.8',
                g: '10.3',
                h: '24.2',
                i: '61',
            },
            {
                date: '2022/6/26',
                a: '7.1',
                b: '6.2',
                c: '5.4',
                d: '1',
                e: '0',
                f: '3.2',
                g: '10.6',
                h: '24.3',
                i: '62',
            },
            {
                date: '2022/6/27',
                a: '7.2',
                b: '6.5',
                c: '5.7',
                d: '1',
                e: '0',
                f: '3.3',
                g: '10.2',
                h: '24.7',
                i: '67',
            },
            {
                date: '2022/6/28',
                a: '7.5',
                b: '6.2',
                c: '5.2',
                d: '1',
                e: '0',
                f: '3.4',
                g: '10.1',
                h: '24.2',
                i: '62',
            },
            {
                date: '2022/6/29',
                a: '7.4',
                b: '6.2',
                c: '5.6',
                d: '1',
                e: '0',
                f: '3.4',
                g: '10.5',
                h: '24.2',
                i: '61',
            },
            {
                date: '2022/6/30',
                a: '7.6',
                b: '6.4',
                c: '5.6',
                d: '1',
                e: '0',
                f: '3.7',
                g: '10.4',
                h: '24.3',
                i: '62',
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
                        <Col>
                        <Button type="primary" style={{ backgroundColor: '#1890ff' }} >
                                数据上传
                            </Button>
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
