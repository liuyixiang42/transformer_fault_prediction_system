import { Layout } from "antd";
import React from "react";
import { HeaderInfo } from "../components/HeaderInfo";
import { ManageOrderSearchBar } from "../components/ManageOrderSearchBar";
import { SideBar } from "../components/SideBar";
import { ManagerSideBar } from "../components/ManagerSideBar";
import { withRouter } from "react-router";

const { Header, Content } = Layout;
class OrderManageView extends React.Component {
  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"9"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"9"} isAdmin={this.props.isAdmin} />;
    }
    return (
      <Layout className="layout">
        <Header>
          <HeaderInfo />
        </Header>
        <Layout>
          {side}
          <Content style={{ padding: "0 50px" }}>
            <div className="welcometitle">
              <p> 订单管理 </p>
            </div>
            <div>
              <ManageOrderSearchBar />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(OrderManageView);
