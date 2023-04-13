import { Button, Layout } from "antd";
import React from "react";
import { ManageSearchBar } from "../components/ManageSearchBar";
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import { ManagerSideBar } from "../components/ManagerSideBar";
import { history } from "../utils/history";
import { withRouter } from "react-router";

const { Header, Content } = Layout;
class BookManageView extends React.Component {
  handleClick = () => {
    history.push("/addBook");
  };

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
            <div className="welcometitle">
              <p> 书籍管理 </p>
            </div>
            <div>
              <Button type="primary" onClick={this.handleClick}>
                新增图书
              </Button>
            </div>
            <div>
              <ManageSearchBar />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(BookManageView);
