import { getPermissionList,getUserInfoMock,getUserListMock } from "../mock/api";
export let getPermission = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getPermissionList(data));
    }, 200);
  });
};


export let getUserInfo = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getUserInfoMock(data))
    }, 200);
  })
}

export let getUserList = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(getUserListMock(data));
    }, 200);
  });
};