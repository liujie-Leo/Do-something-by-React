import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { Menu } from "antd";

import "./asider.less";
import menuRoute from '../../config/menuConfig'
import store from '../../redux/store'
import {deepClone} from '../../utils/tools'
const { SubMenu } = Menu;
const MenuItem = Menu.Item;

class Asider extends Component {
  // state = {
  //   collapsed: false,
  // };
  menuList = [];
  onMenuChange = (path) => {
    this.props.history.push(path);
  };
  /* 根据权限动态渲染菜单 */
  getPermissionRoute = () => {
    let permissionRoute = []
    let permissions = store.getState()["permissions"];
    if (permissions) {
      menuRoute.forEach(item => {
        if (!item.children) {
          if (permissions.includes(item.permissionKey)) {
            permissionRoute.push(item);
          }
        } else if(item.children.length>0){
            let childrens = deepClone(item.children);
            item.children = [];
            childrens.forEach((subItem) => {
              if (permissions.includes(subItem.permissionKey))
                item.children.push(subItem);
            });
            permissionRoute.push(item);
          }
      });
      this.menuList = permissionRoute;
    }
  }

  getParentPath = () => {
    let path = this.props.location.pathname;
    path = path.split('/')
    return '/' + path[path.length - 2]
  }

  render() {
    this.getPermissionRoute()
    return (
      <div className="asider-container">
        <div className="logo text-center font26">React Admin</div>
        <div className="menu">
          <Menu
            defaultSelectedKeys={[this.props.location.pathname]}
            defaultOpenKeys={[this.getParentPath()]}
            mode="inline"
            theme="dark"
            // inlineCollapsed={this.state.collapsed}
          >
            {this.menuList.map((item) => {
              if (item.children && item.children.length > 0) {
                if (item.hidden) return null;
                return (
                  <SubMenu key={item.path} title={item.title} icon={item.icon}>
                    {item.children.map((subItem) => {
                      if (subItem.hidden) return [];
                      return (
                        <MenuItem
                          key={subItem.path}
                          onClick={() => this.onMenuChange(subItem.path)}
                        >
                          {subItem.icon}
                          <span>{subItem.title}</span>
                        </MenuItem>
                      );
                    })}
                  </SubMenu>
                );
              } else {
                if (item.hidden) return null;
                return (
                  <MenuItem
                    key={item.path}
                    onClick={() => this.onMenuChange(item.path)}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </MenuItem>
                );
              }
            })}
          </Menu>
        </div>
      </div>
    );
  }
}

export default withRouter(Asider)
