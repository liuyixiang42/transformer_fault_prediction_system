import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import { ManagerSideBar } from "../components/ManagerSideBar";
import "../css/home.css";
import { withRouter } from "react-router-dom";
import { BookCarousel } from "../components/BookCarousel";
import { SearchBar } from "../components/SearchBar";

const { Header, Content } = Layout;

class HomeView extends React.Component {
  componentDidMount() {
    let user = localStorage.getItem("user");
    this.setState({ user: user });
  }

  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"1"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"1"} isAdmin={this.props.isAdmin} />;
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
                <p> 选购图书 </p>
              </div>
              <BookCarousel />
              <SearchBar />
              <div className={"foot-wrapper"}></div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(HomeView);
