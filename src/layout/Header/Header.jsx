import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Button, message, Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

import './header.less'
import store from '../../redux/store'
import {loginOut} from '../../utils/login'

class Header extends Component {
  stateOrigin = {
    loading: false,
    btnText: "注销",
  };
  state = {
    loading: false,
    btnText: "注销",
  };
  onSignOut = async () => {
    this.stateOrigin.loading = true
    this.stateOrigin.btnText = "注销中"
    this.setState(this.stateOrigin)

    await loginOut()
    this.stateOrigin.loading = false;
    this.setState(this.stateOrigin);
    message.success("注销成功");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="header-container">
        <div className="flex-end items-center wrapper">
          <div className="mr-10">{store.getState()["username"]}</div>
          <Popover
            placement="bottom"
            content={() => {
              return (
                <div className="flex-column">
                  <Button size="small" type="primary" className="mb-5">
                    个人信息
                  </Button>
                  <Button
                    loading={this.state.loading}
                    onClick={this.onSignOut}
                    size="small"
                  >
                    {this.state.btnText}
                  </Button>
                </div>
              );
            }}
            trigger="click"
          >
            <Avatar size={32} icon={<UserOutlined />} className="pointer" />
          </Popover>
          
        </div>
      </div>
    );
  }
}

export default withRouter(Header)