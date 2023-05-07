import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Row, Typography, message, Upload, Col } from 'antd';
import { Button } from 'antd';
import myImage from '../assets/terminal.jpg';
import "../css/login.css";
import { history } from "../utils/history";


const { Dragger } = Upload;
const { Header, Content } = Layout;
const { Title } = Typography;

class TerminalShowView extends React.Component {


    render() {

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
                                终端子
                            </Title>
                        </Col>
                    </Row>
                    <Row>
                        <img src={myImage} style={{ width: '100%', height: '100%' }}>
                        </img>
                    </Row>
                    
                    
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(TerminalShowView);
