import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Row, Typography, message, Upload, Col } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Line, Pie } from '@antv/g2plot';
import { Space, Table, Tag } from 'antd';
const { Column } = Table;

const { Dragger } = Upload;
const { Header, Content } = Layout;
const { Title } = Typography;

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


    const container1 = document.getElementById('container1');
    if (container1 !== null) {
      const data = [
        { date: '2022-01-01', value: 7.5, type: '氢气' },
        { date: '2022-01-02', value: 7.5, type: '氢气' },
        { date: '2022-01-03', value: 7.6, type: '氢气' },
        { date: '2022-01-04', value: 7.7, type: '氢气' },
        { date: '2022-01-05', value: 7.5, type: '氢气' },
        { date: '2022-01-06', value: 7.3, type: '氢气' },
        { date: '2022-01-07', value: 7.8, type: '氢气' },
        { date: '2022-01-08', value: 7.1, type: '氢气' },
        { date: '2022-01-09', value: 7.4, type: '氢气' },

        { date: '2022-01-01', value: 7, type: '一氧化碳' },
        { date: '2022-01-02', value: 7.2, type: '一氧化碳' },
        { date: '2022-01-03', value: 7.1, type: '一氧化碳' },
        { date: '2022-01-04', value: 7.3, type: '一氧化碳' },
        { date: '2022-01-05', value: 6.9, type: '一氧化碳' },
        { date: '2022-01-06', value: 6.8, type: '一氧化碳' },
        { date: '2022-01-07', value: 7, type: '一氧化碳' },
        { date: '2022-01-08', value: 7.1, type: '一氧化碳' },
        { date: '2022-01-09', value: 6.9, type: '一氧化碳' },

        { date: '2022-01-01', value: 5.2, type: '甲烷' },
        { date: '2022-01-02', value: 5.3, type: '甲烷' },
        { date: '2022-01-03', value: 5.5, type: '甲烷' },
        { date: '2022-01-04', value: 10.3, type: '甲烷' },
        { date: '2022-01-05', value: 30.5, type: '甲烷' },
        { date: '2022-01-06', value: 75.3, type: '甲烷' },
        { date: '2022-01-07', value: 80.2, type: '甲烷' },
        { date: '2022-01-08', value: 102.2, type: '甲烷' },
        { date: '2022-01-09', value: 101.3, type: '甲烷' },

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
        { date: '2022-01-05', value: 12.6, type: '乙烷' },
        { date: '2022-01-06', value: 17.8, type: '乙烷' },
        { date: '2022-01-07', value: 30.1, type: '乙烷' },
        { date: '2022-01-08', value: 51.2, type: '乙烷' },
        { date: '2022-01-09', value: 62.3, type: '乙烷' },

        { date: '2022-01-01', value: 9.4, type: '总烃' },
        { date: '2022-01-02', value: 9.6, type: '总烃' },
        { date: '2022-01-03', value: 9.9, type: '总烃' },
        { date: '2022-01-04', value: 50.3, type: '总烃' },
        { date: '2022-01-05', value: 80.6, type: '总烃' },
        { date: '2022-01-06', value: 153.2, type: '总烃' },
        { date: '2022-01-07', value: 162.9, type: '总烃' },
        { date: '2022-01-08', value: 201.5, type: '总烃' },
        { date: '2022-01-09', value: 224.3, type: '总烃' },

        { date: '2022-01-01', value: 23.4, type: '总可燃气体' },
        { date: '2022-01-02', value: 24.3, type: '总可燃气体' },
        { date: '2022-01-03', value: 23.1, type: '总可燃气体' },
        { date: '2022-01-04', value: 60.4, type: '总可燃气体' },
        { date: '2022-01-05', value: 85.7, type: '总可燃气体' },
        { date: '2022-01-06', value: 169.3, type: '总可燃气体' },
        { date: '2022-01-07', value: 182.6, type: '总可燃气体' },
        { date: '2022-01-08', value: 236.2, type: '总可燃气体' },
        { date: '2022-01-09', value: 272.1, type: '总可燃气体' },
      ]
      const formattedData = data.map(d => ({
        date: new Date(d.date),
        value: d.value,
        type: d.type,
      }));

      const linePlot = new Line(container1, {
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
            start: ['2022-01-04', 0],  // 起点坐标，这里将纵坐标设为0
            end: ['2022-01-09', 300],    // 终点坐标，这里将纵坐标设为0
            style: {
              fill: 'red',
            },
          },
          {
            type: 'text',
            position: ['2022-01-02', '150'],
            content: '绝缘老化',
            style: {
              fill: 'red',
              fontSize: 20
            },
          },
        ],
      });

      linePlot.render();
    }




    const container2 = document.getElementById('container2');
    if (container2 !== null) {
      const data = [
        { date: '2022-03-19', value: 7.5, type: '氢气' },
        { date: '2022-03-20', value: 7.5, type: '氢气' },
        { date: '2022-03-21', value: 7.6, type: '氢气' },
        { date: '2022-03-22', value: 7.7, type: '氢气' },
        { date: '2022-03-23', value: 7.5, type: '氢气' },
        { date: '2022-03-24', value: 7.3, type: '氢气' },
        { date: '2022-03-25', value: 7.8, type: '氢气' },
        { date: '2022-03-26', value: 7.1, type: '氢气' },
        { date: '2022-03-27', value: 7.4, type: '氢气' },

        { date: '2022-03-19', value: 7, type: '一氧化碳' },
        { date: '2022-03-20', value: 7.2, type: '一氧化碳' },
        { date: '2022-03-21', value: 7.1, type: '一氧化碳' },
        { date: '2022-03-22', value: 7.3, type: '一氧化碳' },
        { date: '2022-03-23', value: 6.9, type: '一氧化碳' },
        { date: '2022-03-24', value: 6.8, type: '一氧化碳' },
        { date: '2022-03-25', value: 7, type: '一氧化碳' },
        { date: '2022-03-26', value: 7.1, type: '一氧化碳' },
        { date: '2022-03-27', value: 6.9, type: '一氧化碳' },

        { date: '2022-03-19', value: 5.2, type: '甲烷' },
        { date: '2022-03-20', value: 5.3, type: '甲烷' },
        { date: '2022-03-21', value: 5.5, type: '甲烷' },
        { date: '2022-03-22', value: 10.3, type: '甲烷' },
        { date: '2022-03-23', value: 30.5, type: '甲烷' },
        { date: '2022-03-24', value: 75.3, type: '甲烷' },
        { date: '2022-03-25', value: 80.2, type: '甲烷' },
        { date: '2022-03-26', value: 102.2, type: '甲烷' },
        { date: '2022-03-27', value: 101.3, type: '甲烷' },

        { date: '2022-03-19', value: 1, type: '乙烯' },
        { date: '2022-03-20', value: 0.8, type: '乙烯' },
        { date: '2022-03-21', value: 1.1, type: '乙烯' },
        { date: '2022-03-22', value: 1.2, type: '乙烯' },
        { date: '2022-03-23', value: 0.9, type: '乙烯' },
        { date: '2022-03-24', value: 1.4, type: '乙烯' },
        { date: '2022-03-25', value: 1.2, type: '乙烯' },
        { date: '2022-03-26', value: 1.1, type: '乙烯' },
        { date: '2022-03-27', value: 1.3, type: '乙烯' },

        { date: '2022-03-19', value: 0, type: '乙炔' },
        { date: '2022-03-20', value: 0, type: '乙炔' },
        { date: '2022-03-21', value: 0, type: '乙炔' },
        { date: '2022-03-22', value: 0, type: '乙炔' },
        { date: '2022-03-23', value: 0, type: '乙炔' },
        { date: '2022-03-24', value: 0, type: '乙炔' },
        { date: '2022-03-25', value: 0, type: '乙炔' },
        { date: '2022-03-26', value: 0, type: '乙炔' },
        { date: '2022-03-27', value: 0, type: '乙炔' },

        { date: '2022-03-19', value: 3.4, type: '乙烷' },
        { date: '2022-03-20', value: 3.2, type: '乙烷' },
        { date: '2022-03-21', value: 3.6, type: '乙烷' },
        { date: '2022-03-22', value: 4.6, type: '乙烷' },
        { date: '2022-03-23', value: 12.6, type: '乙烷' },
        { date: '2022-03-24', value: 17.8, type: '乙烷' },
        { date: '2022-03-25', value: 30.1, type: '乙烷' },
        { date: '2022-03-26', value: 51.2, type: '乙烷' },
        { date: '2022-03-27', value: 62.3, type: '乙烷' },

        { date: '2022-03-19', value: 9.4, type: '总烃' },
        { date: '2022-03-20', value: 9.6, type: '总烃' },
        { date: '2022-03-21', value: 9.9, type: '总烃' },
        { date: '2022-03-22', value: 50.3, type: '总烃' },
        { date: '2022-03-23', value: 80.6, type: '总烃' },
        { date: '2022-03-24', value: 153.2, type: '总烃' },
        { date: '2022-03-25', value: 162.9, type: '总烃' },
        { date: '2022-03-26', value: 201.5, type: '总烃' },
        { date: '2022-03-27', value: 224.3, type: '总烃' },

        { date: '2022-03-19', value: 23.4, type: '总可燃气体' },
        { date: '2022-03-20', value: 24.3, type: '总可燃气体' },
        { date: '2022-03-21', value: 23.1, type: '总可燃气体' },
        { date: '2022-03-22', value: 60.4, type: '总可燃气体' },
        { date: '2022-03-23', value: 85.7, type: '总可燃气体' },
        { date: '2022-03-24', value: 169.3, type: '总可燃气体' },
        { date: '2022-03-25', value: 182.6, type: '总可燃气体' },
        { date: '2022-03-26', value: 236.2, type: '总可燃气体' },
        { date: '2022-03-27', value: 272.1, type: '总可燃气体' },

      ]
      const formattedData = data.map(d => ({
        date: new Date(d.date),
        value: d.value,
        type: d.type,
      }));

      const linePlot = new Line(container2, {
        title: '绝缘老化',
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
            start: ['2022-03-22', 0],  // 起点坐标，这里将纵坐标设为0
            end: ['2022-03-27', 300],    // 终点坐标，这里将纵坐标设为0
            style: {
              fill: 'red',
            },
          },
          {
            type: 'text',
            position: ['2022-03-20', '150'],
            content: '绕组故障',
            style: {
              fill: 'red',
              fontSize: 20
            },
          },
        ],
      });

      linePlot.render();
    }


    const container3 = document.getElementById('container3');
    if (container3 !== null) {
      const data = [
        { date: '2022-03-19', value: 7.5, type: '氢气' },
        { date: '2022-03-20', value: 7.5, type: '氢气' },
        { date: '2022-03-21', value: 7.6, type: '氢气' },
        { date: '2022-03-22', value: 7.7, type: '氢气' },
        { date: '2022-03-23', value: 7.5, type: '氢气' },
        { date: '2022-03-24', value: 7.3, type: '氢气' },
        { date: '2022-03-25', value: 7.8, type: '氢气' },
        { date: '2022-03-26', value: 7.1, type: '氢气' },
        { date: '2022-03-27', value: 7.4, type: '氢气' },

        { date: '2022-03-19', value: 7, type: '一氧化碳' },
        { date: '2022-03-20', value: 7.2, type: '一氧化碳' },
        { date: '2022-03-21', value: 7.1, type: '一氧化碳' },
        { date: '2022-03-22', value: 7.3, type: '一氧化碳' },
        { date: '2022-03-23', value: 6.9, type: '一氧化碳' },
        { date: '2022-03-24', value: 6.8, type: '一氧化碳' },
        { date: '2022-03-25', value: 7, type: '一氧化碳' },
        { date: '2022-03-26', value: 7.1, type: '一氧化碳' },
        { date: '2022-03-27', value: 6.9, type: '一氧化碳' },

        { date: '2022-03-19', value: 5.2, type: '甲烷' },
        { date: '2022-03-20', value: 5.3, type: '甲烷' },
        { date: '2022-03-21', value: 5.5, type: '甲烷' },
        { date: '2022-03-22', value: 10.3, type: '甲烷' },
        { date: '2022-03-23', value: 30.5, type: '甲烷' },
        { date: '2022-03-24', value: 75.3, type: '甲烷' },
        { date: '2022-03-25', value: 80.2, type: '甲烷' },
        { date: '2022-03-26', value: 102.2, type: '甲烷' },
        { date: '2022-03-27', value: 101.3, type: '甲烷' },

        { date: '2022-03-19', value: 1, type: '乙烯' },
        { date: '2022-03-20', value: 0.8, type: '乙烯' },
        { date: '2022-03-21', value: 1.1, type: '乙烯' },
        { date: '2022-03-22', value: 1.2, type: '乙烯' },
        { date: '2022-03-23', value: 0.9, type: '乙烯' },
        { date: '2022-03-24', value: 1.4, type: '乙烯' },
        { date: '2022-03-25', value: 1.2, type: '乙烯' },
        { date: '2022-03-26', value: 1.1, type: '乙烯' },
        { date: '2022-03-27', value: 1.3, type: '乙烯' },

        { date: '2022-03-19', value: 0, type: '乙炔' },
        { date: '2022-03-20', value: 0, type: '乙炔' },
        { date: '2022-03-21', value: 0, type: '乙炔' },
        { date: '2022-03-22', value: 0, type: '乙炔' },
        { date: '2022-03-23', value: 0, type: '乙炔' },
        { date: '2022-03-24', value: 0, type: '乙炔' },
        { date: '2022-03-25', value: 0, type: '乙炔' },
        { date: '2022-03-26', value: 0, type: '乙炔' },
        { date: '2022-03-27', value: 0, type: '乙炔' },

        { date: '2022-03-19', value: 3.4, type: '乙烷' },
        { date: '2022-03-20', value: 3.2, type: '乙烷' },
        { date: '2022-03-21', value: 3.6, type: '乙烷' },
        { date: '2022-03-22', value: 4.6, type: '乙烷' },
        { date: '2022-03-23', value: 12.6, type: '乙烷' },
        { date: '2022-03-24', value: 17.8, type: '乙烷' },
        { date: '2022-03-25', value: 30.1, type: '乙烷' },
        { date: '2022-03-26', value: 51.2, type: '乙烷' },
        { date: '2022-03-27', value: 62.3, type: '乙烷' },

        { date: '2022-03-19', value: 9.4, type: '总烃' },
        { date: '2022-03-20', value: 9.6, type: '总烃' },
        { date: '2022-03-21', value: 9.9, type: '总烃' },
        { date: '2022-03-22', value: 50.3, type: '总烃' },
        { date: '2022-03-23', value: 80.6, type: '总烃' },
        { date: '2022-03-24', value: 153.2, type: '总烃' },
        { date: '2022-03-25', value: 162.9, type: '总烃' },
        { date: '2022-03-26', value: 201.5, type: '总烃' },
        { date: '2022-03-27', value: 224.3, type: '总烃' },

        { date: '2022-03-19', value: 23.4, type: '总可燃气体' },
        { date: '2022-03-20', value: 24.3, type: '总可燃气体' },
        { date: '2022-03-21', value: 23.1, type: '总可燃气体' },
        { date: '2022-03-22', value: 60.4, type: '总可燃气体' },
        { date: '2022-03-23', value: 85.7, type: '总可燃气体' },
        { date: '2022-03-24', value: 169.3, type: '总可燃气体' },
        { date: '2022-03-25', value: 182.6, type: '总可燃气体' },
        { date: '2022-03-26', value: 236.2, type: '总可燃气体' },
        { date: '2022-03-27', value: 272.1, type: '总可燃气体' },

      ]
      const formattedData = data.map(d => ({
        date: new Date(d.date),
        value: d.value,
        type: d.type,
      }));

      const linePlot = new Line(container3, {
        title: {
          visible: true,
          text: '绝缘老化',
        },
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
            start: ['2022-03-22', 0],  // 起点坐标，这里将纵坐标设为0
            end: ['2022-03-27', 300],    // 终点坐标，这里将纵坐标设为0
            style: {
              fill: 'red',
            },
          },
          {
            type: 'text',
            position: ['2022-03-20', '150'],
            content: '绝缘击穿',
            style: {
              fill: 'red',
              fontSize: 20
            },
          },
        ],
      });

      linePlot.render();
    }

    const container4 = document.getElementById('container4');
    if (container4 !== null) {
      const data = [
        { type: '正常', value: 70 },
        { type: '绝缘老化', value: 10 },
        { type: '绕组故障', value: 10 },
        { type: '绝缘击穿', value: 10 },
      ];
      const piePlot = new Pie(container4, {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [{ type: 'element-active' }],
      });

      piePlot.render();
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
                变压器线圈数据故障分析
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
          </Row>
          <Row>
            <Col>
              <Title level={4}>
                故障数据检测结果
              </Title>
              <div id="container1" />
              <div id="container2" />
              <div id="container3" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Title level={4}>
                故障数量统计和故障率
              </Title>
              <Table dataSource={this.tableData}>
              <Column title="故障类型" dataIndex="type" key="type" />
              <Column title="发生数量" dataIndex="num" key="num" />
              </Table>
              <div id="container4" />
            </Col>
          </Row>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(CoilDataAnalysisView);
