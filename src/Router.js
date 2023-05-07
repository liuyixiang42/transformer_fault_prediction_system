import React from "react";
import { Router, Switch, Redirect, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import LoginRoute from "./LoginRoute";
import AdminRoute from "./AdminRoute";
import LoginView from "./view/LoginView";
import { history } from "./utils/history";
import InfoView from "./view/InfoView";
import RegisterView from "./view/RegisterView";
import UserManageView from "./view/UserManageView";
import TransformerHomeView from "./view/TransformerHomeView";
import CoilDataAnalysisView from "./view/CoilDataAnalysisView";
import OilGasDataAnalysisView from "./view/OilGasDataAnalysisView";
import DataPredictionView from "./view/DataPredictionView";
import FaultDataAugmentationView from "./view/FaultDataAugmentationView";
import ModelUploadView from "./view/ModelUploadView"
import ModelShowView from "./view/ModelShowView"
import DataShowView from "./view/DataShowView"

import CoilShowView from "./view/CoilShowView"
import TerminalShowView from "./view/TerminalShowView"
import InsulationShowView from "./view/InsulationShowView"
import CoreShowView from "./view/CoreShowView"
import OilShowView from "./view/OilShowView"
import CoolShowView from "./view/CoolShowView"


import CoilDataShowView from "./view/CoilDataShowView"
import OilDataShowView from "./view/OilDataShowView"
import CoreDataShowView from "./view/CoreDataShowView"
import CoolDataShowView from "./view/CoolDataShowView"


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
          <PrivateRoute exact path="/" component={TransformerHomeView} />
          <LoginRoute exact path="/login" component={LoginView} />
          <LoginRoute exact path="/register" component={RegisterView} />
          
          <PrivateRoute exact path="/info" component={InfoView} />
          <AdminRoute exact path="/userManage" component={UserManageView} />

          <PrivateRoute exact path="/coilDataAnalysis" component={CoilDataAnalysisView} />
          <PrivateRoute exact path="/oilGasDataAnalysis" component={OilGasDataAnalysisView} />
          <PrivateRoute exact path="/dataPrediction" component={DataPredictionView} />
          <PrivateRoute exact path="/faultDataAugmentation" component={FaultDataAugmentationView} />
          <PrivateRoute exact path="/dataShow" component={DataShowView} />
          <PrivateRoute exact path="/modelShow" component={ModelShowView} />
          <PrivateRoute exact path="/modelUpload" component={ModelUploadView} />

          <PrivateRoute exact path="/coil" component={CoilShowView} />
          <PrivateRoute exact path="/terminal" component={TerminalShowView} />
          <PrivateRoute exact path="/insulation" component={InsulationShowView} />
          <PrivateRoute exact path="/core" component={CoreShowView} />
          <PrivateRoute exact path="/oil" component={OilShowView} />
          <PrivateRoute exact path="/cool" component={CoolShowView} />


          <PrivateRoute exact path="/coilData" component={CoilDataShowView} />
          <PrivateRoute exact path="/oilData" component={OilDataShowView} />
          <PrivateRoute exact path="/coreData" component={CoreDataShowView} />
          <PrivateRoute exact path="/coolData" component={CoolDataShowView} />




          <Redirect from="/*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default BasicRoute;
