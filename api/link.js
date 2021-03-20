import {
  post,
  get
} from '@/utils/http'
// 添加友链
export const addLink = query => post('/link/addLink', query)
// 查询所有友链
export const getLink = query => get('/link/getLink', query)
// 查询友链（分页）
export const getLinkList = query => post('/link/getLinkList', query)
// 编辑友链
export const editLink = query => post('/link/editLink', query)
// 删除友链
export const delLink = query => post('/link/delLink', query)
