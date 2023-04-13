import React from "react";
import { Avatar, Dropdown, Menu, Button } from "antd";
import "../css/index.css";
import * as userService from "../services/userService";
import { UserOutlined } from "@ant-design/icons";

export class UserAvatar extends React.Component {
  render() {
    const menu = (
      <Menu theme="light">
        {/* <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        Show Profile
                    </a>
                </Menu.Item> */}
        <Menu.Item>
          <Button href="#" onClick={userService.logout}>
            登出
          </Button>
        </Menu.Item>
      </Menu>
    );

    const { user } = this.props;
    return (
      <div id="avatar">
        <span className="name">Hi, {user.username}</span>
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar size="large" icon={<UserOutlined />} />
          {/* <Avatar alt="头像" src={imgUrl} style={{cursor:"pointer"}}/> */}
        </Dropdown>
      </div>
    );
  }
}
