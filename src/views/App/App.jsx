import './app.less';
import AdminAsider from '../../layout/Asider/Asider'
import AdminHeader from '../../layout/Header/Header'
import AdminContent from '../../layout/Content/Content'
import { Layout } from 'antd';
import React, { Component } from 'react'

import { login } from '../../utils/login'
const { Header, Footer, Sider, Content } = Layout;

export default class App extends Component {
  render() {
    login()
    return (
      <div className="app-container">
        <Layout>
          <Sider width={200}>
            <AdminAsider />
          </Sider>
          <Layout>
            <Header>
              <AdminHeader />
            </Header>
            <Content>
              <AdminContent />
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}
