import React, { Component } from 'react'
import { Breadcrumb, Upload,Modal } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import {  PlusOutlined } from "@ant-design/icons";

import './water-maker.less'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export default class waterMaker extends Component {
  state = {
    loading: false,
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
    fileList:[]
  };
  onPreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    this.setState({previewVisible:true,previewImage:file.preview})
  }
  onChange = ({ fileList }) => {
    this.setState({fileList})
  }
  onCancel = () => {
    this.setState({previewVisible:false})
  }
  render() {
    const { fileList, previewVisible, previewTitle, previewImage } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <div className="water-maker-container">
        <div className="bread-wrapper">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <CalendarOutlined />
              <span>WaterMaker Test</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="content">
          <Upload
            name='file'
            action="https://www.betterleo.com:3000/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={this.onPreview}
            onChange={this.onChange}
          >
            {fileList.length > 4 ? null : uploadButton}
          </Upload>
          <Modal
            visible={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={this.onCancel}
          >
            <img src={previewImage} style={{width:'100%'}} alt="demo"/>
          </Modal>
        </div>
      </div>
    );
  }
}
