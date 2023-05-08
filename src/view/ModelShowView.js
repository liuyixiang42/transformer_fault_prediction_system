import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Button, Col, Row, Typography, Input, Radio, Table } from 'antd';
import { RightCircleOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { history } from "../utils/history";


const { Header, Content } = Layout;
const { Title } = Typography;

class ModelArgsShowView1 extends React.Component {
    modelUploadOnClick() {
        history.push("/modelUpload")
    }
    modelArgsShow1OnClick() {
        history.push("/modelArgsShow1")
    }

    modelArgsShow2OnClick() {
        history.push("/modelArgsShow2")
    }

    modelArgsShow3OnClick() {
        history.push("/modelArgsShow3")
    }

    modelArgsShow4OnClick() {
        history.push("/modelArgsShow4")
    }

    render() {
        const columns = [
            {
                title: '模型名称',
                dataIndex: 'a',
                key: 'a',
            },
            {
                title: '功能介绍',
                dataIndex: 'b',
                key: 'b',
            },
            {
                title: '输入参量类型',
                dataIndex: 'c',
                key: 'c',
            },
            {
                title: '模型参数',
                dataIndex: 'd',
                key: 'd',
            },
            {
                title: '模型调整',
                key: 'action',
                render: (text, record) => (
                    <span>
                        {record.action} {/* 在单元格中渲染 Button 组件 */}
                    </span>
                ),
            },
        ];
        const data = [
            {
                a: '油气数据异常检测模型',
                b: '基于Transformer模型实现对油气数据的异常检测',
                c: '氢气，一氧化碳，甲烷等油气浓度以及油温',
                d: '训练迭代次数，batch大小，学习率，多头注意力head数量等',
                action: <Button type="primary" onClick={this.modelArgsShow1OnClick}><RightCircleOutlined /></Button>,
            },
            {
                a: '油气故障数据聚类模型',
                b: '基于Gauss混合模型实现对油气故障数据的聚类',
                c: '氢气，一氧化碳，甲烷等油气浓度以及油温',
                d: '最大迭代次数，初始聚类中心选择方式，收敛阈值等',
                action: <Button type="primary" onClick={this.modelArgsShow2OnClick}><RightCircleOutlined /></Button>,
            },
            {
                a: '线圈数据分类模型',
                b: '基于LSTM模型实现对线圈时序数据的标签分类',
                c: 'A相，B相，C相电路的电压和电流',
                d: '神经元数量，初始学习率，自适应学习率的衰减率，Drop层的比例等',
                action: <Button type="primary" onClick={this.modelArgsShow3OnClick}><RightCircleOutlined /></Button>,
            },
            {
                a: '变压器故障数据增强算法',
                b: '基于时域和频域以及其混合实现对变压器故障数据的增强',
                c: '氢气，一氧化碳，甲烷等油气浓度以及油温',
                d: '氢气噪声因子，一氧化碳噪声因子，甲烷噪声因子，油温噪声因子等',
                action: <Button type="primary" onClick={this.modelArgsShow4OnClick}><RightCircleOutlined /></Button>,
            },
        ]
        return (
            <Layout className="layout">
                <Header>
                    <HeaderInfo />
                </Header>
                <Layout style={{ margin: "0 auto" }}>
                    <br /><br />
                    <Row>
                        <Col span={24}>
                            <Title>
                                模型介绍及管理
                            </Title>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Table columns={columns} dataSource={data} />
                        </Col>

                    </Row>
                    <Row>
                        <Col span={24}>
                            <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} type="dashed" shape="round" onClick={this.modelUploadOnClick}>
                                <PlusSquareOutlined style={{ fontSize: "60px" }} />
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

export default withRouter(ModelArgsShowView1);
