/*
  该文件封装了user_info_reducer常用的action
*/

import { UPDATEUSERINFO, DELETEUSERINFO } from './constant'

export const createUpdateUserInfoAction = (data) => ({ type: UPDATEUSERINFO, data })
export const createDeleteUserInfoAction = (data) => ({ type: DELETEUSERINFO, data });