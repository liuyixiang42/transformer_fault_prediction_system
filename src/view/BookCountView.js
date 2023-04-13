import React from "react";
import { Layout } from "antd";
import { withRouter } from "react-router";
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import { ManagerSideBar } from "../components/ManagerSideBar";
import WrappedBookCount from "../components/BookCount";

const { Header, Content } = Layout;
class BookCountView extends React.Component {
  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"11"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"11"} isAdmin={this.props.isAdmin} />;
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
              <p> 图书销售统计 </p>
            </div>
            <div>
              <WrappedBookCount />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(BookCountView);
