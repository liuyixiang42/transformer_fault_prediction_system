import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import "../css/login.css";
import "../config";
import * as userService from "../services/userService";
import { history } from "../utils/history";

class LoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        userService.login(values);
      }
    });
  };

  handleClick = () => {
    //进入注册之前先setSession
    history.push("/register");
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入用户名!" }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="用户"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码!" }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="login-form-button" id="login">
            登录
          </Button>
          <Button className="login-form-button" onClick={this.handleClick}>
            注册
          </Button>
          {/* <a href="">Or register now!</a> */}
        </Form.Item>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create({ name: "normal_login" })(LoginForm);

export default WrappedLoginForm;
