import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import "../css/home.css";
import "../config";
import WrappedTemOrderBookTable from "../components/TemOrderBookTable";
import { ManagerSideBar } from "../components/ManagerSideBar";
import { withRouter } from "react-router";

const { Header, Content } = Layout;

class BuyView extends React.Component {
  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"3"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"3"} isAdmin={this.props.isAdmin} />;
    }
    return (
      <Layout className="layout">
        <Header>
          <HeaderInfo />
        </Header>
        <Layout>
          {side}
          <Content style={{ padding: "0 50px" }}>
            <div>
              <div className="welcometitle">
                <p>订单</p>
              </div>
              <WrappedTemOrderBookTable />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(BuyView);
