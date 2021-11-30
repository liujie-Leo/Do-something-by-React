import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item
export default class TableFilter extends Component {
  onSubmit = (e) => {
    console.log(e);
  };
  formRef = React.createRef();
  clearFilter = () => {
    this.formRef.current.resetFields();
  };
  render() {
    return (
      <div className="filter-wrapper">
        <Form
          name="filter"
          ref={this.formRef}
          onFinish={this.onSubmit}
          layout="inline"
          size="small"
        >
          <FormItem label="用户名" name="username">
            <Input placeholder="请输入用户名"></Input>
          </FormItem>
          <FormItem label="邮箱" name="email">
            <Input placeholder="请输入邮箱"></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              筛选
            </Button>
          </FormItem>
          <FormItem>
            <Button onClick={this.clearFilter}>清空</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}
