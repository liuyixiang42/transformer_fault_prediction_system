import React from "react";
import { Menu, Layout, Icon } from "antd";
import { history } from "../utils/history";

const { Sider } = Layout;

export class ManagerSideBar extends React.Component {
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
    history.push("/userManage");
  };
  bookManageOnClick = () => {
    history.push("/bookManage");
  };
  orderManageOnClick = () => {
    history.push("/orderManage");
  };
  userCountOnClick = () => {
    history.push("/userCount");
  };
  bookCountOnClick = () => {
    history.push("/bookCount");
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
              <Menu.Item id="cart" key="2" onClick={this.cartOnClick}>
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
              <Menu.Item key="7" onClick={this.userManageOnClick}>
                <Icon type="solution" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>用户管理</span>
              </Menu.Item>
              <Menu.Item key="8" onClick={this.bookManageOnClick}>
                <Icon type="solution" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>书籍管理</span>
              </Menu.Item>
              <Menu.Item key="9" onClick={this.orderManageOnClick}>
                <Icon type="solution" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>订单管理</span>
              </Menu.Item>
              <Menu.Item key="10" onClick={this.userCountOnClick}>
                <Icon type="solution" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>用户统计</span>
              </Menu.Item>
              <Menu.Item key="11" onClick={this.bookCountOnClick}>
                <Icon type="solution" style={{ fontSize: "18px" }} />
                <span style={{ fontSize: "16px" }}>图书统计</span>
              </Menu.Item>
            </Menu>
          </Sider>
        </div>
      </div>
    );
  }
}
