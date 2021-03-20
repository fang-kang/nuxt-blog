import {
  post,
  get
} from '@/utils/http'
// 获取用户信息(id)
export const getUserInfo2 = e => get('/user/getUserInfo2', e)
// 获取用户信息(token)
export const getUserInfo = e => get('/user/getUserInfo', e)
// 注册
export const register = e => post('/user/register', e)
// 更新用户信息
export const updateUserInfo = e => post('/user/updateUserInfo', e)
// 登录
export const login = e => post('/user/login', e)
// 删除用户
export const delUser = e => post('/user/delUser', e)
// 查询用户列表
export const getUserList = e => get('/user/getUserList', e)
// 查询用户列表（分页）
export const getUserListByPage = e => post('/user/getUserListByPage', e)
