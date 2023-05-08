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

class CoolDataShowView extends React.Component {


    render() {
        const columns = [
            {
                title: '测量时间',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: '冷却水温/℃',
                dataIndex: 'a',
                key: 'a',
            },
            {
                title: '进水口水压/kPa',
                dataIndex: 'b',
                key: 'b',
            },
            {
                title: '排水管水压/kPa',
                dataIndex: 'c',
                key: 'c',
            },
            {
                title: '冷却水流量/L/s',
                dataIndex: 'd',
                key: 'd',
            }
        ];
        const data = [
            {
                date: '2022/7/1',
                a: '25.1',
                b: '0.07',
                c: '0.06',
                d: '415.65'
            },
            {
                date: '2022/7/2',
                a: '26.1',
                b: '0.1',
                c: '0.05',
                d: '414.55'
            },
            {
                date: '2022/7/3',
                a: '25.7',
                b: '0.05',
                c: '0.08',
                d: '417.45'
            },
            {
                date: '2022/7/4',
                a: '25.5',
                b: '0.06',
                c: '0.08',
                d: '415.53'
            },
            {
                date: '2022/7/5',
                a: '25.1',
                b: '0.07',
                c: '0.06',
                d: '415.62'
            },
            {
                date: '2022/7/6',
                a: '25.2',
                b: '0.04',
                c: '0.06',
                d: '415.65'
            },
            {
                date: '2022/7/7',
                a: '25.5',
                b: '0.07',
                c: '0.04',
                d: '415.66'
            },
            {
                date: '2022/7/8',
                a: '25.4',
                b: '0.06',
                c: '0.04',
                d: '415.63'
            },
            {
                date: '2022/7/9',
                a: '25.3',
                b: '0.06',
                c: '0.09',
                d: '425.65'
            },
            {
                date: '2022/7/10',
                a: '25.1',
                b: '0.07',
                c: '0.06',
                d: '415.34'
            },
            {
                date: '2022/7/11',
                a: '25.1',
                b: '0.03',
                c: '0.07',
                d: '413.35'
            },
            {
                date: '2022/7/12',
                a: '25.4',
                b: '0.04',
                c: '0.05',
                d: '445.66'
            },
            {
                date: '2022/7/13',
                a: '25.1',
                b: '0.17',
                c: '0.11',
                d: '416.65'
            },
            {
                date: '2022/7/14',
                a: '25.3',
                b: '0.07',
                c: '0.06',
                d: '415.65'
            },
            {
                date: '2022/7/15',
                a: '27.1',
                b: '0.07',
                c: '0.05',
                d: '415.65'
            },
            {
                date: '2022/7/16',
                a: '21.1',
                b: '0.04',
                c: '0.06',
                d: '415.76'
            },
            {
                date: '2022/7/17',
                a: '25.1',
                b: '0.07',
                c: '0.06',
                d: '415.34'
            },
            {
                date: '2022/7/18',
                a: '25.1',
                b: '0.07',
                c: '0.03',
                d: '415.66'
            },
            {
                date: '2022/7/19',
                a: '25.1',
                b: '0.04',
                c: '0.06',
                d: '415.88'
            },
            {
                date: '2022/7/20',
                a: '27.1',
                b: '0.03',
                c: '0.06',
                d: '415.64'
            },
            {
                date: '2022/7/21',
                a: '26.1',
                b: '0.07',
                c: '0.09',
                d: '415.65'
            },
            {
                date: '2022/7/22',
                a: '25.1',
                b: '0.07',
                c: '0.06',
                d: '415.34'
            },
            {
                date: '2022/7/23',
                a: '25.4',
                b: '0.05',
                c: '0.07',
                d: '415.45'
            },
            {
                date: '2022/7/24',
                a: '25.8',
                b: '0.07',
                c: '0.06',
                d: '445.65'
            },
            {
                date: '2022/7/25',
                a: '25.1',
                b: '0.07',
                c: '0.06',
                d: '413.65'
            },
            {
                date: '2022/7/26',
                a: '26.1',
                b: '0.08',
                c: '0.04',
                d: '416.65'
            },
            {
                date: '2022/7/27',
                a: '25.1',
                b: '0.08',
                c: '0.05',
                d: '415.29'
            },
            {
                date: '2022/7/28',
                a: '23.4',
                b: '0.17',
                c: '0.07',
                d: '415.65'
            },
            {
                date: '2022/7/29',
                a: '26.1',
                b: '0.07',
                c: '0.03',
                d: '415.62'
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
                                冷却水数据
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

export default withRouter(CoolDataShowView);
