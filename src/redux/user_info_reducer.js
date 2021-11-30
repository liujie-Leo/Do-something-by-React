import {UPDATEUSERINFO,DELETEUSERINFO} from './constant'
const initUserInfo = {username:'未登录'}

const userInfoReducer = function (preState = initUserInfo,action) {
  let { type, data } = action
  switch (type) {
    case UPDATEUSERINFO: return preState = data;
    case DELETEUSERINFO: return preState = {};
    default: return preState;
  }
}

export default userInfoReducer