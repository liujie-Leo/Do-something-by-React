/*
  该文件用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入createStore用于创建store对象
import { createStore } from 'redux'

import userInfoReducer from './user_info_reducer'

export default createStore(userInfoReducer)