import React, { Component } from "react";
import { Table, Button, Breadcrumb } from "antd";
import { getUserList } from "../../../api/user";
import { ApartmentOutlined, UserOutlined } from "@ant-design/icons";
import TableFilter from "../../../components/TableFilter/TableFilter.jsx";
const { Column } = Table;

export default class accountManage extends Component {
  getData = async () => {
    let res = await getUserList();
    this.setState({ tableData: res.data, loading: false });
  };
  state = {
    tableData: [],
    loading: true,
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="account-container">
        <div className="bread-wrapper">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <ApartmentOutlined />
              <span>权限管理</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <UserOutlined />
              <span>角色管理</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <TableFilter></TableFilter>
        <Table
          dataSource={this.state.tableData}
          bordered
          rowKey={(record) => record.id}
          loading={this.state.loading}
        >
          <Column title="Id" dataIndex="id" key="id"></Column>
          <Column title="userName" dataIndex="username" key="username" />
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Token" dataIndex="token" key="token" />
          <Column
            title="Action"
            render={(row) => (
              <Button type="link" size="small">
                编辑
              </Button>
            )}
          />
        </Table>
      </div>
    );
  }
}
