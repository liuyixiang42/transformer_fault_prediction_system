import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Line } from '@antv/g2plot';
import ReactDOM from 'react-dom';
import * as _ from '@antv/util';
import { TrendChart } from '../components/TrendChart'
import { Row, Typography, message, Upload, Col, Button } from 'antd';
import { InboxOutlined, DownloadOutlined } from '@ant-design/icons';


const { Dragger } = Upload;
const { Header, Content } = Layout;
const { Title } = Typography;

class FaultDataAugmentationView extends React.Component {


  props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };



  componentDidMount() {
    let user = localStorage.getItem("user");
    this.setState({ user: user });

    ReactDOM.render(<TrendChart />, document.getElementById('container1'));
    ReactDOM.render(<TrendChart />, document.getElementById('container2'));
    ReactDOM.render(<TrendChart />, document.getElementById('container3'));
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
                变压器故障数据增强
              </Title>
            </Col>
          </Row>

          <Row>
            <Col>
              <Title level={4}>
                故障数据上传
              </Title>
              <Dragger {...this.props} style={{ width: "1000px", height: "500px" }}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">单击或拖动文件到此区域进行上传</p>
                <p className="ant-upload-hint">
                  支持单次或批量上传。支持xls,xlsx和csv文件。
                </p>
              </Dragger>
            </Col>
            <Button type="primary" shape="round" size="large">
            <DownloadOutlined />
              下载
            </Button>
          </Row>

          <Row>
            <Col>
              <Title level={4}>
                故障数据样例
              </Title>
              <div id="container1" />
            </Col>
          </Row>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Row>
            <Col>
              <Title level={4}>
                数据增强结果
              </Title>
              <div id="container2" />
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <div id="container3" />
            </Col>
          </Row>



        </Layout>
      </Layout>
    );
  }
}

export default withRouter(FaultDataAugmentationView);
