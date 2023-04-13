import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import { ManagerSideBar } from "../components/ManagerSideBar";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import WrappedCount from "../components/Count";

const { Header, Content } = Layout;

class CountView extends React.Component {
  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"5"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"5"} isAdmin={this.props.isAdmin} />;
    }
    return (
      <Layout className="layout">
        <Header>
          <HeaderInfo />
        </Header>
        <Layout>
          {side}
          <Content style={{ padding: "0 50px" }}>
            <div className="home-content">
              <div className="welcometitle">
                <p> 个人统计 </p>
              </div>
              <WrappedCount />
              <div className={"foot-wrapper"}></div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(CountView);
