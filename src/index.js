import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less' //导入全局CSS
import Router from './router/index.jsx'
import "antd/dist/antd.css"
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  ,
  document.getElementById("root")
);
