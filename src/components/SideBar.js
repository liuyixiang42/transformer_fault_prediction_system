import React from "react";
import { Menu, Layout, Icon } from "antd";
import { history } from "../utils/history";

const { Sider } = Layout;

export class SideBar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    if (collapsed) {
    }

    this.setState({ collapsed });
  };

  bookOnClick = () => {
    history.push("/");
  };

  cartOnClick = () => {
    history.push("/cart");
  };
  countOnClick = () => {
    history.push("/count");
  };
  infoOnClick = () => {
    history.push("/info");
  };

  buyOnClick = () => {
    history.push("/buy");
  };
  buyAllOnClick = () => {
    history.push("/buyAll");
  };
  userManageOnClick = () => {
    history.push("/usermanage");
  };
  bookManageOnClick = () => {
    history.push("/bookmanage");
  };
  orderManageOnClick = () => {
    history.push("/ordermanage");
  };
  render() {
    return (
      <div
        style={{
          width: this.state.collapsed ? "80px" : "180px",
          maxWidth: this.state.collapsed ? "80px" : "180px",
          minWidth: this.state.collapsed ? "80px" : "180px",
        }}
      >
        <div className="mySider">
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            width="180px"
            onCollapse={this.onCollapse}
            className="sider"
            style={{ background: "#fff" }}
          >
            <Menu mode="inline" defaultSelectedKeys={this.props.num}>
              <Menu.Item key="1" onClick={this.bookOnClick}>
                <Icon type="shop" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>商城</span>
              </Menu.Item>
              <Menu.Item key="2" onClick={this.cartOnClick}>
                <Icon type="shopping-cart" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>购物车</span>
              </Menu.Item>
              <Menu.Item key="3" onClick={this.buyOnClick}>
                <Icon type="solution" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>当前订单</span>
              </Menu.Item>
              <Menu.Item key="4" onClick={this.buyAllOnClick}>
                <Icon type="solution" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>全部订单</span>
              </Menu.Item>
              <Menu.Item key="5" onClick={this.countOnClick}>
                <Icon type="solution" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>个人统计</span>
              </Menu.Item>
              <Menu.Item key="6" onClick={this.infoOnClick}>
                <Icon type="user" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>个人空间</span>
              </Menu.Item>
            </Menu>
          </Sider>
        </div>
      </div>
    );
  }
}
