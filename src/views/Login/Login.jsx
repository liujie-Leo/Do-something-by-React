import React, { Component } from 'react'
import { Card } from 'antd'
import { Form,Input,Button,message } from 'antd'
import "./login.less";
import {login} from '../../utils/login'

export default class Login extends Component {
  state = {
    loading:false
  }
  render() {
    let onFinish = async (e) => {
      this.setState({ loading: true })
      setTimeout(async () => {
        // 是否登录成功
        let loginSuccessStatus = false

        let res = await login(e).catch((err) => message.error(err.message));

        if (res.code === 200) {
           if (res.data.permissions.length <= 0) {
             message.error("该用户无登录权限，请联系管理员");
           } else {
             message.success("登录成功");
             loginSuccessStatus = true;
           }
        }

        this.setState({ loading: false });

        loginSuccessStatus && this.props.history.push("/admin");
      }, 1000);
    }
    let onFinishFailed = () => {
    }
    return (
      <div className="login-container">
        <div className="login-content flex-center items-center">
          <div className="title-wrapper">
            <div className="title-1 color-fff font-bold">Do Something</div>
            <div className="title-2 color-fff mb-5">
              Exciting Amazing Happiness
            </div>
            <div className="title-3">Leo</div>
          </div>
          <Card style={{ width: 480 }}>
            <div className="title text-center mb-20 ">登录</div>
            <Form
              name="basic"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 18 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="邮箱"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="密码"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 4, span: 18 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={this.state.loading}
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
