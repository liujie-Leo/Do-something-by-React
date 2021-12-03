import React, { Component } from 'react'

import './workPlace.less'

import { Card, Statistic, Progress, Alert } from "antd";
import * as echarts from 'echarts'

export default class WorkPlate extends Component {
  state = {
    loading: false,
  };
  componentDidMount() {
    this.initRevenueChart();
    this.initDailyLinChart();
  }
  /* 初始化Revenue图表*/
  initRevenueChart = () => {
    let chartDOM = document.getElementById("revenue-chart");
    let myChart = echarts.init(chartDOM);
    let option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "20%",
        x: "right",
        y: "center",
        padding: [0, 20, 0, 0],
        orient: "vertical",
      },
      grid: {
        left: "0",
        top: "8%",
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["40%", "70%"],
          center: ["30%", "58%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 6,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "10",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "搜索引擎" },
            { value: 735, name: "直接访问" },
            { value: 580, name: "邮件营销" },
            { value: 484, name: "联盟广告" },
          ],
        },
      ],
    };
    myChart.setOption(option);
    setTimeout(function () {
      window.onresize = function () {
        myChart.resize();
      };
    }, 200);
  };
  /* 初始化DailyLine图表*/
  initDailyLinChart = () => {
    let chartDOM = document.getElementById("daily-line-chart");
    let myChart = echarts.init(chartDOM);
    let option = {
      title: {
        text: "堆叠区域图",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      legend: {
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"],
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      grid: {
        left: "1%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "邮件营销",
          type: "line",
          stack: "总量",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
          smooth: true,
        },
        {
          name: "联盟广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
          smooth: true,
        },
        {
          name: "视频广告",
          type: "line",
          stack: "总量",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
          smooth: true,
        },
        {
          name: "直接访问",
          type: "line",
          stack: "总量",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390, 330, 320],
          smooth: true,
        },
        {
          name: "搜索引擎",
          type: "line",
          stack: "总量",
          label: {
            show: true,
            position: "top",
          },
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          smooth: true,
        },
      ],
    };
    myChart.setOption(option)
  };
  render() {
    return (
      <div>
        <Alert
          message="人类的悲欢并不相通，我只觉得他们吵闹。"
          type="warning"
          className="mb-10"
          closable
        ></Alert>
        <div className="workplace-container flex-row flex-wrap">
          <div className="flex-row  width100p">
            {/* Visits Today */}
            <Card loading={this.state.loading} className="mr-15 flex1">
              <div className="header title flex-between items-center">
                <div className="color-999">Visits Today</div>
                <div className="pointer p-6">···</div>
              </div>
              <Statistic value={214124} className="mt-20"></Statistic>
              <div className="footer flex-between mt-20">
                <div className="footer-item">
                  <div className="color-999">Registrations</div>
                  <div className="font20">123</div>
                </div>
                <div className="footer-item">
                  <div className="color-999">sign out</div>
                  <div className="font20">123</div>
                </div>
                <div className="footer-item">
                  <div className="color-999">rate</div>
                  <div className="font20">123</div>
                </div>
              </div>
            </Card>
            {/* Revenue BreakDown */}
            <Card loading={this.state.loading} className="mr-10 flex1">
              <div className="header title flex-between items-center">
                <div className="color-999">Revenue BreakDown</div>
                <div className="pointer p-6">···</div>
              </div>
              <div id="revenue-chart" className="revenue"></div>
            </Card>
            {/* App performance */}
            <Card loading={this.state.loading} className="mr-10 flex1">
              <div className="header title flex-between items-center">
                <div className="color-999">App Performance</div>
                <div className="pointer p-6">···</div>
              </div>
              <div className="mt-20">
                <div>Integration</div>
                <Progress percent={30} />
                <div className="mt-10">SDK</div>
                <Progress percent={80} strokeColor="#9ECA7F" />
              </div>
            </Card>
            {/* Server Overview */}
            <Card loading={this.state.loading} className="flex1">
              <div className="header title flex-between items-center">
                <div className="color-999">Server Overview</div>
                <div className="pointer p-6">···</div>
              </div>
              <div className="mt-10">
                <div className="mt-5 flex-between content-center items-center">
                  <div className="font12 color-999">60% / 37° / 3.3GHZ</div>
                  <div className="server-chart1 server-chart">1</div>
                </div>
                <div className="mt-5 flex-between items-center">
                  <div className="font12 color-999">60% / 37° / 3.3GHZ</div>
                  <div className="server-chart2 server-chart">1</div>
                </div>
                <div className="mt-5 flex-between items-center">
                  <div className="font12 color-999">60% / 37° / 3.3GHZ</div>
                  <div className="server-chart3 server-chart">1</div>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-10">
            <Card loading={this.state.loading}>
              <div id="daily-line-chart" />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
