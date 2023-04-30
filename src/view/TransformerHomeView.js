import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Button, Col, Row } from 'antd';
import {LineChartOutlined, BarChartOutlined, DotChartOutlined} from '@ant-design/icons';

const { Header, Content } = Layout;

class TransformerHomeView extends React.Component {
  componentDidMount() {
    let user = localStorage.getItem("user");
    this.setState({ user: user });
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <HeaderInfo />
        </Header>
        <Layout style={{margin: "0 auto"}}>
            {/* <Space size={16}> */}
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <Button style={{width: "400px", height: "200px", fontSize: "30px"}} shape="round">
                            <LineChartOutlined />
                            <strong>变压器线圈数据故障分析</strong>
                            <p style={{fontSize: "20px"}}>
                                <br />
                                根据变压器的线圈时序数据分析变压器
                                <br />
                                可能存在的故障类型
                            </p>
                        </Button>
                    </Col>
                    <Col span={8}>
                        <Button style={{width: "400px", height: "200px", fontSize: "30px"}} shape="round">
                            <LineChartOutlined />
                            <strong>变压器油气数据故障分析</strong>
                            <p style={{fontSize: "20px"}}>
                                <br />
                                根据变压器的油气时序数据分析变压器
                                <br />
                                可能存在的故障类型
                            </p>
                        </Button>
                    </Col>
                    <Col span={8}>
                        <Button style={{width: "400px", height: "200px", fontSize: "30px"}} shape="round">
                            <BarChartOutlined />
                            <strong>变压器时序数据预测</strong>
                            <p style={{fontSize: "20px"}}>
                                <br />
                                根据变压器的时序数据预测变压器
                                <br />
                                未来的运行状态
                            </p>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={8}>
                        <Button style={{width: "400px", height: "200px", fontSize: "30px"}} shape="round">
                            <DotChartOutlined />
                            <strong>变压器故障数据增强</strong>
                            <p style={{fontSize: "20px"}}>
                                <br />
                                根据变压器的故障时序数据样本
                                <br />
                                生成相同故障类型的不同时序数据
                            </p>
                        </Button>
                    </Col>
                </Row>
            {/* </Space> */}
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(TransformerHomeView);
