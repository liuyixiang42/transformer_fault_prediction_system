import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import "../css/cart.css";
import { CartBookList } from "../components/CartBookList";
import "../config";
import { ManagerSideBar } from "../components/ManagerSideBar";
import { withRouter } from "react-router";

// import { Book } from '../components/Book';

const { Header, Content } = Layout;

class CartView extends React.Component {
  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"2"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"2"} isAdmin={this.props.isAdmin} />;
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
                <p>购物车</p>
              </div>
              <div className="global-search-wrapper" style={{ width: 300 }}>
                <CartBookList />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(CartView);
