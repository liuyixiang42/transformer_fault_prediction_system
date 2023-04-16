import React from "react";
import WrappedLoginForm from "../components/LoginForm";
import { withRouter } from "react-router-dom";
import { Typography } from 'antd';
const { Title } = Typography;

class LoginView extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-title">
          <h>工业变压器故障分析预测系统</h>
        </div>
        <div className="login-container">
          <div className="login-box">
            <h1 className="page-title">登录</h1>
            <div className="login-content">
              <WrappedLoginForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginView);
