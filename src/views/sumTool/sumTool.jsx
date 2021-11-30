import React, { Component } from 'react'
import { Table, Button, Tag, Breadcrumb } from "antd";
import { LayoutOutlined } from "@ant-design/icons";

import data1 from '../../json/1.json'
import data2 from "../../json/2.json";
import data3 from "../../json/3.json";
import data4 from "../../json/4.json";
import data5 from "../../json/5.json";
import data6 from "../../json/6.json";
import data7 from "../../json/7.json";
import data8 from "../../json/8.json";
import data9 from "../../json/9.json";
import data10 from "../../json/10.json";
import data11 from "../../json/11.json";
import data12 from "../../json/12.json";
import data13 from "../../json/13.json";
import data14 from "../../json/14.json";
const { Column } = Table;

export default class sumTool extends Component {
  state = {
    data: data1,
    today: null,
    btnList:[]
  };
  test = [
    "",
    data1,
    data2,
    data3,
    data4,
    data5,
    data6,
    data7,
    data8,
    data9,
    data10,
    data11,
    data12,
    data13,
    data14
  ];
  initBtnList = () => {
    let btnList = []
    for (let i = 1; i < 15; i++) {
      btnList.push({ data: this.test[i], day: `day${i}` });
    }
    this.setState({
      btnList,
      today:'Day1'
    })
  };
  handleClick = (item) => {
    this.setState({
      data: item.data,
      today: item.day,
    });
  };
  componentDidMount() {
    this.initBtnList();
  }
  component
  render() {
    return (
      <div>
        <div className="bread-wrapper">
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <LayoutOutlined />
              <span>定时打卡脏数据统计工具：</span>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="mb-20">
          {this.state.btnList.map((item) => {
            return (
              <Button
                className="mr-10"
                key={item.day}
                onClick={() => {
                  this.handleClick(item);
                }}
              >
                {item.day}
              </Button>
            );
          })}
        </div>
        <div className="title mb-10 flex-row items-center">
          <span className="mr-5">当前天数:</span>
          <Tag>{this.state.today}</Tag>
        </div>
        <Table
          dataSource={this.state.data}
          bordered
          rowKey={(record) => record.name}
          expandable={{
            expandedRowRender: (record) => (
              <Table
                dataSource={record.list}
                rowKey={(record) => record.id}
                bordered
              >
                <Column title="id" dataIndex="id" key="id" />
                <Column title="售点代码" dataIndex="pocCode" key="pocCode" />
                <Column title="售点名称" dataIndex="pocName" key="pocName" />
                <Column
                  title="班次开始时间"
                  dataIndex="startTime"
                  key="startTime"
                />
                <Column
                  title="班次结束时间"
                  dataIndex="endTime"
                  key="endTime"
                />
                <Column
                  title="任务开始时间"
                  dataIndex="remindTime"
                  key="remindTime"
                />
                <Column
                  title="班次代码"
                  dataIndex="shiftCode"
                  key="shiftCode"
                />
                <Column title="班次日期" dataIndex="kqData" key="kqData" />
                <Column
                  title="是否完成打卡任务"
                  dataIndex="state"
                  key="state"
                />
                <Column title="用户代码" dataIndex="userCode" key="userCode" />
              </Table>
            ),
            rowExpandable: () => {
              return true;
            },
          }}
        >
          <Column title="name" dataIndex="name" key="name" />
        </Table>
      </div>
    );
  }
}
