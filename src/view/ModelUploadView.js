import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Row, Typography, message, Upload, Col } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Line, Pie } from '@antv/g2plot';
import { Table, Input, Button } from 'antd';
const { Column } = Table;

const { Dragger } = Upload;
const { Header, Content } = Layout;
const { Title } = Typography;

class ModelUploadView extends React.Component {

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
                                新增模型
                            </Title>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Title level={4}>
                                模型上传
                            </Title>
                            <Dragger {...this.props} style={{ width: "1000px", height: "500px" }}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">单击或拖动文件到此区域进行上传</p>
                                <p className="ant-upload-hint">
                                    支持单次上传。支持pkl,h5和pb文件。
                                </p>
                            </Dragger>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Title level={4}>
                                模型信息
                            </Title>
                            {/* 表单 */}
                            <p style={{ fontSize: "17px" }}>
                                模型名称
                            </p>
                            <Input placeholder="模型名称" />
                            <br /><br /><br />
                            <p style={{ fontSize: "17px" }}>
                                功能介绍
                            </p>
                            <Input placeholder="功能介绍" />
                            <br /><br /><br />
                            <p style={{ fontSize: "17px" }}>
                            输入参量类型
                            </p>
                            <Input placeholder="输入参量类型" />
                            <br /><br /><br />
                            <p style={{ fontSize: "17px" }}>
                            模型参数
                            </p>
                            <Input placeholder="模型参数" />



                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Row>
                        <Col style={{ display: 'flex', justifyContent: 'center' }}>
                            
                            <Button type="primary" style={{ backgroundColor: '#1890ff', margin: "0 auto" }}>
                            <UploadOutlined />
                                上传
                            </Button>
                        </Col>
                    </Row>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(ModelUploadView);
