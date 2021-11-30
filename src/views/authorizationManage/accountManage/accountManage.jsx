import React, { Component } from 'react'
import { Table, Button, Breadcrumb, Modal,Tag } from "antd";
import { getUserList } from "../../../api/user";
import { ApartmentOutlined, UnlockOutlined } from "@ant-design/icons";
import TableFilter from '../../../components/TableFilter/TableFilter.jsx'
const { Column } = Table;

export default class accountManage extends Component {
  getData = async () => {
    let res = await getUserList();
    this.setState({ tableData: res.data, loading: false });
  };
  state = {
    tableData: [],
    loading: true,
    isModalVisible: false,
  };
  data = {
    editModalData:{}
  }
  componentDidMount() {
    this.getData();
  }
  handleOk = () => {
    this.setState({
      isModalVisible:false
    })
  };
  handleCancel = () => {
    this.setState({
      isModalVisible:false
    })
  };
  onEdit = (e) => {
    this.setState({ isModalVisible: true })
    this.data.editModalData = e
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
              <UnlockOutlined />
              <span>账号管理</span>
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
              <Button
                type="link"
                size="small"
                onClick={() => {
                  this.onEdit(row);
                }}
              >
                编辑
              </Button>
            )}
          />
        </Table>
        <Modal
          title="基础信息"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText='确定'
          cancelText="取消"
          width={700}
        >
          {
            Object.values(this.data.editModalData).map(item => {
              return <Tag key={item}>{ item}</Tag>
            })
          }
        </Modal>
      </div>
    );
  }
}
