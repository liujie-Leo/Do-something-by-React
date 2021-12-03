import {
  HomeOutlined,
  CalendarOutlined,
  LayoutOutlined,
  ApartmentOutlined,
  UserOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

import WorkPlate from "@/views/WorkPlate/workPlate";
import ReportManage from "@/views/reportMange/reportManage";
import AccountManage from "@/views/authorizationManage/accountManage/accountManage";
import RoleManage from "@/views/authorizationManage/roleManage/roleManage";
import SumTool from "@/views/sumTool/sumTool";
import Setting from "@/views/Setting/Setting";
import WaterMaker from "@/views/waterMaker/waterMaker";


let menuRoute = [
  {
    title: "工作台",
    permissionKey: 10,
    name: "workPlate",
    component: WorkPlate,
    icon: <HomeOutlined />,
    path: "/admin",
  },
  {
    name: "reportManage",
    title: "报表管理",
    permissionKey: 20,
    component: ReportManage,
    icon: <CalendarOutlined />,
    path: "/admin/reportManage",
  },
  // {
  //   name: "orderManage",
  //   title: "统计工具",
  //   permissionKey: 30,
  //   icon: <LayoutOutlined />,
  //   path: "/admin/sumTool",
  // },
  {
    name: "authorizationManage",
    title: "权限管理",
    permissionKey: 40,
    icon: <ApartmentOutlined />,
    path: "/authorizationManage",
    children: [
      {
        name: "roleManage",
        title: "角色管理",
        permissionKey: 4001,
        component: RoleManage,
        icon: <UserOutlined />,
        path: "/admin/authorizationManage/roleManage",
      },
      {
        name: "accountManage",
        title: "账号管理",
        component: AccountManage,
        permissionKey: 4002,
        icon: <UnlockOutlined />,
        path: "/admin/authorizationManage/accountManage",
      },
    ],
  },
  {
    name: "Setting",
    title: "Setting",
    permissionKey: 50,
    component: Setting,
    icon: <LayoutOutlined />,
    path: "/admin/setting",
  },
  {
    name: "tools",
    title: "工具",
    icon: <LayoutOutlined />,
    permissionKey: 50,
    path: "/admin/tools",
    children: [
      {
        name: "waterMaker",
        title: "图片加水印",
        permissionKey: 60,
        component: WaterMaker,
        icon: <LayoutOutlined />,
        path: "/admin/tools/waterMarker",
      },
    ],
  },
];

export default menuRoute


