import React from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginRoute from "./LoginRoute";
import AdminRoute from "./AdminRoute";
import HomeView from "./view/HomeView";
import LoginView from "./view/LoginView";
import { history } from "./utils/history";
import BookView from "./view/BookView";
import CartView from "./view/CartView";
import CountView from "./view/CountView";
import InfoView from "./view/InfoView";
import BuyView from "./view/BuyView";
import BuyAllView from "./view/BuyAllView";
import RegisterView from "./view/RegisterView";
import UserManageView from "./view/UserManageView";
import BookManageView from "./view/BookManageView";
import OrderManageView from "./view/OrderManageView";
import AddBookView from "./view/AddBookView";
import EditBookView from "./view/EditBookView";
import UserCountView from "./view/UserCountView";
import BookCountView from "./view/BookCountView";

class BasicRoute extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      //console.log(location,action);
    });
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path="/" component={HomeView} />
          <LoginRoute exact path="/login" component={LoginView} />
          <LoginRoute exact path="/register" component={RegisterView} />
          <PrivateRoute exact path="/bookDetails" component={BookView} />
          <PrivateRoute exact path="/cart" component={CartView} />
          <PrivateRoute exact path="/info" component={InfoView} />
          <PrivateRoute exact path="/buy" component={BuyView} />
          <PrivateRoute exact path="/buyAll" component={BuyAllView} />
          <PrivateRoute exact path="/count" component={CountView} />
          <AdminRoute exact path="/userManage" component={UserManageView} />
          <AdminRoute exact path="/bookManage" component={BookManageView} />
          <AdminRoute exact path="/addBook" component={AddBookView} />
          <AdminRoute exact path="/editBook" component={EditBookView} />
          <AdminRoute exact path="/orderManage" component={OrderManageView} />
          <AdminRoute exact path="/userCount" component={UserCountView} />
          <AdminRoute exact path="/bookCount" component={BookCountView} />
          <Redirect from="/*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default BasicRoute;
