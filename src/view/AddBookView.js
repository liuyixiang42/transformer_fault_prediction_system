import React from "react";
import { Layout } from "antd";
import { withRouter } from "react-router";
import { ManagerSideBar } from "../components/ManagerSideBar";
import { SideBar } from "../components/SideBar";
import WrappedAddBookForm from "../components/AddBookForm";
import { HeaderInfo } from "../components/HeaderInfo";

const { Header, Content } = Layout;

class AddBookView extends React.Component {
  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"8"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"8"} isAdmin={this.props.isAdmin} />;
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
              <div className="carttitle">
                <p>增加图书</p>
              </div>
              <div className="global-search-wrapper" style={{ width: 300 }}>
                <WrappedAddBookForm />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(AddBookView);
