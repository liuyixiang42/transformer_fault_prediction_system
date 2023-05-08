import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Button, Col, Row, Typography, Input, Radio } from 'antd';
import { LineChartOutlined, BarChartOutlined, DotChartOutlined, PieChartOutlined, SlidersOutlined, PlusSquareOutlined } from '@ant-design/icons';
import { history } from "../utils/history";

const { Header, Content } = Layout;
const { Title } = Typography;

class ModelArgsShowView1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value1: 1,
            value2: 1,
            value3: 1,
        };
    }
    onChange1 = (e) => {
        this.setState({
            value1: e.target.value,
        });
    };
    onChange2 = (e) => {
        this.setState({
            value2: e.target.value,
        });
    };
    onChange3 = (e) => {
        this.setState({
            value3: e.target.value,
        });
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
                        <Col span={24}>
                            <Title>
                                模型介绍及参数调整
                            </Title>
                        </Col>
                    </Row>

                    <Row gutter={[200, 24]}>
                        <Col span={8}>
                            <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" >
                                <strong>Transformer异常检测模型</strong>
                                <p style={{ fontSize: "20px" }}>
                                    <br />
                                    基于Transformer模型实现对油气数据的
                                    <br />
                                    异常检测
                                </p>
                            </Button>
                        </Col>
                        <Col span={6}>
                            训练迭代次数<br />
                            <Input style={{ width: "200px" }} defaultValue={250} placeholder="训练迭代次数" />

                            <br />batch大小<br />
                            <Input style={{ width: "200px" }} defaultValue={128} placeholder="batch大小" />
                            <br />学习率<br />
                            <Input style={{ width: "200px" }} defaultValue={0.001} placeholder="学习率" />
                            <br />多头注意力head数量<br />
                            <Input style={{ width: "200px" }} defaultValue={9} placeholder="多头注意力head数量" />
                        </Col>
                        <Col span={8}>
                            Drop层的比例<br />
                            <Input style={{ width: "200px" }} defaultValue={0.1} placeholder="Drop层的比例" />
                            <br />前馈网络中间层的维度大小<br />
                            <Input style={{ width: "200px" }} defaultValue={16} placeholder="前馈网络中间层的维度大小" />
                            <br />激活函数<br />
                            <Radio.Group onChange={this.onChange1} value={this.state.value1}>
                                <Radio value={1}>sigmoid</Radio>
                                <Radio value={2}>tanh</Radio>
                                <Radio value={3}>ReLU</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row gutter={[200, 24]}>
                        <Col span={8}>
                            <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" >
                                <strong>Gauss混合模型聚类模型</strong>
                                <p style={{ fontSize: "20px" }}>
                                    <br />
                                    基于GMM实现对油气故障数据的
                                    <br />
                                    聚类
                                </p>
                            </Button>
                        </Col>
                        <Col span={6}>
                            最大迭代次数<br />
                            <Input style={{ width: "200px" }} defaultValue={100} placeholder="最大迭代次数" />
                            <br />聚类中心数量<br />
                            <Input style={{ width: "200px" }} defaultValue={5} placeholder="聚类中心数量" />

                            <br />收敛阈值<br />
                            <Input style={{ width: "200px" }} defaultValue={1e-3} placeholder="收敛阈值" />
                        </Col>
                        <Col span={8}>
                            初始聚类中心选择方式<br />
                            <Radio.Group onChange={this.onChange2} value={this.state.value2}>
                                <Radio value={1}>kmeans</Radio>
                                <Radio value={2}>随机选择</Radio>
                                <Radio value={3}>均匀采样</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row gutter={[200, 24]}>
                        <Col span={8}>
                            <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" >
                                <strong>LSTM数据分类模型</strong>
                                <p style={{ fontSize: "20px" }}>
                                    <br />
                                    基于LSTM实现对线圈数据的
                                    <br />
                                    带标签分类
                                </p>
                            </Button>
                        </Col>
                        <Col span={6}>
                            神经元数量<br />
                            <Input style={{ width: "200px" }} defaultValue={64} placeholder="神经元数量" />

                            <br />初始学习率<br />
                            <Input style={{ width: "200px" }} defaultValue={0.001} placeholder="初始学习率" />
                            <br />自适应学习率的衰减率<br />
                            <Input style={{ width: "200px" }} defaultValue={0.9} placeholder="自适应学习率的衰减率" />
                            <br />Drop层的比例<br />
                            <Input style={{ width: "200px" }} defaultValue={0.2} placeholder="Drop层的比例" />
                        </Col>
                        <Col span={8}>
                            训练迭代次数<br />
                            <Input style={{ width: "200px" }} defaultValue={100} placeholder="训练迭代次数" />
                            <br />batch大小<br />
                            <Input style={{ width: "200px" }} defaultValue={32} placeholder="batch大小" />
                            <br />激活函数<br />
                            <Radio.Group onChange={this.onChange3} value={this.state.value3}>
                                <Radio value={1}>sigmoid</Radio>
                                <Radio value={2}>tanh</Radio>
                                <Radio value={3}>ReLU</Radio>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row gutter={[200, 24]}>
                        <Col span={8}>
                            <Button style={{ width: "400px", height: "200px", fontSize: "30px", borderWidth: "2px", borderColor: "black" }} shape="round" >
                                <strong>故障数据增强模型</strong>
                                <p style={{ fontSize: "20px" }}>
                                    <br />
                                    基于时域和频域以及其混合实现对
                                    <br />
                                    故障数据的增强
                                </p>
                            </Button>
                        </Col>
                        <Col span={6}>
                            氢气噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1} placeholder="氢气噪声因子" />

                            <br />一氧化碳噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1} placeholder="一氧化碳噪声因子" />
                            <br />甲烷噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={0.8} placeholder="甲烷噪声因子" />
                            <br />乙烯噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={0.2} placeholder="乙烯噪声因子" />
                        </Col>
                        <Col span={8}>
                            乙炔噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={0} placeholder="乙炔噪声因子" />
                            <br />总烃噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1.5} placeholder="总烃噪声因子" />
                            <br />总可燃气体噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1.6} placeholder="总可燃气体噪声因子" />
                            <br />油温噪声因子<br />
                            <Input style={{ width: "200px" }} defaultValue={1.1} placeholder="油温噪声因子" />
                        </Col>
                    </Row>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(ModelArgsShowView1);
