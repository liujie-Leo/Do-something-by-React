import {userList} from '../config/constant'

/* 获取权限 */
export let getPermissionList = () => {
  return {
    code: 200,
    data: [10, 20, 30],
  };
}


/* 获取用户信息 */
export let getUserInfoMock = (body) => {
  let userInfo = {}
  if (body.token) {
    userInfo = userList.find(item => item.token === body.token)
  } else {
    userInfo = userList.find((item) => item.email === body.email);
  }
  if (userInfo) {
    return {
      code: 200,
      data: userInfo,
    };
  } else {
    return {
      code: 500,
      data: null,
      message:'用户信息不存在'
    };
  }
  
}


/* 获取用户列表 */
export let getUserListMock = () => {
  return {
    code: 200,
    data: userList,
  };
}