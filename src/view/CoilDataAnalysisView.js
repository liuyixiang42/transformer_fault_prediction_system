import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Button, Col, Row } from 'antd';
import { LineChartOutlined, BarChartOutlined, DotChartOutlined } from '@ant-design/icons';
import { history } from "../utils/history";
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Line } from '@antv/g2plot';

const { Dragger } = Upload;
const { Header, Content } = Layout;

class CoilDataAnalysisView extends React.Component {

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
  }

  render() {


    const data = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 }
    ];
    // 创建折线图实例
    const linePlot = new Line(document.getElementById('line-container'), {
      data,
      xField: 'year',
      yField: 'value',
      smooth: true,
      annotations: [
        {
          type: 'text',
          position: ['1999', 13],
          content: '1999 年',
          offsetY: -15
        }
      ]
    });
    // 渲染折线图
    linePlot.render();


    return (
      <Layout className="layout">
        <Header>
          <HeaderInfo />
        </Header>
        <Layout style={{ margin: "0 auto" }}>
          <br /><br />
          <Row>

            <Dragger {...this.props} style={{ width: "1000px", height: "500px" }}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                banned files.
              </p>
            </Dragger>

          </Row>
          <Row>

            <div id="line-container"></div>
          </Row>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(CoilDataAnalysisView);
