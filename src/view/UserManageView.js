import { Layout } from "antd";
import React from "react";
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import { UserManageList } from "../components/UserManageList";
import { ManagerSideBar } from "../components/ManagerSideBar";
import { withRouter } from "react-router";

const { Header, Content } = Layout;
class UserManageView extends React.Component {
  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"7"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"7"} isAdmin={this.props.isAdmin} />;
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
              <p> 用户管理 </p>
            </div>
            <div>
              <UserManageList />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(UserManageView);
