import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import WorkPlate from '../../views/WorkPlate/workPlate'
import ReportManage from "../../views/reportMange/reportManage";
import AccountManage from '../../views/authorizationManage/accountManage/accountManage'
import RoleManage from '../../views/authorizationManage/roleManage/roleManage'
import SumTool from '../../views/sumTool/sumTool'
import Setting from '../../views/Setting/Setting'
import WaterMaker from '../../views/waterMaker/waterMaker'
export default class Content extends Component {
  render() {
    return (
      <div className="content-container p-20">
        <Switch>
          <Route exact path="/admin" component={WorkPlate}></Route>
          <Route exact path="/admin/sumTool" component={SumTool}></Route>
          <Route exact path="/admin/reportManage" component={ReportManage}></Route>
          <Route exact path="/admin/authorizationManage/accountManage" component={AccountManage}></Route>
          <Route exact path="/admin/authorizationManage/roleManage" component={RoleManage}></Route>
          <Route exact path="/admin/setting" component={Setting}></Route>
          <Route exact path="/admin/tools/waterMarker" component={WaterMaker}></Route>
        </Switch>
      </div>
    );
  }
}