import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Row, Typography, message, Upload, Col } from 'antd';
import { Button } from 'antd';
import myImage from '../assets/model.jpg';
import "../css/login.css";
import { history } from "../utils/history";


const { Dragger } = Upload;
const { Header, Content } = Layout;
const { Title } = Typography;

class DataShowView extends React.Component {



    componentDidMount() {
        let user = localStorage.getItem("user");
        this.setState({ user: user });
    }

    coilOnClick() {
        history.push("/coil");
    }
    terminalOnClick() {
        history.push("/terminal");
    }
    insulationOnClick() {
        history.push("/insulation");
    }
    coreOnClick() {
        history.push("/core");
    }
    oilOnClick() {
        history.push("/oil");
    }
    coolOnClick() {
        history.push("/cool");
    }

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
                                变压器模型及数据展示
                            </Title>
                        </Col>
                    </Row>
                    <Row>
                        <img src={myImage} style={{ width: '100%', height: '100%' }}>
                        </img>
                    </Row>
                    <Row style={{ display: 'flex', margin: "0 auto" }} gutter={[24, 24]}>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}} onClick={this.coilOnClick}>
                            线圈
                        </Button>
                        </Col>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}} onClick={this.terminalOnClick}>
                        终端子
                        </Button>
                        </Col>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}}  onClick={this.insulationOnClick}>
                        绝缘系统
                        </Button>
                        </Col>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}}  onClick={this.coreOnClick}>
                        铁芯
                        </Button>
                        </Col>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}}  onClick={this.oilOnClick}>
                        油箱
                        </Button>
                        </Col>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}}  onClick={this.coolOnClick}>
                        冷却系统
                        </Button>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', margin: "0 auto" }} gutter={[24, 24]}>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}}>
                            线圈数据展示
                        </Button>
                        </Col>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}}>
                        油气数据展示
                        </Button>
                        </Col>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}}>
                        铁芯数据展示
                        </Button>
                        </Col>
                        <Col>
                        <Button type="primary" style={{backgroundColor: '#1890ff'}}>
                        冷却水数据展示
                        </Button>
                        </Col>
                    </Row>
                    
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(DataShowView);
