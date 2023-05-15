import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Row, Typography, message, Upload, Col, Button } from 'antd';
import { InboxOutlined, DownloadOutlined } from '@ant-design/icons';
import { Line, Pie } from '@antv/g2plot';
import { Space, Table, Tag } from 'antd';
const { Column } = Table;

const { Dragger } = Upload;
const { Header, Content } = Layout;
const { Title } = Typography;

class DataPredictionView extends React.Component {

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

  tableData = [
    {
      key: 1,
      type: "绝缘老化",
      num: 1,
    },
    {
      key: 2,
      type: "绕组故障",
      num: 1,
    },
    {
      key: 3,
      type: "绝缘击穿",
      num: 1,
    },
  ]


  componentDidMount() {
    let user = localStorage.getItem("user");
    this.setState({ user: user });


    const container = document.getElementById('container');
    if (container !== null) {
      const data = [
        { date: '2022-01-01', value: 7.4, type: '氢气' },
        { date: '2022-01-02', value: 7.6, type: '氢气' },
        { date: '2022-01-03', value: 7.2, type: '氢气' },
        { date: '2022-01-04', value: 7.2, type: '氢气' },
        { date: '2022-01-05', value: 7.8, type: '氢气' },
        { date: '2022-01-06', value: 8.1, type: '氢气' },
        { date: '2022-01-07', value: 7.2, type: '氢气' },
        { date: '2022-01-08', value: 7.9, type: '氢气' },
        { date: '2022-01-09', value: 8.2, type: '氢气' },

        { date: '2022-01-01', value: 7, type: '一氧化碳' },
        { date: '2022-01-02', value: 7.2, type: '一氧化碳' },
        { date: '2022-01-03', value: 7.1, type: '一氧化碳' },
        { date: '2022-01-04', value: 7.3, type: '一氧化碳' },
        { date: '2022-01-05', value: 8.1, type: '一氧化碳' },
        { date: '2022-01-06', value: 6.8, type: '一氧化碳' },
        { date: '2022-01-07', value: 7.2, type: '一氧化碳' },
        { date: '2022-01-08', value: 6.2, type: '一氧化碳' },
        { date: '2022-01-09', value: 6.1, type: '一氧化碳' },

        { date: '2022-01-01', value: 5.2, type: '甲烷' },
        { date: '2022-01-02', value: 5.3, type: '甲烷' },
        { date: '2022-01-03', value: 5.5, type: '甲烷' },
        { date: '2022-01-04', value: 5.1, type: '甲烷' },
        { date: '2022-01-05', value: 9.3, type: '甲烷' },
        { date: '2022-01-06', value: 15.2, type: '甲烷' },
        { date: '2022-01-07', value: 18.9, type: '甲烷' },
        { date: '2022-01-08', value: 22.3, type: '甲烷' },
        { date: '2022-01-09', value: 23.0, type: '甲烷' },

        { date: '2022-01-01', value: 1, type: '乙烯' },
        { date: '2022-01-02', value: 0.8, type: '乙烯' },
        { date: '2022-01-03', value: 1.1, type: '乙烯' },
        { date: '2022-01-04', value: 1.2, type: '乙烯' },
        { date: '2022-01-05', value: 0.9, type: '乙烯' },
        { date: '2022-01-06', value: 1.4, type: '乙烯' },
        { date: '2022-01-07', value: 1.2, type: '乙烯' },
        { date: '2022-01-08', value: 1.1, type: '乙烯' },
        { date: '2022-01-09', value: 1.3, type: '乙烯' },

        { date: '2022-01-01', value: 0, type: '乙炔' },
        { date: '2022-01-02', value: 0, type: '乙炔' },
        { date: '2022-01-03', value: 0, type: '乙炔' },
        { date: '2022-01-04', value: 0, type: '乙炔' },
        { date: '2022-01-05', value: 0, type: '乙炔' },
        { date: '2022-01-06', value: 0, type: '乙炔' },
        { date: '2022-01-07', value: 0, type: '乙炔' },
        { date: '2022-01-08', value: 0, type: '乙炔' },
        { date: '2022-01-09', value: 0, type: '乙炔' },

        { date: '2022-01-01', value: 3.4, type: '乙烷' },
        { date: '2022-01-02', value: 3.2, type: '乙烷' },
        { date: '2022-01-03', value: 3.6, type: '乙烷' },
        { date: '2022-01-04', value: 4.6, type: '乙烷' },
        { date: '2022-01-05', value: 8.1, type: '乙烷' },
        { date: '2022-01-06', value: 18.2, type: '乙烷' },
        { date: '2022-01-07', value: 30.1, type: '乙烷' },
        { date: '2022-01-08', value: 52.1, type: '乙烷' },
        { date: '2022-01-09', value: 82.3, type: '乙烷' },

        { date: '2022-01-01', value: 9.4, type: '总烃' },
        { date: '2022-01-02', value: 9.6, type: '总烃' },
        { date: '2022-01-03', value: 9.9, type: '总烃' },
        { date: '2022-01-04', value: 10.1, type: '总烃' },
        { date: '2022-01-05', value: 25.5, type: '总烃' },
        { date: '2022-01-06', value: 67.1, type: '总烃' },
        { date: '2022-01-07', value: 120.1, type: '总烃' },
        { date: '2022-01-08', value: 195.1, type: '总烃' },
        { date: '2022-01-09', value: 281.5, type: '总烃' },

        { date: '2022-01-01', value: 23.4, type: '总可燃气体' },
        { date: '2022-01-02', value: 24.3, type: '总可燃气体' },
        { date: '2022-01-03', value: 23.1, type: '总可燃气体' },
        { date: '2022-01-04', value: 27.1, type: '总可燃气体' },
        { date: '2022-01-05', value: 45.1, type: '总可燃气体' },
        { date: '2022-01-06', value: 82.1, type: '总可燃气体' },
        { date: '2022-01-07', value: 152.1, type: '总可燃气体' },
        { date: '2022-01-08', value: 291.1, type: '总可燃气体' },
        { date: '2022-01-09', value: 460.1, type: '总可燃气体' },
      ]
      const formattedData = data.map(d => ({
        date: new Date(d.date),
        value: d.value,
        type: d.type,
      }));

      const linePlot = new Line(container, {
        data: formattedData,
        xField: 'date',
        yField: 'value',
        seriesField: 'type',
        autoFit: true,
        smooth: true,
        xAxis: {
          type: 'time',
          title: {
            text: 'date/d',
          },
        },
        yAxis: {
          title: {
            text: 'concentration/ppm',
          },
        },
        annotations: [
          {
            type: 'region',
            start: ['2022-01-07', 0],  // 起点坐标，这里将纵坐标设为0
            end: ['2022-01-10', 500],    // 终点坐标，这里将纵坐标设为0
            style: {
              fill: 'blue',
            },
          },
          {
            type: 'text',
            position: ['2022-01-06', '150'],
            content: '预测数据',
            style: {
              fill: 'blue',
              fontSize: 20
            },
          },
        ],
      });

      linePlot.render();
    }
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
                变压器时序数据预测及故障分析
              </Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <Title level={4}>
                数据上传
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
                时序数据预测结果
              </Title>
              <div id="container" />
            </Col>
          </Row>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(DataPredictionView);
