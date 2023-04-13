import React from "react";
import { history } from "../utils/history";
import * as userService from "../services/userService";
import "antd/dist/antd.css";
import "../css/login.css";
import { Form, Input, Button } from "antd";
//动态验证的函数userService.checkExist = (value, callback)
class RegisterForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.password !== values.password2) {
          alert("两次输入的密码不同！！！");
          return;
        }
        userService.register(values);
      }
    });
  };
  handleClick = () => {
    history.push("/login");
  };
  handleChange = (e) => {
    const { value } = e.target;
    const callback = (data) => {
      if (data) {
        document.getElementById("error").innerHTML = "用户名已经存在!";
      } else {
        document.getElementById("error").innerHTML = "";
      }
    }; //data是返回的bool值
    userService.checkExist(value, callback);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            //rules: [{ required: true, message: "请输入用户名!" }],
          })(<Input placeholder="用户" onChange={this.handleChange} />)}
        </Form.Item>
        <label id="error" style={{ color: "red" }}></label>
        <Form.Item>
          {getFieldDecorator("mail", {
            rules: [
              { required: true, message: "请输入正确邮箱!", type: "email" },
            ],
          })(<Input placeholder="邮箱" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码!" }],
          })(<Input type="password" placeholder="密码" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password2", {
            rules: [{ required: true, message: "请确认密码!" }],
          })(<Input type="password" placeholder="确认密码" />)}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="login-form-button">
            立即注册
          </Button>
          <Button className="login-form-button" onClick={this.handleClick}>
            返回
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegisterForm = Form.create({ name: "normal_login" })(RegisterForm);

export default WrappedRegisterForm;
