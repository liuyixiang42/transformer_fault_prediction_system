import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Button, Col, Row } from 'antd';
import {LineChartOutlined, BarChartOutlined, DotChartOutlined} from '@ant-design/icons';
import { history } from "../utils/history";

const { Header, Content } = Layout;

class TransformerHomeView extends React.Component {
  componentDidMount() {
    let user = localStorage.getItem("user");
    this.setState({ user: user });
  }

  coilDataAnalysisOnClick() {
    history.push("/coilDataAnalysis");
  }

  oilGasDataAnalysisOnClick() {
    history.push("/oilGasDataAnalysis");
  }

  dataPredictionOnClick() {
    history.push("/dataPrediction");
  }

  faultDataAugmentationOnClick() {
    history.push("/faultDataAugmentation")
  }



  render() {
    return (
      <Layout className="layout">
        <Header>
          <HeaderInfo />
        </Header>
        <Layout style={{margin: "0 auto"}}>
            <br /><br />
            <Row gutter={[24, 24]}>
                <Col span={8}>
                    <Button style={{width: "400px", height: "200px", fontSize: "30px"}} shape="round" onClick={this.coilDataAnalysisOnClick}>
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
                    <Button style={{width: "400px", height: "200px", fontSize: "30px"}} shape="round" onClick={this.oilGasDataAnalysisOnClick}>
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
                    <Button style={{width: "400px", height: "200px", fontSize: "30px"}} shape="round" onClick={this.dataPredictionOnClick}>
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
            <br /><br />
            <Row>
                <Col span={8}>
                    <Button style={{width: "400px", height: "200px", fontSize: "30px"}} shape="round" onClick={this.faultDataAugmentationOnClick}>
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
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(TransformerHomeView);
