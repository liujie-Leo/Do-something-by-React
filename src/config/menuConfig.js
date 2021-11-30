import {
  HomeOutlined,
  CalendarOutlined,
  LayoutOutlined,
  ApartmentOutlined,
  UserOutlined,
  UnlockOutlined,
} from "@ant-design/icons";

let menuRoute = [
  {
    title: "工作台",
    permissionKey: 10,
    name: "workPlate",
    icon: <HomeOutlined />,
    path: "/admin",
  },
  {
    name: "reportManage",
    title: "报表管理",
    permissionKey: 20,
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
        icon: <UserOutlined />,
        path: "/admin/authorizationManage/roleManage",
      },
      {
        name: "accountManage",
        title: "账号管理",
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
    icon: <LayoutOutlined />,
    path: "/admin/setting",
  },
  {
    name: "waterMaker",
    title: "waterMaker",
    permissionKey: 60,
    icon: <LayoutOutlined />,
    path: "/admin/waterMaker",
  },
];

export default menuRoute


