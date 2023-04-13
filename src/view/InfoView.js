import React from "react";
import { Layout } from "antd";
import { Descriptions, Button } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../css/info.css";
import * as userService from "../services/userService";
import { ManagerSideBar } from "../components/ManagerSideBar";
import { withRouter } from "react-router";
const { Header, Content } = Layout;

class InfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      user1: [],
    };
  }

  componentDidMount() {
    const callback = (data) => {
      this.setState({ user: data });
    };

    userService.getuserinfo({ search: null }, callback);
  }

  render() {
    const user = JSON.parse(localStorage.getItem("user"));
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"6"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"6"} isAdmin={this.props.isAdmin} />;
    }
    return (
      <Layout className="layout">
        <Header>
          <HeaderInfo />
        </Header>
        <Layout>
          {side}
          <Content style={{ padding: "0 50px" }}>
            <div className="firsttitle">
              <p> 欢迎回来，{user.username},这是你的个人信息。</p>
            </div>
            <br />
            <br />
            <div>
              {/* <img alt="头像" src={imgUrl} style={{cursor:"pointer"}}/> */}
              <Avatar size={100} icon={<UserOutlined />} />
              <br />
              <br />
              <br />
              <Descriptions bordered>
                <Descriptions.Item
                  className={"username"}
                  label={"用户名"}
                  span={3}
                >
                  {user.username}
                </Descriptions.Item>
                <Descriptions.Item label={"id"} span={3}>
                  {user.userId}
                </Descriptions.Item>
                <Descriptions.Item label={"权限级别"} span={3}>
                  {user.userType}
                </Descriptions.Item>
              </Descriptions>
              <br />
              <br />
              <Button onClick={userService.logout}>登出</Button>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(InfoView);
