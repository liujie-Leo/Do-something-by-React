import React, { Component } from 'react'
import { Route, Switch,Redirect } from 'react-router-dom'
import App from '../views/App/App.jsx'
// import DashBoard from '../views/dashBoard/dashBoard.jsx'

import {getPermission} from '../api/user'

import Login from '../views/Login/Login'
export default class Router extends Component {
  state = {
    permission :[]
  }
  async componentDidMount() {
    let res = await getPermission()
    this.setState({permission:res.data})
  }
  render() {
    return (
      <div>
        <Switch>
          <Route path="/admin" component={App}></Route>
          <Route path="/login" component={Login}></Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}
