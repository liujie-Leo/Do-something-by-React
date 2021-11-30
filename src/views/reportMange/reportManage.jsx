import React, { Component } from 'react'
import { Table, Tag, Breadcrumb, Button } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

import store from '../../redux/store'
const { Column, ColumnGroup } = Table;

export default class reportManage extends Component {
  state = {
    userInfo: {}
  }
  data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ]
  componentDidMount() {
    store.subscribe(() => { let userInfo = store.getState();this.setState({ userInfo }); })
  }
  render() {
    return (
      <div>
        <div className="bread-wrapper">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <CalendarOutlined />
              <span>报表管理</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Table dataSource={this.data} bordered>
          <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
              <>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(row) => (
              <div>
                {this.state.userInfo.permissions&&this.state.userInfo.permissions.includes(200001)?<Button size="small" type="primary">编辑</Button>:''}
              </div>
            )}
          />
        </Table>
      </div>
    );
  }
}
