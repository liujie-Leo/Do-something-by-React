import Cookies from 'js-cookie'

import { getUserInfo } from "../api/user";
import store from "../redux/store";
import { createUpdateUserInfoAction,createDeleteUserInfoAction } from "../redux/user_info_actions";


/* 登录 */
export const login = (data = {}) => {
  return new Promise(async (resolve, reject) => {
    let params = data
    if (!params.email) {
      params.token = Cookies.get("token");
    }
    let res = await getUserInfo(params);
    if (res.code === 200) {
      let userInfo = res.data;
      if (userInfo.permissions.length > 0) {
        // 将用户信息保存到redux中
        store.dispatch(createUpdateUserInfoAction(userInfo));
        // 保存token
        Cookies.set('token',userInfo.token)
        resolve(res)
      } else {
        resolve(res);
      }
    } else {
      reject(res);
    }
  });
};


/* 注销 */
export const loginOut = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 移除token
      Cookies.remove('token')
      // 移除redux中的用户信息
      store.dispatch(createDeleteUserInfoAction());
      resolve()
    }, 500);
  })
}