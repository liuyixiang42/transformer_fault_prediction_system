import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { Button, Col, Row } from 'antd';
import {LineChartOutlined, BarChartOutlined, DotChartOutlined} from '@ant-design/icons';
import { history } from "../utils/history";

const { Header, Content } = Layout;

class OilGasDataAnalysisView extends React.Component {
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
        
        
      </Layout>
    );
  }
}

export default withRouter(OilGasDataAnalysisView);
