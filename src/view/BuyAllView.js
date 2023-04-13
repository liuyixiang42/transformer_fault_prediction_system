import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import { OrderSearchBar } from "../components/OrderSearchBar";
import { SideBar } from "../components/SideBar";
import "../css/home.css";
import "../config";
import { ManagerSideBar } from "../components/ManagerSideBar";
import { withRouter } from "react-router";

const { Header, Content } = Layout;
class BuyAllView extends React.Component {
  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"4"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"4"} isAdmin={this.props.isAdmin} />;
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
                <p>全部订单</p>
              </div>
              <div>
                <OrderSearchBar />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(BuyAllView);
