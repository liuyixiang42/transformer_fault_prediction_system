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
        const data = [];
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
