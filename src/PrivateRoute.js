import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as userService from "./services/userService";
import { message } from "antd";

export default class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthed: false,
      hasAuthed: false,
      isAdmin: false,
    };
  }

  checkAuth = (data) => {
    //在第一次进入Private时会调用
    if (data.status >= 0) {
      if (data.data.userType === 1) {
        this.setState({ isAuthed: true, hasAuthed: true, isAdmin: true });
      } else {
        this.setState({ isAuthed: true, hasAuthed: true, isAdmin: false });
      }
    } else {
      message.error(data.msg);
      localStorage.removeItem("user");
      this.setState({ isAuthed: false, hasAuthed: true });
    }
  };

  componentDidMount() {
    userService.checkSession(this.checkAuth);
  }

  render() {
    const {
      component: Component,
      path = "/",
      exact = false,
      strict = false,
    } = this.props;

    //console.log(this.state.isAuthed);

    if (!this.state.hasAuthed) {
      return null;
    }

    return (
      <Route
        path={path}
        exact={exact}
        strict={strict}
        render={(props) =>
          this.state.isAuthed ? (
            <Component isAdmin={this.state.isAdmin} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          )
        }
      />
    );
  }
}
