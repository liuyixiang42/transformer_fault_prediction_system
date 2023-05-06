import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Button, Col, Row } from 'antd';
import { LineChartOutlined, BarChartOutlined, DotChartOutlined, PieChartOutlined, SlidersOutlined, PlusSquareOutlined } from '@ant-design/icons';
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

  dataShowOnClick() {
    history.push("/dataShow")
  }

  modelShowOnClick() {
    history.push("/modelShow")
  }

  modelUploadOnClick() {
    history.push("/modelUpload")
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <HeaderInfo />
        </Header>
        <Layout style={{ margin: "0 auto" }}>
          <br /><br />
          <Row gutter={[24, 24]}>

            <Col span={8}>
              <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" onClick={this.dataShowOnClick}>
                <PieChartOutlined />
                <strong>变压器模型及数据展示</strong>
                <p style={{ fontSize: "20px" }}>
                  <br />
                  展示变压器物理结构模型以及对应
                  <br />
                  时序数据
                </p>
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" onClick={this.modelShowOnClick}>
                <SlidersOutlined />
                <strong>算法模型展示及参数调整</strong>

                <p style={{ fontSize: "20px" }}>
                  <br />
                  展示系统算法模型和可调节参数
                </p>
              </Button>
            </Col>

            <Col span={8}>
              <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" onClick={this.coilDataAnalysisOnClick}>
                <LineChartOutlined />
                <strong>变压器线圈数据故障分析</strong>
                <p style={{ fontSize: "20px" }}>
                  <br />
                  根据变压器的线圈时序数据分析变压器
                  <br />
                  可能存在的故障类型
                </p>
              </Button>
            </Col>
          </Row>
          <br /><br />
          <Row>
            <Col span={8}>
              <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" onClick={this.oilGasDataAnalysisOnClick}>
                <LineChartOutlined />
                <strong>变压器油气数据故障分析</strong>
                <p style={{ fontSize: "20px" }}>
                  <br />
                  根据变压器的油气时序数据分析变压器
                  <br />
                  可能存在的故障类型
                </p>
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" onClick={this.dataPredictionOnClick}>
                <BarChartOutlined />
                <strong>变压器时序数据预测<br />及故障分析</strong>

                <p style={{ fontSize: "20px" }}>
                  根据变压器的时序数据预测变压器
                  <br />
                  未来的运行状态
                </p>
              </Button>
            </Col>
            <Col span={8}>
              <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" onClick={this.faultDataAugmentationOnClick}>
                <DotChartOutlined />
                <strong>变压器故障数据增强</strong>
                <p style={{ fontSize: "20px" }}>
                  <br />
                  根据变压器的故障时序数据样本
                  <br />
                  生成相同故障类型的不同时序数据
                </p>
              </Button>
            </Col>
          </Row>
          <br /><br />
          <Row>
            <Col span={8}>
              <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} type="dashed" shape="round" onClick={this.modelUploadOnClick}>
              <PlusSquareOutlined style={{fontSize: "60px"}} />
              <p style={{ fontSize: "20px" }}>
                  <br />
                  支持向系统上传新的数据处理模型
                  
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
