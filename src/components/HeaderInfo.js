import React from "react";
import { Row, Col } from "antd";
import "../css/index.css";
import logoimg from "../assets/logoimg.jpg";
import { UserAvatar } from "./UserAvatar";

export class HeaderInfo extends React.Component {
  render() {
    const user = JSON.parse(localStorage.getItem("user")); //获取当前用户

    return (
      <div id="header">
        <div id="header-content">
          <Row>
            <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
              <a id="logo" href={"/"}>
                {/* <img alt="logo"  className="logo" src={logo} style={{ height:45 }}/>
                                <img alt="Book Store"  className="logo-font" src={logoFont} style={{ height:40 }}/> */}
                <img
                  alt="logo"
                  className="logo"
                  style={{ height: 50 }}
                  src={logoimg}
                ></img>
              </a>

              <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;网购图书商城</strong>
            </Col>
            <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
              {user != null ? <UserAvatar user={user} /> : null}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
