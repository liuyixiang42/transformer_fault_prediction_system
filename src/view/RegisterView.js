import React from "react";
import WrappedRegisterForm from "../components/RegisterForm";
import { withRouter } from "react-router-dom";

class RegisterViewView extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-box">
            <h1 className="page-title">注册</h1>
            <div className="login-content">
              <WrappedRegisterForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RegisterViewView);
