import React from "react";
import { Row, Col } from "antd";
import "../css/index.css";
import logoimg from "../assets/logoimg.jpg";
import { UserAvatar } from "./UserAvatar";
import {SketchOutlined} from '@ant-design/icons';

export class HeaderInfo extends React.Component {
  render() {
    const user = JSON.parse(localStorage.getItem("user")); //获取当前用户

    return (
      <div id="header">
        <div id="header-content">
          <Row>
            <Col span={2}/>    
            <Col span={10}>    
            <SketchOutlined />
              <strong>工业变压器故障分析预测系统</strong>
            </Col>
            <Col id="user" span={7}>
              {user != null ? <UserAvatar user={user} /> : null}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
